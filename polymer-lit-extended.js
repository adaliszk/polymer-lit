import { Lit } from './polymer-lit.js';
import { dedupingMixin } from '../@polymer/polymer/lib/utils/mixin.js';
import { renderExtended } from '../lit-html/lib/lit-extended.js';
export const LitExtended = dedupingMixin((Base) => {
    return class PolymerLitRenderedElement extends Lit(Base) {
        /**
         * Render the template to the shadowRoot
         * @param {TemplateResult} templateResult
         * @private
         */
        _render(templateResult) {
            renderExtended(templateResult, this.shadowRoot);
        }
    };
});
//# sourceMappingURL=polymer-lit-extended.js.map