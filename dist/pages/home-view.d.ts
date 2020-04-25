import { PageView } from './page-view';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import '../custom-components/clock/custom-counter';
export declare class HomeView extends PageView {
    data: {
        url: string;
        description: string;
        name: string;
        auction_id: string;
    }[];
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private _saveVehicle;
}
//# sourceMappingURL=home-view.d.ts.map