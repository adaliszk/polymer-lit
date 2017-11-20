
import {PropertyAccessors} from '../@polymer/polymer/lib/mixins/property-accessors.js';
import {PropertyEffects} from '../@polymer/polymer/lib/mixins/property-effects.js';
import {render} from '../lit-html/lit-html.js';

export const Lit = Base => {
    return class extends PropertyEffects(PropertyAccessors(Base)) {
        // Initialize base class
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this._templateResult = null;
            this._invalidateProperties();
        }
        // When properties changes it needs to re-render
        _propertiesChanged(...args) {
            super._propertiesChanged(...args);

            // Generate TemplateResult
            this._templateResult = this.render();

            if (this._templateResult)
                render(this._templateResult, this.shadowRoot || this);
        }
        static get template() {
            return '';
        }
        render() {
            throw new Error("Render function not Implemented!");
        }
    };
};
