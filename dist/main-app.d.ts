import { BaseLit } from './base-element';
import './custom-components/layout/app-drawer';
import './custom-components/layout/app-header';
export declare class MainApp extends BaseLit {
    static styles: import("lit-element").CSSResult[];
    vehicle: {};
    last_page: string;
    user: any;
    appTitle: string;
    auction_id: string;
    _page: string;
    _drawerOpened: boolean;
    _authenticated: boolean;
    render(): import("lit-html").TemplateResult;
    private _authChanged;
    private _drawerOpenedChanged;
    firstUpdated(): void;
    _locationChanged(location: Location): void;
    _updateDrawerState(opened: boolean): void;
    _loadPage(page: string): void;
    _checkAuthentication(_token: string, _page: string): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-app': MainApp;
    }
}
//# sourceMappingURL=main-app.d.ts.map