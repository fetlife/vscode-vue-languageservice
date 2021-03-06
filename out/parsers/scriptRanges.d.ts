import type * as ts from 'typescript/lib/tsserverlibrary';
import type { TextRange } from './types';
export declare type ScriptRanges = ReturnType<typeof parseScriptRanges>;
export declare function parseScriptRanges(ts: typeof import('typescript/lib/tsserverlibrary'), ast: ts.SourceFile, hasScriptSetup: boolean, withComponentOption: boolean, withNode: boolean): {
    exportDefault: (TextRange & {
        expression: TextRange;
        args: TextRange;
        argsNode: ts.ObjectLiteralExpression | undefined;
        componentsOption: TextRange | undefined;
        componentsOptionNode: ts.ObjectLiteralExpression | undefined;
    }) | undefined;
    bindings: TextRange[];
};
