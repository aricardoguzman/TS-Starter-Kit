import { BaseLit } from './base-element';
import './custom-components/layout/app-drawer';
import './custom-components/layout/app-header';
import './snack-bar';
export declare class MainApp extends BaseLit {
    static styles: import("lit-element").CSSResult[];
    showsnackbar: boolean;
    snackbarMessage: string;
    credentials: {
        grant_type: string;
        client_id: string;
        client_secret: string;
        audience: string;
    };
    vehicle: {};
    vehicle_photos: Array<any>;
    esb_url: string;
    token_url: string;
    last_page: string;
    user: any;
    appTitle: string;
    auction_id: string;
    _page: string;
    _drawerOpened: boolean;
    _authenticated: boolean;
    render(): import("lit-html").TemplateResult;
    private _setVehicle;
    private _authChanged;
    private _drawerOpenedChanged;
    firstUpdated(): void;
    _locationChanged(location: Location): void;
    _updateDrawerState(opened: boolean): void;
    _loadPage(page: string): void;
    _checkAuthentication(_token: string, _page: string): boolean;
    _redirectHome(_page: string): boolean;
    _logout(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-app': MainApp;
    }
}
//# sourceMappingURL=main-app.d.ts.map