import { LitElement, html, customElement, property, css } from 'lit-element';
export { html, css, customElement, property };
export declare class BaseLit extends LitElement {
    $: any;
    constructor();
    _(name: string): HTMLElement | null;
    $$(name: string): HTMLElement | null;
    $$$(name: string): NodeListOf<Element> | null;
    mapIDs(): void;
    fire(name: string, value?: any, bubbles?: boolean): void;
    isObject(val: any): boolean;
    isFunction(functionToCheck: any): boolean;
    isObjectEmpty(val: any): boolean;
    scrollTo(): void;
    /**
     *
     * @param scrollTargetY pixels to scroll. Ej:
        const ticketsBlockPositionY = this.$.contact.getBoundingClientRect().top + Element.scrollTop;
     * @param time Time to scroll
     * @param easing
     * @param target scrollTarget Element
     */
    protected scrollToY(scrollTargetY: number | undefined, time: number | undefined, easing: string | undefined, target: HTMLElement | Window): void;
    /**
     *
     * @param {*} element : The HTMLElement to add,remove or toggle the classes to
     * @param {*} classesList : Either a String or an Array
     * @param {*} option : The option to select the operation 0 to toggle, 1 to add, 2 to remove
     */
    toggleAddRemoveClasses(element: HTMLElement, classesList: string | [string], option?: number): boolean;
}
//# sourceMappingURL=base-element.d.ts.map