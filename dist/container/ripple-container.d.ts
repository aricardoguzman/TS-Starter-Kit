import { BaseLit } from '../base-element';
export declare class RippleEffect extends BaseLit {
    posX: number;
    posY: number;
    constructor();
    firstUpdated(): void;
    disconnectedCallback(): void;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private _clickHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'ripple-container': RippleEffect;
    }
}
//# sourceMappingURL=ripple-container.d.ts.map