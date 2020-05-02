import { PageView } from './page-view';
import '../custom-components/cards/card-component';
import '../custom-components/input/custom-input';
import '../container/ripple-container';
export declare class LoginView extends PageView {
    title: string;
    suscribe: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private _authenticate;
    private _constructURL;
    private _changeTitle;
}
declare global {
    interface HTMLElementTagNameMap {
        'login-view': LoginView;
    }
}
//# sourceMappingURL=login-view.d.ts.map