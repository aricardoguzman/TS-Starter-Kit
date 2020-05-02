import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/cards/card-component';
import '../custom-components/input/custom-input';
import '../container/ripple-container';
import { fetchQuery } from '../requests/request';

@customElement('login-view')
export class LoginView extends PageView {

  @property({ type: String })
  title = 'Login';

  @property({ type: Boolean })
  suscribe = false;

  static get styles() {
    return [
      ...super.styles,
      ButtonStyles,
      TypographyStyle,
      css`
        :host{
          background-color: var(--default-primary-color);
        }

        ripple-container {
          margin: auto;
        }

        .form {
          padding-top: 40px;
          box-sizing: border-box;
          height: 70vh;
          width: 30%;
          margin: auto;
          margin-top: calc(15vh - 64px);
          border-radius: 10px;
          box-shadow: var(--shadow-box-2dp);
          background: var(--primary-background-color);
        }

        custom-input{
          margin: 25px auto;
          width: 60%;
        }

        h2 {
          text-align: center;
          text-transform: none;
        }

        button.button.linked-btn {
          padding: 16px;
          width: 150px;
        }

        @media only screen and (max-width: 840px){
          .form{
            width: 80%;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="form">
        <h2 class="headline-2"> ${this.title} </h2>
        <div class="underline" style="margin-bottom: 40px;"></div>
        <custom-input label="${this.suscribe ? 'Nombre' : 'Codigo'}" id="username"></custom-input>
        <custom-input label="Password" type="password" id="password"></custom-input>
        <div class="underline" sytle="margin-top: 40px;"></div>
        <div style="margin:auto; width:57.5%;">
          <input type="checkbox" id="suscribe" name="suscribe" value="false" @change="${this._changeTitle}">
          <label class="caption" for="suscribe">No tienes una cuenta?</label>
        </div>
        <ripple-container  @click=${this._authenticate}>
          <button class="button linked-btn">Submit</button>
        </ripple-container>
      </div>
    `;
  }

  private async _authenticate() {

    //TODO: get service token
    let token: any = await fetchQuery(this.tokenurl, 'POST', this.credentials);
    //alert(token);
    //This request goes to the ESB
    let username = (<HTMLInputElement>this._('username'))!.value;
    let password = (<HTMLInputElement>this._('password'))!.value;

    if (!this.suscribe) {
      fetchQuery(this._constructURL(<string>token.token, <string>username, <string>password), 'GET', undefined)
        .then((data: any) => {
          if (data.code !== undefined && data.code !== 200) {
            throw Error('Unauthorized');
          }
          this.fire('auth-changed', data);
        }).catch((err) => {
          console.log(err);
          window.dispatchEvent(new CustomEvent("error", { detail: "Credenciales inválidas" }));
        })
    } else {
      fetchQuery(`${this.esburl}/Afiliado`, 'POST', { jwt: token.token, nombre: username, password: password })
        .then((data: any) => {
          if (data.code !== undefined && data.code !== 200) {
            throw Error('Unable to change data');
          } else {
            this.fire('auth-changed', data);
            window.dispatchEvent(new CustomEvent("error", { detail: data.codigo }))
          }
        }).catch((err) => {
          console.log(err);
          window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error al actualizar data" }));
        })
    }


  }

  private _constructURL(token: string, username: string, password: string): string {
    return `${this.esburl}/Afiliado?jwt=${token}&codigo=${username}&password=${password}`;
  }

  private _changeTitle() {
    this.suscribe = ((<HTMLInputElement>this._('suscribe')).checked);
    console.log(this.suscribe);
    this.title = this.suscribe ? "SUSCRIBE" : "LOGIN";
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'login-view': LoginView;
  }
}
