import type { ApiLanguageServiceContext } from './types';
import type * as ts from 'typescript/lib/tsserverlibrary';
export declare function register({ modules: { typescript: ts }, sourceFiles, templateTsLsRaw, scriptTsLsRaw, templateTsHost, scriptTsHost, vueHost }: ApiLanguageServiceContext): {
    getRootFileNames: () => string[];
    emit: (targetSourceFile?: ts.SourceFile | undefined, _writeFile?: ts.WriteFileCallback | undefined, cancellationToken?: ts.CancellationToken | undefined, emitOnlyDtsFiles?: boolean | undefined, customTransformers?: ts.CustomTransformers | undefined) => ts.EmitResult;
    getSyntacticDiagnostics: (sourceFile?: ts.SourceFile | undefined, cancellationToken?: ts.CancellationToken | undefined) => readonly ts.DiagnosticWithLocation[];
    getSemanticDiagnostics: (sourceFile?: ts.SourceFile | undefined, cancellationToken?: ts.CancellationToken | undefined) => readonly ts.Diagnostic[];
    getGlobalDiagnostics: (cancellationToken?: ts.CancellationToken | undefined) => readonly ts.Diagnostic[];
};
