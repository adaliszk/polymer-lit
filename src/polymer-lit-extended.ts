import {Polymer} from '../polymer.d.ts';

import {PropertyEffects} from '../@polymer/polymer/lib/mixins/property-effects.js';
import {PropertyAccessors} from '../@polymer/polymer/lib/mixins/property-accessors.js';
import {ElementMixin} from '../@polymer/polymer/lib/mixins/element-mixin.js';
import {dedupingMixin} from '../@polymer/polymer/lib/utils/mixin.js';

import {TemplateResult} from '../lit-html/lit-html.js';
import {render} from '../lit-html/lib/lit-extended.js';

export const LitExtended = dedupingMixin((Base: Polymer.Element | HTMLElement) => {
    const PolymerElement = PropertyEffects(PropertyAccessors(ElementMixin(Base)));
    return class PolymerLitRenderedElement extends PolymerElement {

        /** @type {TemplateResult} Stored result from the render function */
        private _templateResult: TemplateResult;

        constructor() {
            super();

            // Create the shadow Root
            this.attachShadow({mode: "open"});

            // Reset the properties state
            this._invalidateProperties();
        }

        /**
         * Listen to changes and re-render each time when it's happen
         *
         * @private
         *
         * @param {string} propertyName
         * @param newValue
         * @param preValue
         */
        _propertiesChanged(propertyName: string, newValue: any, preValue: any) {
            super._propertiesChanged(propertyName, newValue, preValue);

            // Render the lit-html template
            this._templateResult = this.render();

            // If succeeded then render it to the shadowRoot
            if (this._templateResult)
                render(this._templateResult, this.shadowRoot!);
        }

        /**
         * Just override the base template, we will render it with lit
         * @static
         */
        public static get template(): string {
            return '';
        }

        /**
         * Base render function what you have to implement in your class
         * @protected
         */
        protected render(): TemplateResult {
            throw new Error('Render function not Implemented!');
        }
    };
});