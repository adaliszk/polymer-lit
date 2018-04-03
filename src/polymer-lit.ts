/**
 * Copyright (c) 2017 Ádám Liszkai <adaliszk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

/// <reference path="../types/polymer.d.ts"/>
/// <reference path="../types/polymer-lit.d.ts" />

import {PropertyEffects} from '@polymer/polymer/lib/mixins/property-effects.js';
import {PropertyAccessors} from '@polymer/polymer/lib/mixins/property-accessors.js';
import {ElementMixin} from '@polymer/polymer/lib/mixins/element-mixin.js';
import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
import {TemplateResult, render} from 'lit-html/lit-html.js';

// noinspection JSUnusedGlobalSymbols
export const Lit = dedupingMixin((Base: Polymer.Element | HTMLElement) => {
    const PolymerElement = <Polymer.Element>PropertyEffects(PropertyAccessors(ElementMixin(Base)));
    return class PolymerLitRenderedElement extends PolymerElement {

        // noinspection JSUnusedGlobalSymbols
        constructor() {
            super();
            // Initialize ShadowRoot by Polymer
            this.root = this._attachDom(this.root);
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
            const templateResult: TemplateResult = this.render();
            // If succeeded then render it to the shadowRoot
            if (templateResult) this._render(templateResult);
        }

        /**
         * Render the template to the shadowRoot
         * @param {TemplateResult} templateResult
         * @private
         */
        private _render(templateResult: TemplateResult) {
            render(templateResult, this.shadowRoot || this);
        }

        // noinspection JSUnusedGlobalSymbols
        /**
         * Just override the base template, we will render it with lit
         * @static
         */
        public static get template(): string {
            return '';
        }

        // noinspection JSMethodCanBeStatic
        /**
         * Base render function what you have to implement in your class
         * @protected
         */
        protected render(): TemplateResult {
            throw new Error('Render function not Implemented!');
        }
    };
});