import { BaseLit } from '../../base-element';
export declare class AppDrawer extends BaseLit {
    static styles: import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    /**
      * The opened state of the drawer.
      */
    opened: boolean;
    swipeOpen: boolean;
    /**
     * The drawer does not have a scrim and cannot be swiped close.
     */
    persistent: boolean;
    /**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */
    position: string;
    /**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */
    noFocusTrap: boolean;
    /**
     * Disables swiping on the drawer.
     */
    disableSwipe: boolean;
    props: {
        [k: string]: any;
    };
    connectedCallback(): void;
    private _tabKeydownHandler;
    private _escKeydownHandler;
    disconnectedCallback(): void;
    /**
     * Opens the drawer.
     */
    open(): void;
    /**
     * Closes the drawer.
     */
    close(): void;
    toggleClassMenu(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-drawer': AppDrawer;
    }
}
//# sourceMappingURL=app-drawer.d.ts.map