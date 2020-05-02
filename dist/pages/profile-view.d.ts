import { PageView } from './page-view';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
export declare class ProfileView extends PageView {
    user: any;
    payment: any;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private requestPayment;
    private makePayment;
    private changeNamePassword;
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-view': ProfileView;
    }
}
//# sourceMappingURL=profile-view.d.ts.map