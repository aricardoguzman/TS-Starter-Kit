import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import '../custom-components/clock/custom-counter';
//import { vehicle_data as Vehicles } from '../data/tmp-data'
import { fetchQuery } from '../requests/request';


interface Car {
  arranca: number;
  camina: number;
  colision: number;
  color: string;
  estado: number;
  falla_mecanica: number;
  garantia_inspeccion: number;
  id: number;
  inundado: number;
  linea: string;
  marca: string;
  minimo_requerido: number;
  modelo: string;
  numero_chasis: string;
  numero_motor: string;
  observacion: string;
  placa: string;
  precio_base: number;
  tipo: string;
}

@customElement('home-view')
export class HomeView extends PageView {

  @property({ type: Array })
  data: Array<Car> = []

  @property({ type: Object })
  fotos: any = {}

  @property({ type: Array })
  photobank: Array<any> = []

  static get styles() {
    return [
      ...super.styles,
      TypographyStyle,
      ButtonStyles,
      css`
        :host > div {
          box-sizing: border-box;
        }

        .card {
	  margin:10px;
          width: 500px;
          box-sizing: border-box;
          box-shadow: var(--shadow-elevation-2dp);
          padding: 10px;
          border-radius: 10px;
        }

        .card:hover {
          box-shadow: var(--shadow-elevation-8dp);
	  transform: translateY(5px);
        }

        .container{
          display: grid;
          grid-template-columns: repeat(2,1fr);
        }

        .container > div{
          padding: 2px 8px;
        }

        .container > div:nth-child(even){
          background: var(--default-primary-color);
          color: white;
        }

        .container > div:nth-child(odd){
          background: var(--light-primary-color);
          color: var(--dark-primary-color);
        }

        .flex-cont{
          display:flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 10px;
        }

        ripple-container {
          margin-left: 50%;
          transform: translateX(-50%);
          padding: 2px;
        }

        .linked-btn{
          padding: 16px;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="flex-cont">
        ${this.data.map((el, inx) => html`
          <div class="card">
            <img src=${this.fotos[el.id] && this.fotos[el.id][0]} slot="img" style="max-width: 100%; max-height: 300px; width:100%; height: 300px;">
            <h5 class="headline-5">${el.numero_chasis}</h5>
            <div class="container">
                ${Object.keys(el).map((key) => html`<div>${key}</div><div>${el[key]}</div>`)}
            </div>
            <ripple-container slot="container">
              <a href="/subasta" class="linked-btn button" index="${inx}" @click="${this._saveVehicle}">Ir a puja</a>
            </ripple-container>
          </div>
        `)}
      </div>
    `;
  }

  private _saveVehicle(e: Event) {
    let idx = Number((<HTMLElement>e.target)!.getAttribute('index'));
    this.fire('vehicle-selected', { ...this.data[idx], fotos: this.fotos[this.data[idx].id] });
  }

  public async attributeChangedCallback(name: string, old: string | null, value: string | null) {

    if (name === 'active') {
      if (value === '' && old !== null) {
        //we retrieve token first
        let data: any = await this.getToken();
        //we retrieve the vehicles data
        let vehicles: any = await fetchQuery(
          `${this.esburl}/Vehiculo?jwt=${data.token}&subastable=true`,
          'GET',
          undefined
        );

        let fotos: any = await fetchQuery(
          `${this.esburl}/Foto?jwt=${data.token}`,
          'GET',
          undefined
        )

        this.data = vehicles.response as Array<Car>;
        console.log(this.data)
        this.photobank = fotos.response;
        this.fotos = this.parseFotos(this.photobank);

        console.log(this.fotos);
      }
    }
    super.attributeChangedCallback(name, old, value)
  }

  private parseFotos(tfotos: Array<any>) {
    let tData: any = {};

    tfotos.forEach(el => {

      if (tData[el.id_vehiculo] === undefined) {
        tData[el.id_vehiculo] = [el.url];
      } else {
        tData[el.id_vehiculo].push(el.url);
      }

    });

    return tData;

  }

  public async getToken() {
    let token = await fetchQuery(this.tokenurl, 'POST', this.credentials);
    console.log(token);
    return token;
  }

}

