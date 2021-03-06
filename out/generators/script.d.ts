import type * as templateGen from '../generators/template_scriptSetup';
import type { ScriptRanges } from '../parsers/scriptRanges';
import type { ScriptSetupRanges } from '../parsers/scriptSetupRanges';
import * as SourceMaps from '../utils/sourceMaps';
export declare function generate(lsType: 'template' | 'script', uri: string, script: null | {
    src?: string;
    content: string;
}, scriptSetup: null | {
    content: string;
}, scriptRanges: ScriptRanges | undefined, scriptSetupRanges: ScriptSetupRanges | undefined, getHtmlGen: () => ReturnType<typeof templateGen['generate']> | undefined, getSfcStyles: () => ReturnType<(typeof import('../use/useSfcStyles'))['useSfcStyles']>['textDocuments']['value'], isVue2: boolean): {
    teleports: SourceMaps.Mapping<SourceMaps.TeleportMappingData>[];
    getText: () => string;
    getMappings: (sourceRangeParser?: ((data: SourceMaps.TsMappingData, range: SourceMaps.Range) => SourceMaps.Range) | undefined) => SourceMaps.Mapping<SourceMaps.TsMappingData>[];
    addText: (str: string) => {
        start: number;
        end: number;
    };
    addCode: (str: string, sourceRange: SourceMaps.Range, mode: SourceMaps.Mode, data: SourceMaps.TsMappingData, extraSourceRanges?: SourceMaps.Range[] | undefined) => {
        start: number;
        end: number;
    };
    addMapping: (str: string, sourceRange: SourceMaps.Range, mode: SourceMaps.Mode, data: SourceMaps.TsMappingData) => {
        start: number;
        end: number;
    };
    addMapping2: (mapping: SourceMaps.Mapping<SourceMaps.TsMappingData>) => void;
};
