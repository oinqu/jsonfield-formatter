import { KBN_FIELD_TYPES } from '@kbn/field-types';
import { FieldFormat, FieldFormatParams, type HtmlContextTypeConvert } from '@kbn/field-formats-plugin/common';

export class JsonFormat extends FieldFormat {
    static id = 'json';
    static title = 'JSON';
    static fieldType = KBN_FIELD_TYPES.STRING;

    getParamDefaults(): FieldFormatParams {
        return {}
    }

    htmlConvert: HtmlContextTypeConvert = (val) => {
        const { isJson, value } = getFormattedJson(String(val))
        if(!isJson) {
            return value
        }
        return `<pre>${value}</pre>`
    }
}

function getFormattedJson(value: string) {
    try {
        return { isJson: true, value: JSON.stringify(JSON.parse(value), null, 2) };
    } catch {
        return { isJson: false, value };
    }
}
