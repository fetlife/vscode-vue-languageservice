"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const transforms_1 = require("@volar/transforms");
const vscode = require("vscode-languageserver");
const path = require("upath");
const shared = require("@volar/shared");
const shared_1 = require("@vue/shared");
const scriptRanges_1 = require("../parsers/scriptRanges");
function register({ modules: { typescript: ts }, sourceFiles, getTsLs, vueHost, scriptTsLs }) {
    return async (item, newPosition) => {
        const data = item.data;
        if (!data)
            return item;
        const sourceFile = sourceFiles.get(data.uri);
        if (data.mode === 'ts') {
            return await getTsResult(data);
        }
        if (data.mode === 'html') {
            return await getHtmlResult(item, data);
        }
        if (data.mode === 'autoImport' && sourceFile) {
            return getAutoImportResult(sourceFile, item, data);
        }
        return item;
        async function getTsResult(data) {
            const sourceMap = sourceFiles.getTsSourceMaps(data.lsType).get(data.docUri);
            if (!sourceMap) {
                // take over mode
                return await scriptTsLs.doCompletionResolve(data.tsItem, newPosition);
            }
            let newPosition_2;
            if (newPosition) {
                for (const tsRange of sourceMap.getMappedRanges(newPosition)) {
                    if (!tsRange.data.capabilities.completion)
                        continue;
                    newPosition_2 = tsRange.start;
                    break;
                }
            }
            data.tsItem = await getTsLs(sourceMap.lsType).doCompletionResolve(data.tsItem, newPosition_2);
            const newVueItem = (0, transforms_1.transformCompletionItem)(data.tsItem, tsRange => sourceMap.getSourceRange(tsRange.start, tsRange.end));
            newVueItem.data = data;
            // TODO: this is a patch for import ts file icon
            if (newVueItem.detail !== data.tsItem.detail + '.ts') {
                newVueItem.detail = data.tsItem.detail;
            }
            return newVueItem;
        }
        async function getHtmlResult(vueItem, data) {
            var _a, _b;
            let tsItem = data.tsItem;
            if (!tsItem)
                return vueItem;
            tsItem = await getTsLs('template').doCompletionResolve(tsItem);
            vueItem.tags = [...(_a = vueItem.tags) !== null && _a !== void 0 ? _a : [], ...(_b = tsItem.tags) !== null && _b !== void 0 ? _b : []];
            const details = [];
            const documentations = [];
            if (vueItem.detail)
                details.push(vueItem.detail);
            if (tsItem.detail)
                details.push(tsItem.detail);
            if (details.length) {
                vueItem.detail = details.join('\n\n');
            }
            if (vueItem.documentation)
                documentations.push(typeof vueItem.documentation === 'string' ? vueItem.documentation : vueItem.documentation.value);
            if (tsItem.documentation)
                documentations.push(typeof tsItem.documentation === 'string' ? tsItem.documentation : tsItem.documentation.value);
            if (documentations.length) {
                vueItem.documentation = {
                    kind: vscode.MarkupKind.Markdown,
                    value: documentations.join('\n\n'),
                };
            }
            return vueItem;
        }
        function getAutoImportResult(sourceFile, vueItem, data) {
            const importFile = shared.uriToFsPath(data.importUri);
            const rPath = path.relative(vueHost.getCurrentDirectory(), importFile);
            const descriptor = sourceFile.getDescriptor();
            const scriptAst = sourceFile.getScriptAst();
            const scriptSetupAst = sourceFile.getScriptSetupAst();
            let importPath = path.relative(path.dirname(data.uri), data.importUri);
            if (!importPath.startsWith('.')) {
                importPath = './' + importPath;
            }
            if (!descriptor.scriptSetup && !descriptor.script) {
                vueItem.detail = `Auto import from '${importPath}'\n\n${rPath}`;
                vueItem.documentation = {
                    kind: vscode.MarkupKind.Markdown,
                    value: '[Error] `<script>` / `<script setup>` block not found.',
                };
                return vueItem;
            }
            vueItem.labelDetails = { description: rPath };
            const scriptImport = scriptAst ? getLastImportNode(scriptAst) : undefined;
            const scriptSetupImport = scriptSetupAst ? getLastImportNode(scriptSetupAst) : undefined;
            const componentName = (0, shared_1.capitalize)((0, shared_1.camelize)(vueItem.label));
            const textDoc = sourceFile.getTextDocument();
            let insertText = '';
            const planAResult = planAInsertText();
            if (planAResult) {
                insertText = planAResult.insertText;
                vueItem.detail = planAResult.description + '\n\n' + rPath;
            }
            else {
                insertText = planBInsertText();
                vueItem.detail = `Auto import from '${importPath}'\n\n${rPath}`;
            }
            if (descriptor.scriptSetup) {
                vueItem.additionalTextEdits = [
                    vscode.TextEdit.insert(textDoc.positionAt(descriptor.scriptSetup.startTagEnd + (scriptSetupImport ? scriptSetupImport.end : 0)), '\n' + insertText),
                ];
            }
            else if (descriptor.script && scriptAst) {
                vueItem.additionalTextEdits = [
                    vscode.TextEdit.insert(textDoc.positionAt(descriptor.script.startTagEnd + (scriptImport ? scriptImport.end : 0)), '\n' + insertText),
                ];
                const scriptRanges = (0, scriptRanges_1.parseScriptRanges)(ts, scriptAst, !!descriptor.scriptSetup, true, true);
                const exportDefault = scriptRanges.exportDefault;
                if (exportDefault) {
                    // https://github.com/microsoft/TypeScript/issues/36174
                    const printer = ts.createPrinter();
                    if (exportDefault.componentsOption && exportDefault.componentsOptionNode) {
                        const newNode = {
                            ...exportDefault.componentsOptionNode,
                            properties: [
                                ...exportDefault.componentsOptionNode.properties,
                                ts.factory.createShorthandPropertyAssignment(componentName),
                            ],
                        };
                        const printText = printer.printNode(ts.EmitHint.Expression, newNode, scriptAst);
                        vueItem.additionalTextEdits.push(vscode.TextEdit.replace(vscode.Range.create(textDoc.positionAt(descriptor.script.startTagEnd + exportDefault.componentsOption.start), textDoc.positionAt(descriptor.script.startTagEnd + exportDefault.componentsOption.end)), unescape(printText.replace(/\\u/g, '%u'))));
                    }
                    else if (exportDefault.args && exportDefault.argsNode) {
                        const newNode = {
                            ...exportDefault.argsNode,
                            properties: [
                                ...exportDefault.argsNode.properties,
                                ts.factory.createShorthandPropertyAssignment(`components: { ${componentName} }`),
                            ],
                        };
                        const printText = printer.printNode(ts.EmitHint.Expression, newNode, scriptAst);
                        vueItem.additionalTextEdits.push(vscode.TextEdit.replace(vscode.Range.create(textDoc.positionAt(descriptor.script.startTagEnd + exportDefault.args.start), textDoc.positionAt(descriptor.script.startTagEnd + exportDefault.args.end)), unescape(printText.replace(/\\u/g, '%u'))));
                    }
                }
            }
            return vueItem;
            function planAInsertText() {
                const scriptUrl = sourceFile.getScriptTsDocument().uri;
                const tsImportName = (0, shared_1.camelize)(path.basename(importFile).replace(/\./g, '-'));
                const tsDetail = getTsLs('script').__internal__.raw.getCompletionEntryDetails(shared.uriToFsPath(scriptUrl), 0, tsImportName, {}, importFile, undefined, undefined);
                if (tsDetail === null || tsDetail === void 0 ? void 0 : tsDetail.codeActions) {
                    for (const action of tsDetail.codeActions) {
                        for (const change of action.changes) {
                            for (const textChange of change.textChanges) {
                                if (textChange.newText.indexOf(`import ${tsImportName} `) >= 0) {
                                    return {
                                        insertText: textChange.newText.replace(`import ${tsImportName} `, `import ${componentName} `).trim(),
                                        description: action.description,
                                    };
                                }
                            }
                        }
                    }
                }
            }
            function planBInsertText() {
                const anyImport = scriptSetupImport !== null && scriptSetupImport !== void 0 ? scriptSetupImport : scriptImport;
                let withSemicolon = true;
                let quote = '"';
                if (anyImport) {
                    withSemicolon = anyImport.text.endsWith(';');
                    quote = anyImport.text.includes("'") ? "'" : '"';
                }
                return `import ${componentName} from ${quote}${importPath}${quote}${withSemicolon ? ';' : ''}`;
            }
        }
    };
    function getLastImportNode(ast) {
        let importNode;
        ast.forEachChild(node => {
            if (ts.isImportDeclaration(node)) {
                importNode = node;
            }
        });
        return importNode ? {
            text: importNode.getFullText(ast).trim(),
            end: importNode.getEnd(),
        } : undefined;
    }
}
exports.register = register;
//# sourceMappingURL=completionResolve.js.map