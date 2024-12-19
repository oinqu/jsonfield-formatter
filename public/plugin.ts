import { CoreSetup, CoreStart, Plugin } from '@kbn/core/public';
import { FieldFormatsSetup, FieldFormatsStart } from '@kbn/field-formats-plugin/public';
import { JsonFormat } from '../common/json_format';

interface SetupDeps {
    fieldFormats: FieldFormatsSetup;
}

interface StartDeps {
    fieldFormats: FieldFormatsStart;
}

export class JsonfieldFormatterPlugin implements Plugin<void, void, SetupDeps, StartDeps> {
    public setup(core: CoreSetup, deps: SetupDeps) {
        deps.fieldFormats.register([JsonFormat]);
    }

    public start(core: CoreStart, deps: StartDeps) {}

    public stop() {}
}