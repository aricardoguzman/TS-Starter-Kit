import { BaseLit } from './base-element';
export declare class SnackBar extends BaseLit {
    active: boolean;
    static get styles(): import("lit-element").CSSResult;
    protected render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'snack-bar': SnackBar;
    }
}
//# sourceMappingURL=snack-bar.d.ts.map