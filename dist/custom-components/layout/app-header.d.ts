import { BaseLit } from '../../base-element';
export declare class AppHeader extends BaseLit {
    scrollElement: HTMLElement | undefined;
    last_known_scroll_position: number;
    ticking: Boolean;
    static styles: import("lit-element").CSSResult[];
    title: string;
    top: boolean;
    show: boolean;
    render(): import("lit-html").TemplateResult;
    setScrollElement(scroll: HTMLElement | null): void;
    private scrollAction;
    private showHeader;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-header': AppHeader;
    }
}
//# sourceMappingURL=app-header.d.ts.map