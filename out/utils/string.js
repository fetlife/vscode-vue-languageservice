"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceToComment = exports.SearchTexts = void 0;
exports.SearchTexts = {
    Context: '/* __VLS_.SearchTexts.Context */',
    Components: '/* __VLS_.SearchTexts.Components */',
    Props: '/* __VLS_.SearchTexts.Props */',
    SetupReturns: '/* __VLS_.SearchTexts.SetupReturns */',
    GlobalAttrs: '/* __VLS_.SearchTexts.GlobalAttrs */',
    PropsCompletion: (tag) => `/* __VLS_.SearchTexts.Completion.Props.${tag} */`,
    EmitCompletion: (tag) => `/* __VLS_.SearchTexts.Completion.Emit.${tag} */`,
};
function replaceToComment(str, start, end) {
    if (Math.abs(end - start) >= 4) {
        return str.substring(0, start) + '/*' + ' '.repeat(Math.abs(end - start) - 4) + '*/' + str.substring(end);
    }
    return str.substring(0, start) + ' '.repeat(Math.abs(end - start)) + str.substring(end);
}
exports.replaceToComment = replaceToComment;
//# sourceMappingURL=string.js.map