import type { TextDocument } from 'vscode-languageserver-textdocument';
import type * as ts2 from 'vscode-typescript-languageservice';
export declare function getDummyTsLs(ts: typeof import('typescript/lib/tsserverlibrary'), ts2: typeof import('vscode-typescript-languageservice'), _doc: TextDocument, getPreferences: ts2.LanguageServiceHost['getPreferences'], getFormatOptions: ts2.LanguageServiceHost['getFormatOptions']): {
    findDefinition: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").LocationLink[];
    findTypeDefinition: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").LocationLink[];
    findReferences: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").Location[];
    prepareRename: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").Range | import("vscode-jsonrpc").ResponseError<void> | undefined;
    doRename: (uri: string, position: import("vscode-languageserver-protocol").Position, newName: string) => Promise<import("vscode-languageserver-protocol").WorkspaceEdit | undefined>;
    getEditsForFileRename: (oldUri: string, newUri: string) => Promise<import("vscode-languageserver-protocol").WorkspaceEdit | undefined>;
    getCodeActions: (uri: string, range: import("vscode-languageserver-protocol").Range, context: import("vscode-languageserver-protocol").CodeActionContext) => Promise<import("vscode-languageserver-protocol").CodeAction[] | undefined>;
    doCodeActionResolve: (codeAction: import("vscode-languageserver-protocol").CodeAction) => Promise<import("vscode-languageserver-protocol").CodeAction>;
    findDocumentHighlights: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").DocumentHighlight[];
    findDocumentSymbols: (uri: string) => import("vscode-languageserver-protocol").SymbolInformation[];
    findWorkspaceSymbols: (query: string) => import("vscode-languageserver-protocol").SymbolInformation[];
    doComplete: (uri: string, position: import("vscode-languageserver-protocol").Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => Promise<import("vscode-languageserver-protocol").CompletionList | undefined>;
    doCompletionResolve: (item: import("vscode-languageserver-protocol").CompletionItem, newPosition?: import("vscode-languageserver-protocol").Position | undefined) => Promise<import("vscode-languageserver-protocol").CompletionItem>;
    doHover: (uri: string, position: import("vscode-languageserver-protocol").Position, documentOnly?: boolean | undefined) => import("vscode-languageserver-protocol").Hover | undefined;
    doFormatting: (uri: string, options: import("vscode-languageserver-protocol").FormattingOptions, range?: import("vscode-languageserver-protocol").Range | undefined) => Promise<import("vscode-languageserver-protocol").TextEdit[]>;
    getSignatureHelp: (uri: string, position: import("vscode-languageserver-protocol").Position, context?: import("vscode-languageserver-protocol").SignatureHelpContext | undefined) => import("vscode-languageserver-protocol").SignatureHelp | undefined;
    getSelectionRanges: (uri: string, positions: import("vscode-languageserver-protocol").Position[]) => import("vscode-languageserver-protocol").SelectionRange[];
    doValidation: (uri: string, options: {
        semantic?: boolean | undefined;
        syntactic?: boolean | undefined;
        suggestion?: boolean | undefined;
        declaration?: boolean | undefined;
    }, cancellationToken?: import("typescript/lib/tsserverlibrary").CancellationToken | undefined) => import("vscode-languageserver-protocol").Diagnostic[];
    getFoldingRanges: (uri: string) => import("vscode-languageserver-protocol").FoldingRange[];
    getDocumentSemanticTokens: (uri: string, range?: import("vscode-languageserver-protocol").Range | undefined, cancle?: import("vscode-jsonrpc").CancellationToken | undefined) => [number, number, number, number, number][] | undefined;
    callHierarchy: {
        doPrepare: (uri: string, position: import("vscode-languageserver-protocol").Position) => import("vscode-languageserver-protocol").CallHierarchyItem[];
        getIncomingCalls: (item: import("vscode-languageserver-protocol").CallHierarchyItem) => import("vscode-languageserver-protocol").CallHierarchyIncomingCall[];
        getOutgoingCalls: (item: import("vscode-languageserver-protocol").CallHierarchyItem) => import("vscode-languageserver-protocol").CallHierarchyOutgoingCall[];
    };
    dispose: () => void;
    __internal__: {
        host: ts2.LanguageServiceHost;
        raw: import("typescript/lib/tsserverlibrary").LanguageService;
        getTextDocument: (uri: string) => TextDocument | undefined;
        getValidTextDocument: (uri: string) => TextDocument | undefined;
        doCompleteSync: (uri: string, position: import("vscode-languageserver-protocol").Position, options?: import("typescript/lib/tsserverlibrary").GetCompletionsAtPositionOptions | undefined) => import("vscode-languageserver-protocol").CompletionList | undefined;
    };
};
