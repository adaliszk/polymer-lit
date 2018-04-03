/// <reference path="polymer.d.ts" />

interface PolymerLitElement extends Element {
    new(Base: Polymer.Element | HTMLElement): PolymerLitElement;
}

export const Lit: PolymerLitElement;