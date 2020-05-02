import { BaseLit } from '../base-element';
export declare class PageView extends BaseLit {
    static get styles(): import("lit-element").CSSResult[];
    credentials: any;
    active: boolean;
    esburl: string;
    tokenurl: string;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-view': PageView;
    }
}
//# sourceMappingURL=page-view.d.ts.map