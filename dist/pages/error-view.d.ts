import { PageView } from './page-view';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';
export declare class ErrorView extends PageView {
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLTagNameMap {
        'error-view': ErrorView;
    }
}
//# sourceMappingURL=error-view.d.ts.map