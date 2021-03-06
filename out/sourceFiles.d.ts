import type * as vscode from 'vscode-languageserver';
import type { TextDocument } from 'vscode-languageserver-textdocument';
import type { CssSourceMap, HtmlSourceMap, TeleportSourceMap, TsSourceMap } from './utils/sourceMaps';
export declare type SourceFiles = ReturnType<typeof createSourceFiles>;
export declare function createSourceFiles(): {
    getUris: () => string[];
    getDirs: () => string[];
    getAll: () => {
        uri: string;
        getVersion: () => string;
        getTemplateTagNames: () => Record<string, {
            rawComponent: string;
            slotsComponent: string;
            baseProps: string;
            emit: string;
            slots: string;
            events: Record<string, string>;
            offsets: number[];
        }> | undefined;
        getTemplateAttrNames: () => Set<string> | undefined;
        getTextDocument: () => TextDocument;
        getTemplateScriptDocument: () => TextDocument | undefined;
        update: (newContent: string, newVersion: string) => {
            scriptContentUpdated: boolean;
            scriptUpdated: boolean;
            templateScriptUpdated: boolean;
        };
        updateTemplateScript: (templateTsLs: {
            findDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findTypeDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findReferences: (uri: string, position: vscode.Position) => vscode.Location[];
            prepareRename: (uri: string, position: vscode.Position) => vscode.Range | vscode.ResponseError<void> | undefined;
            doRename: (uri: string, position: vscode.Position, newName: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getEditsForFileRename: (oldUri: string, newUri: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getCodeActions: (uri: string, range: vscode.Range, context: vscode.CodeActionContext) => Promise<vscode.CodeAction[] | undefined>;
            doCodeActionResolve: (codeAction: vscode.CodeAction) => Promise<vscode.CodeAction>;
            findDocumentHighlights: (uri: string, position: vscode.Position) => vscode.DocumentHighlight[];
            findDocumentSymbols: (uri: string) => vscode.SymbolInformation[];
            findWorkspaceSymbols: (query: string) => vscode.SymbolInformation[];
            doComplete: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => Promise<vscode.CompletionList | undefined>;
            doCompletionResolve: (item: vscode.CompletionItem, newPosition?: vscode.Position | undefined) => Promise<vscode.CompletionItem>;
            doHover: (uri: string, position: vscode.Position, documentOnly?: boolean | undefined) => vscode.Hover | undefined;
            doFormatting: (uri: string, options: vscode.FormattingOptions, range?: vscode.Range | undefined) => Promise<vscode.TextEdit[]>;
            getSignatureHelp: (uri: string, position: vscode.Position, context?: vscode.SignatureHelpContext | undefined) => vscode.SignatureHelp | undefined;
            getSelectionRanges: (uri: string, positions: vscode.Position[]) => vscode.SelectionRange[];
            doValidation: (uri: string, options: {
                semantic?: boolean | undefined;
                syntactic?: boolean | undefined;
                suggestion?: boolean | undefined;
                declaration?: boolean | undefined;
            }, cancellationToken?: import("typescript/lib/tsserverlibrary").CancellationToken | undefined) => vscode.Diagnostic[];
            getFoldingRanges: (uri: string) => vscode.FoldingRange[];
            getDocumentSemanticTokens: (uri: string, range?: vscode.Range | undefined, cancle?: vscode.CancellationToken | undefined) => [number, number, number, number, number][] | undefined;
            callHierarchy: {
                doPrepare: (uri: string, position: vscode.Position) => vscode.CallHierarchyItem[];
                getIncomingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyIncomingCall[];
                getOutgoingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyOutgoingCall[];
            };
            dispose: () => void;
            __internal__: {
                host: import("vscode-typescript-languageservice").LanguageServiceHost;
                raw: import("typescript/lib/tsserverlibrary").LanguageService;
                getTextDocument: (uri: string) => TextDocument | undefined;
                getValidTextDocument: (uri: string) => TextDocument | undefined;
                doCompleteSync: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => vscode.CompletionList | undefined;
            };
        }) => boolean;
        getScriptTsDocument: () => TextDocument;
        getScriptTsSourceMap: () => TsSourceMap;
        getTsSourceMaps: () => TsSourceMap[];
        getCssSourceMaps: () => CssSourceMap[];
        getJsonSourceMaps: () => import("./utils/sourceMaps").JsonSourceMap[];
        getHtmlSourceMaps: () => HtmlSourceMap[];
        getPugSourceMaps: () => import("./utils/sourceMaps").PugSourceMap[];
        getTemplateScriptData: () => {
            projectVersion: string | undefined;
            context: string[];
            contextItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            components: string[];
            componentItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            props: string[];
            setupReturns: string[];
        };
        getDescriptor: () => {
            template: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            script: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                src: string | undefined;
            } | null;
            scriptSetup: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            styles: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                module: string | undefined;
                scoped: boolean;
            }[];
            customBlocks: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                type: string;
            }[];
        };
        getScriptAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getScriptSetupAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getVueHtmlDocument: () => import("vscode-html-languageservice").HTMLDocument;
        getScriptSetupData: () => {
            bindings: import("./parsers/types").TextRange[];
            typeBindings: import("./parsers/types").TextRange[];
            withDefaultsArg: import("./parsers/types").TextRange | undefined;
            propsRuntimeArg: import("./parsers/types").TextRange | undefined;
            propsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsRuntimeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeNums: number;
        } | undefined;
        docLsScripts: () => {
            documents: TextDocument[];
            sourceMaps: TsSourceMap[];
        };
        getTemplateFormattingScript: () => {
            document: TextDocument | undefined;
            sourceMap: TsSourceMap | undefined;
        };
        getSfcRefSugarRanges: () => {
            refs: {
                flag: import("./parsers/types").TextRange;
                leftBindings: import("./parsers/types").TextRange[];
                rightFn: import("./parsers/types").TextRange;
            }[];
            raws: {
                fullRange: import("./parsers/types").TextRange;
                argsRange: import("./parsers/types").TextRange;
            }[];
        } | undefined;
        refs: {
            document: import("@vue/reactivity").ComputedRef<TextDocument>;
            descriptor: {
                template: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                script: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    src: string | undefined;
                } | null;
                scriptSetup: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                styles: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    module: string | undefined;
                    scoped: boolean;
                }[];
                customBlocks: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    type: string;
                }[];
            };
            lastUpdated: {
                template: boolean;
                script: boolean;
                scriptSetup: boolean;
            };
            sfcJsons: {
                textDocuments: import("@vue/reactivity").ComputedRef<{
                    index: number;
                    textDocument: TextDocument;
                    jsonDocument: import("vscode-json-languageservice").JSONDocument;
                }[]>;
                sourceMaps: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").JsonSourceMap[]>;
            };
            sfcTemplate: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                htmlSourceMap: import("@vue/reactivity").ComputedRef<HtmlSourceMap | undefined>;
                pugSourceMap: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").PugSourceMap | undefined>;
                htmlDocument: import("@vue/reactivity").ComputedRef<import("vscode-html-languageservice").HTMLDocument | undefined>;
                pugDocument: import("@vue/reactivity").ComputedRef<{
                    pugTextDocument: TextDocument;
                    htmlTextDocument: TextDocument;
                    htmlDocument: import("vscode-html-languageservice").HTMLDocument;
                    pugCode: string;
                    htmlCode: string;
                    sourceMap: import("@volar/source-map").SourceMap<undefined>;
                    error: {
                        code: string;
                        msg: string;
                        line: number;
                        column: number;
                        filename: string;
                    } | undefined;
                } | undefined>;
            };
            sfcTemplateData: import("@vue/reactivity").ComputedRef<{
                sourceLang: "html" | "pug";
                html: string;
                htmlTextDocument: TextDocument;
                htmlToTemplate: (start: number, end: number) => number | undefined;
            } | undefined>;
            sfcTemplateCompileResult: import("@vue/reactivity").ComputedRef<{
                errors: vscode.Diagnostic[];
                ast: import("@vue/compiler-core").RootNode | undefined;
            } | undefined>;
            sfcTemplateScript: {
                templateCodeGens: import("@vue/reactivity").ComputedRef<{
                    codeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    formatCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    cssCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: undefined, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<undefined>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<undefined>) => void;
                    };
                    tagNames: Record<string, {
                        rawComponent: string;
                        slotsComponent: string;
                        baseProps: string;
                        emit: string;
                        slots: string;
                        events: Record<string, string>;
                        offsets: number[];
                    }>;
                    attrNames: Set<string>;
                } | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                textDocument: import("@vue/reactivity").Ref<TextDocument | undefined>;
                textDocumentForFormatting: import("@vue/reactivity").Ref<TextDocument | undefined>;
                sourceMapForFormatting: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").Ref<TeleportSourceMap | undefined>;
                cssTextDocument: import("@vue/reactivity").ComputedRef<{
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                    links: never[];
                    module: boolean;
                    scoped: boolean;
                } | undefined>;
                cssSourceMap: import("@vue/reactivity").ComputedRef<CssSourceMap | undefined>;
                update: () => void;
            };
            sfcEntryForTemplateLs: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
            };
            sfcScriptForScriptLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap>;
            };
            sfcScriptForTemplateLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap | undefined>;
            };
            templateScriptData: {
                projectVersion: string | undefined;
                context: string[];
                contextItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                components: string[];
                componentItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                props: string[];
                setupReturns: string[];
            };
            cssLsDocuments: import("@vue/reactivity").ComputedRef<({
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet | undefined;
                binds: import("./parsers/types").TextRange[];
                links: {
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                }[];
                module: string | undefined;
                scoped: boolean;
            } | {
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet;
                links: never[];
                module: boolean;
                scoped: boolean;
            })[]>;
            cssLsSourceMaps: import("@vue/reactivity").ComputedRef<CssSourceMap[]>;
            scriptLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            scriptLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            templateLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsTeleports: import("@vue/reactivity").ComputedRef<TeleportSourceMap[]>;
        };
    }[];
    get: (_uri: string) => {
        uri: string;
        getVersion: () => string;
        getTemplateTagNames: () => Record<string, {
            rawComponent: string;
            slotsComponent: string;
            baseProps: string;
            emit: string;
            slots: string;
            events: Record<string, string>;
            offsets: number[];
        }> | undefined;
        getTemplateAttrNames: () => Set<string> | undefined;
        getTextDocument: () => TextDocument;
        getTemplateScriptDocument: () => TextDocument | undefined;
        update: (newContent: string, newVersion: string) => {
            scriptContentUpdated: boolean;
            scriptUpdated: boolean;
            templateScriptUpdated: boolean;
        };
        updateTemplateScript: (templateTsLs: {
            findDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findTypeDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findReferences: (uri: string, position: vscode.Position) => vscode.Location[];
            prepareRename: (uri: string, position: vscode.Position) => vscode.Range | vscode.ResponseError<void> | undefined;
            doRename: (uri: string, position: vscode.Position, newName: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getEditsForFileRename: (oldUri: string, newUri: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getCodeActions: (uri: string, range: vscode.Range, context: vscode.CodeActionContext) => Promise<vscode.CodeAction[] | undefined>;
            doCodeActionResolve: (codeAction: vscode.CodeAction) => Promise<vscode.CodeAction>;
            findDocumentHighlights: (uri: string, position: vscode.Position) => vscode.DocumentHighlight[];
            findDocumentSymbols: (uri: string) => vscode.SymbolInformation[];
            findWorkspaceSymbols: (query: string) => vscode.SymbolInformation[];
            doComplete: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => Promise<vscode.CompletionList | undefined>;
            doCompletionResolve: (item: vscode.CompletionItem, newPosition?: vscode.Position | undefined) => Promise<vscode.CompletionItem>;
            doHover: (uri: string, position: vscode.Position, documentOnly?: boolean | undefined) => vscode.Hover | undefined;
            doFormatting: (uri: string, options: vscode.FormattingOptions, range?: vscode.Range | undefined) => Promise<vscode.TextEdit[]>;
            getSignatureHelp: (uri: string, position: vscode.Position, context?: vscode.SignatureHelpContext | undefined) => vscode.SignatureHelp | undefined;
            getSelectionRanges: (uri: string, positions: vscode.Position[]) => vscode.SelectionRange[];
            doValidation: (uri: string, options: {
                semantic?: boolean | undefined;
                syntactic?: boolean | undefined;
                suggestion?: boolean | undefined;
                declaration?: boolean | undefined;
            }, cancellationToken?: import("typescript/lib/tsserverlibrary").CancellationToken | undefined) => vscode.Diagnostic[];
            getFoldingRanges: (uri: string) => vscode.FoldingRange[];
            getDocumentSemanticTokens: (uri: string, range?: vscode.Range | undefined, cancle?: vscode.CancellationToken | undefined) => [number, number, number, number, number][] | undefined;
            callHierarchy: {
                doPrepare: (uri: string, position: vscode.Position) => vscode.CallHierarchyItem[];
                getIncomingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyIncomingCall[];
                getOutgoingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyOutgoingCall[];
            };
            dispose: () => void;
            __internal__: {
                host: import("vscode-typescript-languageservice").LanguageServiceHost;
                raw: import("typescript/lib/tsserverlibrary").LanguageService;
                getTextDocument: (uri: string) => TextDocument | undefined;
                getValidTextDocument: (uri: string) => TextDocument | undefined;
                doCompleteSync: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => vscode.CompletionList | undefined;
            };
        }) => boolean;
        getScriptTsDocument: () => TextDocument;
        getScriptTsSourceMap: () => TsSourceMap;
        getTsSourceMaps: () => TsSourceMap[];
        getCssSourceMaps: () => CssSourceMap[];
        getJsonSourceMaps: () => import("./utils/sourceMaps").JsonSourceMap[];
        getHtmlSourceMaps: () => HtmlSourceMap[];
        getPugSourceMaps: () => import("./utils/sourceMaps").PugSourceMap[];
        getTemplateScriptData: () => {
            projectVersion: string | undefined;
            context: string[];
            contextItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            components: string[];
            componentItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            props: string[];
            setupReturns: string[];
        };
        getDescriptor: () => {
            template: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            script: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                src: string | undefined;
            } | null;
            scriptSetup: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            styles: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                module: string | undefined;
                scoped: boolean;
            }[];
            customBlocks: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                type: string;
            }[];
        };
        getScriptAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getScriptSetupAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getVueHtmlDocument: () => import("vscode-html-languageservice").HTMLDocument;
        getScriptSetupData: () => {
            bindings: import("./parsers/types").TextRange[];
            typeBindings: import("./parsers/types").TextRange[];
            withDefaultsArg: import("./parsers/types").TextRange | undefined;
            propsRuntimeArg: import("./parsers/types").TextRange | undefined;
            propsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsRuntimeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeNums: number;
        } | undefined;
        docLsScripts: () => {
            documents: TextDocument[];
            sourceMaps: TsSourceMap[];
        };
        getTemplateFormattingScript: () => {
            document: TextDocument | undefined;
            sourceMap: TsSourceMap | undefined;
        };
        getSfcRefSugarRanges: () => {
            refs: {
                flag: import("./parsers/types").TextRange;
                leftBindings: import("./parsers/types").TextRange[];
                rightFn: import("./parsers/types").TextRange;
            }[];
            raws: {
                fullRange: import("./parsers/types").TextRange;
                argsRange: import("./parsers/types").TextRange;
            }[];
        } | undefined;
        refs: {
            document: import("@vue/reactivity").ComputedRef<TextDocument>;
            descriptor: {
                template: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                script: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    src: string | undefined;
                } | null;
                scriptSetup: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                styles: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    module: string | undefined;
                    scoped: boolean;
                }[];
                customBlocks: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    type: string;
                }[];
            };
            lastUpdated: {
                template: boolean;
                script: boolean;
                scriptSetup: boolean;
            };
            sfcJsons: {
                textDocuments: import("@vue/reactivity").ComputedRef<{
                    index: number;
                    textDocument: TextDocument;
                    jsonDocument: import("vscode-json-languageservice").JSONDocument;
                }[]>;
                sourceMaps: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").JsonSourceMap[]>;
            };
            sfcTemplate: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                htmlSourceMap: import("@vue/reactivity").ComputedRef<HtmlSourceMap | undefined>;
                pugSourceMap: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").PugSourceMap | undefined>;
                htmlDocument: import("@vue/reactivity").ComputedRef<import("vscode-html-languageservice").HTMLDocument | undefined>;
                pugDocument: import("@vue/reactivity").ComputedRef<{
                    pugTextDocument: TextDocument;
                    htmlTextDocument: TextDocument;
                    htmlDocument: import("vscode-html-languageservice").HTMLDocument;
                    pugCode: string;
                    htmlCode: string;
                    sourceMap: import("@volar/source-map").SourceMap<undefined>;
                    error: {
                        code: string;
                        msg: string;
                        line: number;
                        column: number;
                        filename: string;
                    } | undefined;
                } | undefined>;
            };
            sfcTemplateData: import("@vue/reactivity").ComputedRef<{
                sourceLang: "html" | "pug";
                html: string;
                htmlTextDocument: TextDocument;
                htmlToTemplate: (start: number, end: number) => number | undefined;
            } | undefined>;
            sfcTemplateCompileResult: import("@vue/reactivity").ComputedRef<{
                errors: vscode.Diagnostic[];
                ast: import("@vue/compiler-core").RootNode | undefined;
            } | undefined>;
            sfcTemplateScript: {
                templateCodeGens: import("@vue/reactivity").ComputedRef<{
                    codeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    formatCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    cssCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: undefined, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<undefined>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<undefined>) => void;
                    };
                    tagNames: Record<string, {
                        rawComponent: string;
                        slotsComponent: string;
                        baseProps: string;
                        emit: string;
                        slots: string;
                        events: Record<string, string>;
                        offsets: number[];
                    }>;
                    attrNames: Set<string>;
                } | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                textDocument: import("@vue/reactivity").Ref<TextDocument | undefined>;
                textDocumentForFormatting: import("@vue/reactivity").Ref<TextDocument | undefined>;
                sourceMapForFormatting: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").Ref<TeleportSourceMap | undefined>;
                cssTextDocument: import("@vue/reactivity").ComputedRef<{
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                    links: never[];
                    module: boolean;
                    scoped: boolean;
                } | undefined>;
                cssSourceMap: import("@vue/reactivity").ComputedRef<CssSourceMap | undefined>;
                update: () => void;
            };
            sfcEntryForTemplateLs: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
            };
            sfcScriptForScriptLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap>;
            };
            sfcScriptForTemplateLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap | undefined>;
            };
            templateScriptData: {
                projectVersion: string | undefined;
                context: string[];
                contextItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                components: string[];
                componentItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                props: string[];
                setupReturns: string[];
            };
            cssLsDocuments: import("@vue/reactivity").ComputedRef<({
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet | undefined;
                binds: import("./parsers/types").TextRange[];
                links: {
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                }[];
                module: string | undefined;
                scoped: boolean;
            } | {
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet;
                links: never[];
                module: boolean;
                scoped: boolean;
            })[]>;
            cssLsSourceMaps: import("@vue/reactivity").ComputedRef<CssSourceMap[]>;
            scriptLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            scriptLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            templateLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsTeleports: import("@vue/reactivity").ComputedRef<TeleportSourceMap[]>;
        };
    } | undefined;
    set: (_uri: string, item: {
        uri: string;
        getVersion: () => string;
        getTemplateTagNames: () => Record<string, {
            rawComponent: string;
            slotsComponent: string;
            baseProps: string;
            emit: string;
            slots: string;
            events: Record<string, string>;
            offsets: number[];
        }> | undefined;
        getTemplateAttrNames: () => Set<string> | undefined;
        getTextDocument: () => TextDocument;
        getTemplateScriptDocument: () => TextDocument | undefined;
        update: (newContent: string, newVersion: string) => {
            scriptContentUpdated: boolean;
            scriptUpdated: boolean;
            templateScriptUpdated: boolean;
        };
        updateTemplateScript: (templateTsLs: {
            findDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findTypeDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findReferences: (uri: string, position: vscode.Position) => vscode.Location[];
            prepareRename: (uri: string, position: vscode.Position) => vscode.Range | vscode.ResponseError<void> | undefined;
            doRename: (uri: string, position: vscode.Position, newName: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getEditsForFileRename: (oldUri: string, newUri: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getCodeActions: (uri: string, range: vscode.Range, context: vscode.CodeActionContext) => Promise<vscode.CodeAction[] | undefined>;
            doCodeActionResolve: (codeAction: vscode.CodeAction) => Promise<vscode.CodeAction>;
            findDocumentHighlights: (uri: string, position: vscode.Position) => vscode.DocumentHighlight[];
            findDocumentSymbols: (uri: string) => vscode.SymbolInformation[];
            findWorkspaceSymbols: (query: string) => vscode.SymbolInformation[];
            doComplete: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => Promise<vscode.CompletionList | undefined>;
            doCompletionResolve: (item: vscode.CompletionItem, newPosition?: vscode.Position | undefined) => Promise<vscode.CompletionItem>;
            doHover: (uri: string, position: vscode.Position, documentOnly?: boolean | undefined) => vscode.Hover | undefined;
            doFormatting: (uri: string, options: vscode.FormattingOptions, range?: vscode.Range | undefined) => Promise<vscode.TextEdit[]>;
            getSignatureHelp: (uri: string, position: vscode.Position, context?: vscode.SignatureHelpContext | undefined) => vscode.SignatureHelp | undefined;
            getSelectionRanges: (uri: string, positions: vscode.Position[]) => vscode.SelectionRange[];
            doValidation: (uri: string, options: {
                semantic?: boolean | undefined;
                syntactic?: boolean | undefined;
                suggestion?: boolean | undefined;
                declaration?: boolean | undefined;
            }, cancellationToken?: import("typescript/lib/tsserverlibrary").CancellationToken | undefined) => vscode.Diagnostic[];
            getFoldingRanges: (uri: string) => vscode.FoldingRange[];
            getDocumentSemanticTokens: (uri: string, range?: vscode.Range | undefined, cancle?: vscode.CancellationToken | undefined) => [number, number, number, number, number][] | undefined;
            callHierarchy: {
                doPrepare: (uri: string, position: vscode.Position) => vscode.CallHierarchyItem[];
                getIncomingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyIncomingCall[];
                getOutgoingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyOutgoingCall[];
            };
            dispose: () => void;
            __internal__: {
                host: import("vscode-typescript-languageservice").LanguageServiceHost;
                raw: import("typescript/lib/tsserverlibrary").LanguageService;
                getTextDocument: (uri: string) => TextDocument | undefined;
                getValidTextDocument: (uri: string) => TextDocument | undefined;
                doCompleteSync: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => vscode.CompletionList | undefined;
            };
        }) => boolean;
        getScriptTsDocument: () => TextDocument;
        getScriptTsSourceMap: () => TsSourceMap;
        getTsSourceMaps: () => TsSourceMap[];
        getCssSourceMaps: () => CssSourceMap[];
        getJsonSourceMaps: () => import("./utils/sourceMaps").JsonSourceMap[];
        getHtmlSourceMaps: () => HtmlSourceMap[];
        getPugSourceMaps: () => import("./utils/sourceMaps").PugSourceMap[];
        getTemplateScriptData: () => {
            projectVersion: string | undefined;
            context: string[];
            contextItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            components: string[];
            componentItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            props: string[];
            setupReturns: string[];
        };
        getDescriptor: () => {
            template: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            script: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                src: string | undefined;
            } | null;
            scriptSetup: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            styles: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                module: string | undefined;
                scoped: boolean;
            }[];
            customBlocks: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                type: string;
            }[];
        };
        getScriptAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getScriptSetupAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getVueHtmlDocument: () => import("vscode-html-languageservice").HTMLDocument;
        getScriptSetupData: () => {
            bindings: import("./parsers/types").TextRange[];
            typeBindings: import("./parsers/types").TextRange[];
            withDefaultsArg: import("./parsers/types").TextRange | undefined;
            propsRuntimeArg: import("./parsers/types").TextRange | undefined;
            propsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsRuntimeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeNums: number;
        } | undefined;
        docLsScripts: () => {
            documents: TextDocument[];
            sourceMaps: TsSourceMap[];
        };
        getTemplateFormattingScript: () => {
            document: TextDocument | undefined;
            sourceMap: TsSourceMap | undefined;
        };
        getSfcRefSugarRanges: () => {
            refs: {
                flag: import("./parsers/types").TextRange;
                leftBindings: import("./parsers/types").TextRange[];
                rightFn: import("./parsers/types").TextRange;
            }[];
            raws: {
                fullRange: import("./parsers/types").TextRange;
                argsRange: import("./parsers/types").TextRange;
            }[];
        } | undefined;
        refs: {
            document: import("@vue/reactivity").ComputedRef<TextDocument>;
            descriptor: {
                template: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                script: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    src: string | undefined;
                } | null;
                scriptSetup: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                styles: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    module: string | undefined;
                    scoped: boolean;
                }[];
                customBlocks: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    type: string;
                }[];
            };
            lastUpdated: {
                template: boolean;
                script: boolean;
                scriptSetup: boolean;
            };
            sfcJsons: {
                textDocuments: import("@vue/reactivity").ComputedRef<{
                    index: number;
                    textDocument: TextDocument;
                    jsonDocument: import("vscode-json-languageservice").JSONDocument;
                }[]>;
                sourceMaps: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").JsonSourceMap[]>;
            };
            sfcTemplate: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                htmlSourceMap: import("@vue/reactivity").ComputedRef<HtmlSourceMap | undefined>;
                pugSourceMap: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").PugSourceMap | undefined>;
                htmlDocument: import("@vue/reactivity").ComputedRef<import("vscode-html-languageservice").HTMLDocument | undefined>;
                pugDocument: import("@vue/reactivity").ComputedRef<{
                    pugTextDocument: TextDocument;
                    htmlTextDocument: TextDocument;
                    htmlDocument: import("vscode-html-languageservice").HTMLDocument;
                    pugCode: string;
                    htmlCode: string;
                    sourceMap: import("@volar/source-map").SourceMap<undefined>;
                    error: {
                        code: string;
                        msg: string;
                        line: number;
                        column: number;
                        filename: string;
                    } | undefined;
                } | undefined>;
            };
            sfcTemplateData: import("@vue/reactivity").ComputedRef<{
                sourceLang: "html" | "pug";
                html: string;
                htmlTextDocument: TextDocument;
                htmlToTemplate: (start: number, end: number) => number | undefined;
            } | undefined>;
            sfcTemplateCompileResult: import("@vue/reactivity").ComputedRef<{
                errors: vscode.Diagnostic[];
                ast: import("@vue/compiler-core").RootNode | undefined;
            } | undefined>;
            sfcTemplateScript: {
                templateCodeGens: import("@vue/reactivity").ComputedRef<{
                    codeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    formatCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    cssCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: undefined, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<undefined>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<undefined>) => void;
                    };
                    tagNames: Record<string, {
                        rawComponent: string;
                        slotsComponent: string;
                        baseProps: string;
                        emit: string;
                        slots: string;
                        events: Record<string, string>;
                        offsets: number[];
                    }>;
                    attrNames: Set<string>;
                } | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                textDocument: import("@vue/reactivity").Ref<TextDocument | undefined>;
                textDocumentForFormatting: import("@vue/reactivity").Ref<TextDocument | undefined>;
                sourceMapForFormatting: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").Ref<TeleportSourceMap | undefined>;
                cssTextDocument: import("@vue/reactivity").ComputedRef<{
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                    links: never[];
                    module: boolean;
                    scoped: boolean;
                } | undefined>;
                cssSourceMap: import("@vue/reactivity").ComputedRef<CssSourceMap | undefined>;
                update: () => void;
            };
            sfcEntryForTemplateLs: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
            };
            sfcScriptForScriptLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap>;
            };
            sfcScriptForTemplateLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap | undefined>;
            };
            templateScriptData: {
                projectVersion: string | undefined;
                context: string[];
                contextItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                components: string[];
                componentItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                props: string[];
                setupReturns: string[];
            };
            cssLsDocuments: import("@vue/reactivity").ComputedRef<({
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet | undefined;
                binds: import("./parsers/types").TextRange[];
                links: {
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                }[];
                module: string | undefined;
                scoped: boolean;
            } | {
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet;
                links: never[];
                module: boolean;
                scoped: boolean;
            })[]>;
            cssLsSourceMaps: import("@vue/reactivity").ComputedRef<CssSourceMap[]>;
            scriptLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            scriptLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            templateLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsTeleports: import("@vue/reactivity").ComputedRef<TeleportSourceMap[]>;
        };
    }) => void;
    delete: (_uri: string) => boolean;
    getTsTeleports: (lsType: 'script' | 'template') => Map<string, TeleportSourceMap>;
    getTsDocuments: (lsType: 'script' | 'template') => Map<string, TextDocument>;
    getTsSourceMaps: (lsType: 'script' | 'template') => Map<string, TsSourceMap>;
    getSourceFileByTsUri: (lsType: 'script' | 'template', uri: string) => {
        uri: string;
        getVersion: () => string;
        getTemplateTagNames: () => Record<string, {
            rawComponent: string;
            slotsComponent: string;
            baseProps: string;
            emit: string;
            slots: string;
            events: Record<string, string>;
            offsets: number[];
        }> | undefined;
        getTemplateAttrNames: () => Set<string> | undefined;
        getTextDocument: () => TextDocument;
        getTemplateScriptDocument: () => TextDocument | undefined;
        update: (newContent: string, newVersion: string) => {
            scriptContentUpdated: boolean;
            scriptUpdated: boolean;
            templateScriptUpdated: boolean;
        };
        updateTemplateScript: (templateTsLs: {
            findDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findTypeDefinition: (uri: string, position: vscode.Position) => vscode.LocationLink[];
            findReferences: (uri: string, position: vscode.Position) => vscode.Location[];
            prepareRename: (uri: string, position: vscode.Position) => vscode.Range | vscode.ResponseError<void> | undefined;
            doRename: (uri: string, position: vscode.Position, newName: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getEditsForFileRename: (oldUri: string, newUri: string) => Promise<vscode.WorkspaceEdit | undefined>;
            getCodeActions: (uri: string, range: vscode.Range, context: vscode.CodeActionContext) => Promise<vscode.CodeAction[] | undefined>;
            doCodeActionResolve: (codeAction: vscode.CodeAction) => Promise<vscode.CodeAction>;
            findDocumentHighlights: (uri: string, position: vscode.Position) => vscode.DocumentHighlight[];
            findDocumentSymbols: (uri: string) => vscode.SymbolInformation[];
            findWorkspaceSymbols: (query: string) => vscode.SymbolInformation[];
            doComplete: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => Promise<vscode.CompletionList | undefined>;
            doCompletionResolve: (item: vscode.CompletionItem, newPosition?: vscode.Position | undefined) => Promise<vscode.CompletionItem>;
            doHover: (uri: string, position: vscode.Position, documentOnly?: boolean | undefined) => vscode.Hover | undefined;
            doFormatting: (uri: string, options: vscode.FormattingOptions, range?: vscode.Range | undefined) => Promise<vscode.TextEdit[]>;
            getSignatureHelp: (uri: string, position: vscode.Position, context?: vscode.SignatureHelpContext | undefined) => vscode.SignatureHelp | undefined;
            getSelectionRanges: (uri: string, positions: vscode.Position[]) => vscode.SelectionRange[];
            doValidation: (uri: string, options: {
                semantic?: boolean | undefined;
                syntactic?: boolean | undefined;
                suggestion?: boolean | undefined;
                declaration?: boolean | undefined;
            }, cancellationToken?: import("typescript/lib/tsserverlibrary").CancellationToken | undefined) => vscode.Diagnostic[];
            getFoldingRanges: (uri: string) => vscode.FoldingRange[];
            getDocumentSemanticTokens: (uri: string, range?: vscode.Range | undefined, cancle?: vscode.CancellationToken | undefined) => [number, number, number, number, number][] | undefined;
            callHierarchy: {
                doPrepare: (uri: string, position: vscode.Position) => vscode.CallHierarchyItem[];
                getIncomingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyIncomingCall[];
                getOutgoingCalls: (item: vscode.CallHierarchyItem) => vscode.CallHierarchyOutgoingCall[];
            };
            dispose: () => void;
            __internal__: {
                host: import("vscode-typescript-languageservice").LanguageServiceHost;
                raw: import("typescript/lib/tsserverlibrary").LanguageService;
                getTextDocument: (uri: string) => TextDocument | undefined;
                getValidTextDocument: (uri: string) => TextDocument | undefined;
                doCompleteSync: (uri: string, position: vscode.Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => vscode.CompletionList | undefined;
            };
        }) => boolean;
        getScriptTsDocument: () => TextDocument;
        getScriptTsSourceMap: () => TsSourceMap;
        getTsSourceMaps: () => TsSourceMap[];
        getCssSourceMaps: () => CssSourceMap[];
        getJsonSourceMaps: () => import("./utils/sourceMaps").JsonSourceMap[];
        getHtmlSourceMaps: () => HtmlSourceMap[];
        getPugSourceMaps: () => import("./utils/sourceMaps").PugSourceMap[];
        getTemplateScriptData: () => {
            projectVersion: string | undefined;
            context: string[];
            contextItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            components: string[];
            componentItems: {
                label: string;
                labelDetails?: {
                    detail?: string | undefined;
                    description?: string | undefined;
                } | undefined;
                kind?: vscode.CompletionItemKind | undefined;
                tags?: 1[] | undefined;
                detail?: string | undefined;
                documentation?: string | {
                    kind: vscode.MarkupKind;
                    value: string;
                } | undefined;
                deprecated?: boolean | undefined;
                preselect?: boolean | undefined;
                sortText?: string | undefined;
                filterText?: string | undefined;
                insertText?: string | undefined;
                insertTextFormat?: vscode.InsertTextFormat | undefined;
                insertTextMode?: vscode.InsertTextMode | undefined;
                textEdit?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                } | {
                    newText: string;
                    insert: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    replace: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                } | undefined;
                additionalTextEdits?: {
                    range: {
                        start: {
                            line: number;
                            character: number;
                        };
                        end: {
                            line: number;
                            character: number;
                        };
                    };
                    newText: string;
                }[] | undefined;
                commitCharacters?: string[] | undefined;
                command?: {
                    title: string;
                    command: string;
                    arguments?: any[] | undefined;
                } | undefined;
                data?: any;
            }[];
            props: string[];
            setupReturns: string[];
        };
        getDescriptor: () => {
            template: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            script: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                src: string | undefined;
            } | null;
            scriptSetup: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
            } | null;
            styles: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                module: string | undefined;
                scoped: boolean;
            }[];
            customBlocks: {
                start: number;
                end: number;
                lang: string;
                content: string;
                startTagEnd: number;
                type: string;
            }[];
        };
        getScriptAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getScriptSetupAst: () => import("typescript/lib/tsserverlibrary").SourceFile | undefined;
        getVueHtmlDocument: () => import("vscode-html-languageservice").HTMLDocument;
        getScriptSetupData: () => {
            bindings: import("./parsers/types").TextRange[];
            typeBindings: import("./parsers/types").TextRange[];
            withDefaultsArg: import("./parsers/types").TextRange | undefined;
            propsRuntimeArg: import("./parsers/types").TextRange | undefined;
            propsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsRuntimeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeArg: import("./parsers/types").TextRange | undefined;
            emitsTypeNums: number;
        } | undefined;
        docLsScripts: () => {
            documents: TextDocument[];
            sourceMaps: TsSourceMap[];
        };
        getTemplateFormattingScript: () => {
            document: TextDocument | undefined;
            sourceMap: TsSourceMap | undefined;
        };
        getSfcRefSugarRanges: () => {
            refs: {
                flag: import("./parsers/types").TextRange;
                leftBindings: import("./parsers/types").TextRange[];
                rightFn: import("./parsers/types").TextRange;
            }[];
            raws: {
                fullRange: import("./parsers/types").TextRange;
                argsRange: import("./parsers/types").TextRange;
            }[];
        } | undefined;
        refs: {
            document: import("@vue/reactivity").ComputedRef<TextDocument>;
            descriptor: {
                template: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                script: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    src: string | undefined;
                } | null;
                scriptSetup: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                } | null;
                styles: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    module: string | undefined;
                    scoped: boolean;
                }[];
                customBlocks: {
                    start: number;
                    end: number;
                    lang: string;
                    content: string;
                    startTagEnd: number;
                    type: string;
                }[];
            };
            lastUpdated: {
                template: boolean;
                script: boolean;
                scriptSetup: boolean;
            };
            sfcJsons: {
                textDocuments: import("@vue/reactivity").ComputedRef<{
                    index: number;
                    textDocument: TextDocument;
                    jsonDocument: import("vscode-json-languageservice").JSONDocument;
                }[]>;
                sourceMaps: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").JsonSourceMap[]>;
            };
            sfcTemplate: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                htmlSourceMap: import("@vue/reactivity").ComputedRef<HtmlSourceMap | undefined>;
                pugSourceMap: import("@vue/reactivity").ComputedRef<import("./utils/sourceMaps").PugSourceMap | undefined>;
                htmlDocument: import("@vue/reactivity").ComputedRef<import("vscode-html-languageservice").HTMLDocument | undefined>;
                pugDocument: import("@vue/reactivity").ComputedRef<{
                    pugTextDocument: TextDocument;
                    htmlTextDocument: TextDocument;
                    htmlDocument: import("vscode-html-languageservice").HTMLDocument;
                    pugCode: string;
                    htmlCode: string;
                    sourceMap: import("@volar/source-map").SourceMap<undefined>;
                    error: {
                        code: string;
                        msg: string;
                        line: number;
                        column: number;
                        filename: string;
                    } | undefined;
                } | undefined>;
            };
            sfcTemplateData: import("@vue/reactivity").ComputedRef<{
                sourceLang: "html" | "pug";
                html: string;
                htmlTextDocument: TextDocument;
                htmlToTemplate: (start: number, end: number) => number | undefined;
            } | undefined>;
            sfcTemplateCompileResult: import("@vue/reactivity").ComputedRef<{
                errors: vscode.Diagnostic[];
                ast: import("@vue/compiler-core").RootNode | undefined;
            } | undefined>;
            sfcTemplateScript: {
                templateCodeGens: import("@vue/reactivity").ComputedRef<{
                    codeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    formatCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: import("./utils/sourceMaps").TsMappingData, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: import("./utils/sourceMaps").TsMappingData) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<import("./utils/sourceMaps").TsMappingData>) => void;
                    };
                    cssCodeGen: {
                        getText: () => string;
                        getMappings: (sourceRangeParser?: ((data: undefined, range: import("@volar/source-map").Range) => import("@volar/source-map").Range) | undefined) => import("@volar/source-map").Mapping<undefined>[];
                        addText: (str: string) => {
                            start: number;
                            end: number;
                        };
                        addCode: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined, extraSourceRanges?: import("@volar/source-map").Range[] | undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping: (str: string, sourceRange: import("@volar/source-map").Range, mode: import("@volar/source-map").Mode, data: undefined) => {
                            start: number;
                            end: number;
                        };
                        addMapping2: (mapping: import("@volar/source-map").Mapping<undefined>) => void;
                    };
                    tagNames: Record<string, {
                        rawComponent: string;
                        slotsComponent: string;
                        baseProps: string;
                        emit: string;
                        slots: string;
                        events: Record<string, string>;
                        offsets: number[];
                    }>;
                    attrNames: Set<string>;
                } | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                textDocument: import("@vue/reactivity").Ref<TextDocument | undefined>;
                textDocumentForFormatting: import("@vue/reactivity").Ref<TextDocument | undefined>;
                sourceMapForFormatting: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").Ref<TeleportSourceMap | undefined>;
                cssTextDocument: import("@vue/reactivity").ComputedRef<{
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                    links: never[];
                    module: boolean;
                    scoped: boolean;
                } | undefined>;
                cssSourceMap: import("@vue/reactivity").ComputedRef<CssSourceMap | undefined>;
                update: () => void;
            };
            sfcEntryForTemplateLs: {
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
            };
            sfcScriptForScriptLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap>;
            };
            sfcScriptForTemplateLs: {
                lang: import("@vue/reactivity").ComputedRef<string>;
                textDocument: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                textDocumentTs: import("@vue/reactivity").ComputedRef<TextDocument | undefined>;
                sourceMap: import("@vue/reactivity").ComputedRef<TsSourceMap | undefined>;
                teleportSourceMap: import("@vue/reactivity").ComputedRef<TeleportSourceMap | undefined>;
            };
            templateScriptData: {
                projectVersion: string | undefined;
                context: string[];
                contextItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                components: string[];
                componentItems: {
                    label: string;
                    labelDetails?: {
                        detail?: string | undefined;
                        description?: string | undefined;
                    } | undefined;
                    kind?: vscode.CompletionItemKind | undefined;
                    tags?: 1[] | undefined;
                    detail?: string | undefined;
                    documentation?: string | {
                        kind: vscode.MarkupKind;
                        value: string;
                    } | undefined;
                    deprecated?: boolean | undefined;
                    preselect?: boolean | undefined;
                    sortText?: string | undefined;
                    filterText?: string | undefined;
                    insertText?: string | undefined;
                    insertTextFormat?: vscode.InsertTextFormat | undefined;
                    insertTextMode?: vscode.InsertTextMode | undefined;
                    textEdit?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    } | {
                        newText: string;
                        insert: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        replace: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                    } | undefined;
                    additionalTextEdits?: {
                        range: {
                            start: {
                                line: number;
                                character: number;
                            };
                            end: {
                                line: number;
                                character: number;
                            };
                        };
                        newText: string;
                    }[] | undefined;
                    commitCharacters?: string[] | undefined;
                    command?: {
                        title: string;
                        command: string;
                        arguments?: any[] | undefined;
                    } | undefined;
                    data?: any;
                }[];
                props: string[];
                setupReturns: string[];
            };
            cssLsDocuments: import("@vue/reactivity").ComputedRef<({
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet | undefined;
                binds: import("./parsers/types").TextRange[];
                links: {
                    textDocument: TextDocument;
                    stylesheet: import("vscode-css-languageservice").Stylesheet;
                }[];
                module: string | undefined;
                scoped: boolean;
            } | {
                textDocument: TextDocument;
                stylesheet: import("vscode-css-languageservice").Stylesheet;
                links: never[];
                module: boolean;
                scoped: boolean;
            })[]>;
            cssLsSourceMaps: import("@vue/reactivity").ComputedRef<CssSourceMap[]>;
            scriptLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            scriptLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsDocuments: import("@vue/reactivity").ComputedRef<TextDocument[]>;
            templateLsSourceMaps: import("@vue/reactivity").ComputedRef<TsSourceMap[]>;
            templateLsTeleports: import("@vue/reactivity").ComputedRef<TeleportSourceMap[]>;
        };
    } | undefined;
    getCssSourceMaps: () => Map<string, CssSourceMap>;
    getHtmlSourceMaps: () => Map<string, HtmlSourceMap>;
    toTsLocations: (uri: string, start: vscode.Position, end?: vscode.Position | undefined) => Generator<{
        lsType: "template" | "script";
        type: "embedded-ts";
        sourceMap: TsSourceMap;
        uri: string;
        range: {
            data: import("./utils/sourceMaps").TsMappingData;
            start: vscode.Position;
            end: vscode.Position;
        };
    } | {
        lsType: "template" | "script";
        type: "source-ts";
        uri: string;
        range: {
            start: vscode.Position;
            end: vscode.Position;
        };
        sourceMap?: undefined;
    }, void, unknown>;
    fromTsLocation: (lsType: 'script' | 'template', uri: string, start: vscode.Position, end?: vscode.Position | undefined) => Generator<{
        type: "embedded-ts";
        sourceMap: TsSourceMap;
        uri: string;
        range: {
            data: import("./utils/sourceMaps").TsMappingData;
            start: vscode.Position;
            end: vscode.Position;
        };
    } | {
        type: "source-ts";
        uri: string;
        range: {
            start: vscode.Position;
            end: vscode.Position;
        };
        sourceMap?: undefined;
    }, void, unknown>;
    fromTsLocation2: (lsType: 'script' | 'template', uri: string, start: number, end?: number | undefined) => Generator<{
        type: "embedded-ts";
        sourceMap: TsSourceMap;
        uri: string;
        range: {
            data: import("./utils/sourceMaps").TsMappingData;
            start: number;
            end: number;
        };
    } | {
        type: "source-ts";
        uri: string;
        range: {
            start: number;
            end: number;
        };
        sourceMap?: undefined;
    }, void, unknown>;
};
