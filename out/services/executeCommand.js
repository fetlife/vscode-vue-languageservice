"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const commands_1 = require("../commands");
const convertTagNameCase = require("../commands/convertTagNameCase");
const htmlToPug_1 = require("../commands/htmlToPug");
const pugToHtml_1 = require("../commands/pugToHtml");
const showReferences_1 = require("../commands/showReferences");
const useSetupSugar = require("../commands/useSetupSugar");
const unuseSetupSugar = require("../commands/unuseSetupSugar");
const useRefSugar = require("../commands/useRefSugar");
const unuseRefSugar = require("../commands/unuseRefSugar");
function register(context) {
    const { sourceFiles } = context;
    const doUseSetupSugar = useSetupSugar.register(context);
    const doUnuseSetupSugar = unuseSetupSugar.register(context);
    const doUseRefSugar = useRefSugar.register(context);
    const doUnuseRefSugar = unuseRefSugar.register(context);
    const doConvertTagNameCase = convertTagNameCase.register(context);
    return async (uri, command, args, connection) => {
        if (command === commands_1.Commands.SHOW_REFERENCES && args) {
            await (0, showReferences_1.execute)(args[0], args[1], args[2], connection);
        }
        if (command === commands_1.Commands.USE_SETUP_SUGAR) {
            await doUseSetupSugar(connection, uri);
        }
        if (command === commands_1.Commands.UNUSE_SETUP_SUGAR) {
            await doUnuseSetupSugar(connection, uri);
        }
        if (command === commands_1.Commands.USE_REF_SUGAR) {
            await doUseRefSugar(connection, uri);
        }
        if (command === commands_1.Commands.UNUSE_REF_SUGAR) {
            await doUnuseRefSugar(connection, uri);
        }
        if (command === commands_1.Commands.HTML_TO_PUG) {
            const sourceFile = sourceFiles.get(uri);
            const document = sourceFile === null || sourceFile === void 0 ? void 0 : sourceFile.getTextDocument();
            if (sourceFile && document)
                await (0, htmlToPug_1.execute)(document, sourceFile, connection);
        }
        if (command === commands_1.Commands.PUG_TO_HTML) {
            const sourceFile = sourceFiles.get(uri);
            const document = sourceFile === null || sourceFile === void 0 ? void 0 : sourceFile.getTextDocument();
            if (sourceFile && document)
                await (0, pugToHtml_1.execute)(document, sourceFile, connection);
        }
        if (command === commands_1.Commands.CONVERT_TO_KEBAB_CASE) {
            await doConvertTagNameCase(connection, context, uri, 'kebab');
        }
        if (command === commands_1.Commands.CONVERT_TO_PASCAL_CASE) {
            await doConvertTagNameCase(connection, context, uri, 'pascal');
        }
    };
}
exports.register = register;
//# sourceMappingURL=executeCommand.js.map