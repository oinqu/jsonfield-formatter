import { PluginInitializerContext } from '@kbn/core/public';
import { JsonfieldFormatterPlugin } from './plugin';

export function plugin(initializerContext: PluginInitializerContext) {
    return new JsonfieldFormatterPlugin();
}