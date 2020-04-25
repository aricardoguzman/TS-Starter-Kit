import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import { carousel_data as Carousel } from '../data/tmp-data'
//import { fetchQuery, serviceCredentials } from '../requests/request';
import { subscribeToTimer } from '../requests/socket'


@customElement('auction-view')
export class AuctionView extends PageView {

  @property({ type: Object })
  data = {
    "url": "../../imgs/m2.jpeg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "name": "vehicle 2",
    "auction_id": "849489456128",
    "base_price": 5000,
    "owner": null,
    "init": Date.now() + 5 * 60000,
    "exp": 60000 * 1
  }

  @property({ type: Array })
  fotos = Carousel

  @property({ type: Object })
  username: any = {}

  @property({ type: Boolean })
  available = false

  @property({ type: Number })
  price = 0;

  @property({ type: String })
  winner = ""

  constructor() {
    super();

    //TODO: fetch data
    //fetchQuery(serviceCredentials[0].url,'GET');
    //from data we set price
    subscribeToTimer((err: any, timestamp: any) => {
      if (err)
        console.log(err);

      console.log(err, timestamp);
      this.requestUpdate();
    });
  }


  static get styles() {
    return [
      ...super.styles,
      TypographyStyle,
      ButtonStyles,
      css`
        :host {
          padding: 25px;
          box-sizing: border-box;
        }

        .form{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          width: 95%;
          margin: auto;
          background: var(--divider-color);
          grid-gap: 1px;
          margin-top:10px;
        }

        .form > * {
          background: white;
        }

        .full-line {
          grid-column: 1 / 3;
        }

        h1 {
          width: min-content;
          text-align: center;
        }

        label{
          text-align: center;
          width: 100%;
          display: block;
          font-size: 36px;
          font-weight: lighter;
          color: var(--default-primary-color)
        }

        custom-counter{
          font-size: 36px;
          margin: auto;
        }

        ripple-container{
          display: inline-block;
          height: 60px;
        }

        .buttons{
          margin: auto;
          width: 25%;
        }

        button {
          height: 50px;
        }
      `
    ];
  }

  render() {
    return html`
      <carousel-component .items=${this.fotos}></carousel-component>
      <div class="form">
        <div>
          <h1 class="headline-1">Subasta</h1>
          <label class="first-price">${this.data['auction_id']}</label>
        </div>
        <div>
          <h1 class="headline-1" style="position:sticky;">Restante</h1>
          ${this.available ? html`<custom-counter @time-is-up=${this._timeUp} .max="${this._leftTime}"></custom-counter>` : html`<label class="first-price">Not Available</label>`}
        </div>
        <div>
          <h1 class="headline-1">Costo partida</h1>
          <label class="first-price">${this.data['base_price']}</label>
        </div>
        <div>
          <h1 class="headline-1">Última puja</h1>
          <label class="last-price">${this.price}</label>
        </div>
        <div class="full-line">
          <h1 class="headline-1">Pujar</h1>
          <div class="buttons">
            <ripple-container> <button class="button linked-btn"> Media </button> </ripple-container>
            <ripple-container> <button class="button linked-btn"> Full </button></ripple-container>
          </div>
        </div>
      </div>
    `;
  }

  public attributeChangedCallback(name: string, old: string | null, value: string | null): void {

    if (name === 'active') {
      if (value === '') {
        //revisar
        if (this.data.init >= Date.now()) {
          this.available = true;
        } else {

        }

      }
    }
    super.attributeChangedCallback(name, old, value)
  }

  private _timeUp() {
    this.available = false;
  }

  private _leftTime(): number {
    return 500;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'auction-view': AuctionView;
  }
}

