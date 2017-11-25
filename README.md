[![](https://img.shields.io/npm/v/polymer-lit.svg?style=flat-square)](https://www.npmjs.com/package/polymer-lit)
[![](https://img.shields.io/npm/dt/polymer-lit.svg?style=flat-square)](https://www.npmjs.com/package/polymer-lit)
[![](https://img.shields.io/codeclimate/maintainability/adaliszk/polymer-lit.svg?style=flat-square)](https://codeclimate.com/github/adaliszk/polymer-lit/maintainability)
[![](https://img.shields.io/gemnasium/adaliszk/polymer-lit.svg?style=flat-square)](https://github.com/adaliszk/polymer-lit)
[![](https://img.shields.io/github/issues/adaliszk/polymer-lit.svg?style=flat-square)](https://github.com/adaliszk/polymer-lit/issues)
[![](https://img.shields.io/github/stars/adaliszk/polymer-lit.svg?style=flat-square)](https://github.com/adaliszk/polymer-lit/stargazers)
[![](https://img.shields.io/github/license/adaliszk/polymer-lit.svg?style=flat-square)](https://github.com/adaliszk/polymer-lit/blob/master/LICENSE.md)

# Polymer Lit-HTML Mixin
Mixin for Polymer which gives you ability to render your element with [lit-html](https://github.com/PolymerLabs/lit-html),
it's based on the original [polymer-lit](https://github.com/PolymerLabs/polymer-lit) repository, but it's goal to
work with polymer and not decorate a HTMLElement.

## Installation

```bash
yarn add polymer-lit
```

## Usage for Polymer 3.x

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

for the extended version use the `polymer-lit-extended.js`:

```javascript
import {Element as PolymerElement} from '/node_modules/@polymer/polymer/polymer-element.js';
import {Lit} from '/node_modules/polymer-lit/polymer-lit-extended.js';
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