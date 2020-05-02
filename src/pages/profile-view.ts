import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
//import { fetchQuery, serviceCredentials } from '../requests/request';
import { fetchQuery } from '../requests/request';


@customElement('profile-view')
export class ProfileView extends PageView {

  @property({ type: Object })
  user: any = {};

  @property({ type: Object })
  payment: any = {}

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

        h1,h2 {
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
          grid-column: 1 / 3;
          margin: auto;
        }


        .buttons{
          margin: auto;
          width: 25%;
        }

        button {
          height: 50px;
        }

        .payment {
          text-align: center;
          padding: 25px;
          box-sizing: border-box;
        }

        .grid{
          display: grid;
          grid-template-columns: repeat(2,1fr);
          background: var(--divider-color);
          grid-gap: 1px;
        }

        .grid > div{
          background: white;
        }

        custom-input{
          margin: 5px auto;
        }

        .payment.card {
          display:grid;
          grid-template-columns: repeat(2,1fr);
          grid-template-rows: repeat(2,1fr);
        }

        .ccform {
          grid-column: 1/3;
        }
      `
    ];
  }

  render() {
    return html`
    <h1 class="headline-1">Mi perfil</h1>
    <div class="grid">
      <div>
        <div class="heading">
            <h2 class="headline-2">Datos</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
          <custom-input label="Nombre" id="name"></custom-input>
          <custom-input label="Contraseña" id="password" type="password"></custom-input>
          <ripple-container  @click=${this.changeNamePassword}>
            <button class="button linked-btn">Cambiar</button>
          </ripple-container>
        </div>
      </div>
      <div>
        <div class="heading">
            <h2 class="headline-2">Ver Pago</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
      ${
      Object.keys(this.payment).map(el => html`
              <div class="caption">${el}</div><div class="subtitle">${this.payment[el]}</div>
      `)
      }
          <ripple-container  @click=${this.requestPayment}>
            <button class="button linked-btn">Consultar</button>
          </ripple-container>
        </div>
      </div>
      <div class="ccform">
        <div class="heading">
            <h2 class="headline-2">Pago afiliación</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
          <custom-input label="Dueño" id="codigo" .value=${this.user.codigo}></custom-input>
          <custom-input label="CVV" id="cvv"></custom-input>
          <custom-input label="Número de tarjeta" id="cardNumber"></custom-input>
          <custom-input label="Cantidad" id="monto"></custom-input>
          <ripple-container  @click=${this.makePayment}>
            <button class="button linked-btn">Confirmar</button>
          </ripple-container>
        </div>
      </div>
    </div>
    `;
  }

  private async requestPayment() {

    let token: any = await fetchQuery(this.tokenurl, 'POST', this.credentials);

    let url = `/Pago?jwt=${token.token}&codigo=${this.user.codigo}`

    fetchQuery(this.esburl + url, "GET", undefined)
      .then((data: any) => {
        if (data.id === undefined)
          throw Error('error')
        this.payment = data;
      })
      .catch((err) => {
        window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error" }));
        this.payment = {}
        console.log(err);
      });
  }

  private async makePayment() {

    if (this.user.vigente) {
      window.dispatchEvent(new CustomEvent("error", { detail: "No es posible procesar pago" }));
      return;
    }

    let monto = (<HTMLInputElement>this._('monto')).value;

    let token: any = await fetchQuery(this.tokenurl, 'POST', this.credentials);

    let data = {
      jwt: token.token,
      codigo: this.user.codigo,
      monto: parseFloat(monto)
    }
    fetchQuery(this.esburl + '/Pago', "POST", data)
      .then((data) => {
        console.log(data);
        this.fire("user-payed")
      })
      .catch((err) => {
        window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error" }));
        console.log(err);
      });
  }

  private async changeNamePassword() {

    let token: any = await fetchQuery(this.tokenurl, 'POST', this.credentials);
    let name = (<HTMLInputElement>this._('name')).value;
    let password = (<HTMLInputElement>this._('password')).value;

    let data: any = {
      jwt: token.token,
      codigo: this.user.codigo,
    }

    if (password != '')
      data.password = password;
    if (name != '')
      data.nombre = name;

    fetchQuery(this.esburl + '/Afiliado', "PUT", data)
      .then((d) => {
        console.log(d);
        this.fire("user-payed")
      })
      .catch((err) => {
        alert("Ocurrió un error");
        console.log(err);
      });

  }

}

declare global {
  interface HTMLElementTagNameMap {
    'profile-view': ProfileView;
  }
}

