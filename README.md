# Polymer LitHTML mixin
Quick mixin for Polymer 3.x which gives your a Mixin for Lit-HTML

## Sample Usage

```javascript

import {Element as PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';
import {Lit} from '/node_modules/polymer-lit/polymer-lit.js';
import {html} from '/node_modules/lit-html/lit-html.js';

class MyElement extends Lit(PolymerElement)
{
    static get properties() { return {
        // ...
    }};

    render() {
        return html`
            <style>:host { display: block; }</style>
            <slot></slot>
	`;
    }
}

customElements.define('my-element', MyElement);

```
