"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const vscode_css_languageservice_1 = require("vscode-css-languageservice");
const vscode = require("vscode-languageserver");
const sharedLs_1 = require("../utils/sharedLs");
const shared = require("@volar/shared");
function register(context, getPreferences, getFormatOptions) {
    const { htmlLs, getCssLs, modules } = context;
    return (document) => {
        const sourceFile = context.getVueDocument(document);
        if (!sourceFile) {
            // take over mode
            const dummyTsLs = (0, sharedLs_1.getDummyTsLs)(modules.typescript, modules.ts, document, getPreferences, getFormatOptions);
            return dummyTsLs.getFoldingRanges(document.uri);
        }
        const vueResult = getVueResult(sourceFile); // include html folding ranges
        const tsResult = getTsResult(sourceFile);
        const cssResult = getCssResult(sourceFile);
        const pugResult = getPugResult(sourceFile);
        return [
            ...vueResult,
            ...tsResult,
            ...cssResult,
            ...pugResult,
        ];
        function getVueResult(sourceFile) {
            let docTextWithoutBlocks = document.getText();
            const desc = sourceFile.getDescriptor();
            const blocks = [desc.script, desc.scriptSetup, ...desc.styles, ...desc.customBlocks].filter(shared.notEmpty);
            if (desc.template && desc.template.lang !== 'html') {
                blocks.push(desc.template);
            }
            for (const block of blocks) {
                const content = docTextWithoutBlocks.substring(block.startTagEnd, block.startTagEnd + block.content.length);
                docTextWithoutBlocks = docTextWithoutBlocks.substring(0, block.startTagEnd)
                    + content.split('\n').map(line => ' '.repeat(line.length)).join('\n')
                    + docTextWithoutBlocks.substring(block.startTagEnd + block.content.length);
            }
            return htmlLs.getFoldingRanges(vscode_languageserver_textdocument_1.TextDocument.create(document.uri, document.languageId, document.version, docTextWithoutBlocks));
        }
        function getTsResult(sourceFile) {
            const tsSourceMaps = [
                sourceFile.getTemplateFormattingScript().sourceMap,
                ...sourceFile.docLsScripts().sourceMaps,
            ].filter(shared.notEmpty);
            let result = [];
            for (const sourceMap of tsSourceMaps) {
                if (!sourceMap.capabilities.foldingRanges)
                    continue;
                const dummyTsLs = (0, sharedLs_1.getDummyTsLs)(modules.typescript, modules.ts, sourceMap.mappedDocument, getPreferences, getFormatOptions);
                const foldingRanges = dummyTsLs.getFoldingRanges(sourceMap.mappedDocument.uri);
                result = result.concat(toVueFoldingRangesTs(foldingRanges, sourceMap));
            }
            return result;
        }
        function getCssResult(sourceFile) {
            let result = [];
            for (const sourceMap of sourceFile.getCssSourceMaps()) {
                if (!sourceMap.capabilities.foldingRanges)
                    continue;
                const cssLs = getCssLs(sourceMap.mappedDocument.languageId);
                if (!cssLs)
                    continue;
                const foldingRanges = cssLs.getFoldingRanges(sourceMap.mappedDocument);
                result = result.concat(toVueFoldingRanges(foldingRanges, sourceMap));
            }
            return result;
        }
        function getPugResult(sourceFile) {
            let result = [];
            for (const sourceMap of sourceFile.getPugSourceMaps()) {
                const text = sourceMap.mappedDocument.getText();
                const lines = text.split('\n');
                const lineOffsets = getLineOffsets(lines);
                const lineIndents = getLineIndents(lines);
                const foldingRanges = [];
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const offset = lineOffsets[i];
                    const indent = lineIndents[i];
                    if (indent === undefined)
                        continue;
                    const startPos = sourceMap.mappedDocument.positionAt(offset);
                    const kind = getFoldingRangeKind(line);
                    let found = false;
                    for (let j = i + 1; j < lines.length; j++) {
                        const offset_2 = lineOffsets[j];
                        const indent_2 = lineIndents[j];
                        if (indent_2 === undefined || indent_2.length <= indent.length) {
                            const endPos = sourceMap.mappedDocument.positionAt(offset_2);
                            const foldingRange = vscode.FoldingRange.create(startPos.line, endPos.line - 1, undefined, undefined, kind);
                            foldingRanges.push(foldingRange);
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        const offset_2 = text.length;
                        const endPos = sourceMap.mappedDocument.positionAt(offset_2);
                        const foldingRange = vscode.FoldingRange.create(startPos.line, endPos.line - 1, undefined, undefined, kind);
                        foldingRanges.push(foldingRange);
                    }
                }
                result = result.concat(toVueFoldingRanges(foldingRanges, sourceMap));
            }
            return result;
            function getLineOffsets(lines) {
                const offsets = [];
                let currentOffset = 0;
                for (const line of lines) {
                    offsets.push(currentOffset);
                    currentOffset += line.length + 1;
                }
                return offsets;
            }
            function getLineIndents(lines) {
                const indents = [];
                for (const line of lines) {
                    const line2 = line.trimStart();
                    if (line2 === '') {
                        indents.push(undefined);
                    }
                    else {
                        const offset = line.length - line2.length;
                        const indent = line.substr(0, offset);
                        indents.push(indent);
                    }
                }
                return indents;
            }
            function getFoldingRangeKind(line) {
                if (line.trimStart().startsWith('//')) {
                    return vscode_css_languageservice_1.FoldingRangeKind.Comment;
                }
            }
        }
    };
}
exports.register = register;
function toVueFoldingRanges(virtualFoldingRanges, sourceMap) {
    var _a, _b;
    const result = [];
    for (const foldingRange of virtualFoldingRanges) {
        const vueRange = sourceMap.getSourceRange({ line: foldingRange.startLine, character: (_a = foldingRange.startCharacter) !== null && _a !== void 0 ? _a : 0 }, { line: foldingRange.endLine, character: (_b = foldingRange.endCharacter) !== null && _b !== void 0 ? _b : 0 });
        if (vueRange) {
            foldingRange.startLine = vueRange.start.line;
            foldingRange.endLine = vueRange.end.line;
            if (foldingRange.startCharacter !== undefined)
                foldingRange.startCharacter = vueRange.start.character;
            if (foldingRange.endCharacter !== undefined)
                foldingRange.endCharacter = vueRange.end.character;
            result.push(foldingRange);
        }
    }
    return result;
}
function toVueFoldingRangesTs(virtualFoldingRanges, sourceMap) {
    var _a, _b;
    const result = [];
    for (const foldingRange of virtualFoldingRanges) {
        const vueLoc = sourceMap.getSourceRange({ line: foldingRange.startLine, character: (_a = foldingRange.startCharacter) !== null && _a !== void 0 ? _a : 0 }, { line: foldingRange.endLine, character: (_b = foldingRange.endCharacter) !== null && _b !== void 0 ? _b : 0 });
        if (vueLoc && vueLoc.data.capabilities.foldingRanges) {
            foldingRange.startLine = vueLoc.start.line;
            foldingRange.endLine = vueLoc.end.line;
            if (foldingRange.startCharacter !== undefined)
                foldingRange.startCharacter = vueLoc.start.character;
            if (foldingRange.endCharacter !== undefined)
                foldingRange.endCharacter = vueLoc.end.character;
            result.push(foldingRange);
        }
    }
    return result;
}
//# sourceMappingURL=foldingRanges.js.map