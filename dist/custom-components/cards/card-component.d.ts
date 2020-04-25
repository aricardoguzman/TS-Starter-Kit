import { BaseLit } from '../../base-element';
export declare class CardComponent extends BaseLit {
    shadowBox: boolean;
    width: number;
    height: number;
    static styles: import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    props: any;
    forwards: Boolean;
    connectedCallback(): void;
    protected _transitionHandler(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'card-component': CardComponent;
    }
}
//# sourceMappingURL=card-component.d.ts.map