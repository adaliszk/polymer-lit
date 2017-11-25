import {Lit} from './polymer-lit.js';
import {dedupingMixin} from '../@polymer/polymer/lib/utils/mixin.js';
import {renderExtended, TemplateResult} from '../lit-html/lib/lit-extended.js';

export const LitExtended = dedupingMixin((Base: Lit) => {
    return class PolymerLitRenderedElement extends Lit(Base) {
        /**
         * Render the template to the shadowRoot
         * @param {TemplateResult} templateResult
         * @private
         */
        private _render(templateResult: TemplateResult) {
            renderExtended(templateResult, this.shadowRoot);
        }
    };
});