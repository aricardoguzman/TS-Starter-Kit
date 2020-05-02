import { PageView } from './page-view';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
export declare class AuctionView extends PageView {
    socket: any;
    shouldOpen: boolean;
    user: any;
    data: any;
    fotos: {
        url: string;
        title: string;
        caption: string;
    }[];
    username: any;
    available: boolean;
    price: number;
    auction: any;
    winner: string;
    constructor();
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    firstUpdated(): void;
    attributeChangedCallback(name: string, old: string | null, value: string | null): void;
    private _timeUp;
    private pushHalf;
    private pushFull;
}
declare global {
    interface HTMLElementTagNameMap {
        'auction-view': AuctionView;
    }
}
//# sourceMappingURL=auction-view.d.ts.map