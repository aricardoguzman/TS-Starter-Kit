import { BaseLit } from '../../base-element';
interface Item {
    url: string;
    title: string;
    caption: string;
}
export declare class CarouselComponent extends BaseLit {
    transitionHandler: any;
    items: Array<Item>;
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
export {};
//# sourceMappingURL=carousel-component.d.ts.map