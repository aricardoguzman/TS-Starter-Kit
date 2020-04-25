import { PageView } from './page-view';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
export declare class AuctionView extends PageView {
    data: {
        url: string;
        description: string;
        name: string;
        auction_id: string;
        base_price: number;
        owner: null;
        init: number;
        exp: number;
    };
    fotos: {
        url: string;
        title: string;
        caption: string;
    }[];
    username: any;
    available: boolean;
    price: number;
    winner: string;
    constructor();
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    private _timeUp;
    private _leftTime;
}
declare global {
    interface HTMLElementTagNameMap {
        'auction-view': AuctionView;
    }
}
//# sourceMappingURL=auction-view.d.ts.map