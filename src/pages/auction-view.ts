import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import { carousel_data as Carousel } from '../data/tmp-data'
//import { fetchQuery, serviceCredentials } from '../requests/request';
import { Socket } from '../requests/socket'
import { fetchQuery } from '../requests/request';


@customElement('auction-view')
export class AuctionView extends PageView {

  socket: any;

  @property({ type: Boolean })
  shouldOpen = false;

  @property({ type: Object })
  user: any = {}

  @property({ type: Object })
  data: any = {}

  @property({ type: Array })
  fotos = Carousel

  @property({ type: Object })
  username: any = {}

  @property({ type: Boolean })
  available = false

  @property({ type: Number })
  price = 0;

  @property({ type: Object })
  auction: any

  @property({ type: String })
  winner = ""

  constructor() {
    super();

    //TODO: fetch data
    //fetchQuery(serviceCredentials[0].url,'GET');
    //from data we set price
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

        .linked-btn{
          padding: 16px;
        }
      `
    ];
  }

  render() {
    return html`
      <carousel-component .items=${this.data.fotos}></carousel-component>
      <div class="form">
        <div>
          <h1 class="headline-1">Subasta</h1>
          <label class="first-price">${(this.auction && this.auction['_id']) || '-'}</label>
        </div>
        <div>
          <h1 class="headline-1" style="position:sticky;">Restante</h1>
          ${this.available ? html`<custom-counter @time-is-up=${this._timeUp} .max=${this.auction && parseInt((this.auction['fin'] - Date.now()) / 1000)}></custom-counter>` : html`<label class="first-price">Not Available</label>`}
        </div>
        <div>
          <h1 class="headline-1">Costo partida</h1>
          <label class="first-price">${this.data['precio_base']}</label>
        </div>
        <div>
          <h1 class="headline-1">Última puja</h1>
          <label class="last-price">${this.price}</label>
        </div>
        <div class="full-line">
          <h1 class="headline-1">Pujar</h1>
          <div class="buttons">
            <ripple-container @click="${this.pushHalf}"> <button class="button linked-btn"> Media </button> </ripple-container>
            <ripple-container @click="${this.pushFull}"> <button class="button linked-btn"> Full </button></ripple-container>
          </div>
        </div>
      </div>
    `;
  }

  public firstUpdated() {
    let self = this;
    window.addEventListener('room-data', (e: any) => {
      self.auction = e.detail;
      self.price = e.detail.current;
      self.requestUpdate();
    });

    window.addEventListener('price-changed', (e: any) => {
      self.price = e.detail;
      self.requestUpdate();
    });
  }

  public attributeChangedCallback(name: string, old: string | null, value: string | null): void {

    if (name === 'active') {
      if (value === '' && old !== null) {
        //alert('abriendo el socket firstupdated')
        this.available = true;
        this.socket = new Socket();
        this.socket.joinRoom(this.data.id, this.data.precio_base, this.data.minimo_requerido);
        this.shouldOpen = true;
      } else if (this.shouldOpen && old === null) {
        //alert('abriendo el socket no first')
        this.available = true;
        this.socket = new Socket();
        this.socket.joinRoom(this.data.id, this.data.precio_base, this.data.minimo_requerido);
      } else if (value === null && old === '') {
        //alert('cerrando el socket :O')
        this.socket.close();
      }
    }
    super.attributeChangedCallback(name, old, value)
  }

  private _timeUp() {
    this.available = false;
  }

  private pushHalf() {
    let data = {
      auction_id: this.auction['_id'],
      vehicle_id: this.data['id'],
      type: 0,
      client_id: this.user['codigo'],
      timestamp: Date.now(),
      price: this.price
    }
    console.log(data);
    fetchQuery("/bids", "POST", data);
  }

  private pushFull() {
    let data = {
      auction_id: this.auction['_id'],
      vehicle_id: this.data['id'],
      type: 1,
      client_id: this.user['codigo'],
      timestamp: Date.now(),
      price: this.price
    }
    console.log(data);
    fetchQuery("/bids", "POST", data);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'auction-view': AuctionView;
  }
}

