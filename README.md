[![npm version](https://badge.fury.io/js/polymer-lit.svg)](https://badge.fury.io/js/polymer-lit)
[![GitHub license](https://img.shields.io/github/license/adaliszk/polymer-lit.svg?style=flat-square)](https://github.com/adaliszk/polymer-lit/blob/master/LICENSE.md)

# Polymer 3.x Lit-HTML mixin
Quick mixin for Polymer 3.x which gives your a Mixin for Lit-HTML

## Installation


```bash
yarn add polymer-lit
```

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
