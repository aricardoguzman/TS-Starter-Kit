import { BaseLit } from '../../base-element';
export declare class CarouselComponent extends BaseLit {
    transitionHandler: any;
    items: Array<any>;
    index: number;
    photos: any;
    width: number;
    static get styles(): import("lit-element").CSSResult[];
    protected render(): import("lit-html").TemplateResult;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private _transitionHandler;
    private _clickHandler;
}
declare global {
    interface HTMLElementTagNameMap {
        'carousel-component': CarouselComponent;
    }
}
//# sourceMappingURL=carousel-component.d.ts.map