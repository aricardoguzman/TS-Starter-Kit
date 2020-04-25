import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/cards/card-component';
import '../custom-components/input/custom-input';
import { fetchQuery } from '../requests/request';

@customElement('login-view')
export class LoginView extends PageView {

  tokenURL = 'http://35.193.70.253/GetToken?client_id=999888777666555444&password=oficina123**';
  officeURL = 'http://35.225.144.113/Afiliado';

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

        h1 {
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
        <h1 class="headline-1"> ${this.title} </h1>
        <div class="underline" style="margin-bottom: 40px;"></div>
        <custom-input label="Username" id="username"></custom-input>
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
    let token: any = await fetchQuery(this.tokenURL, 'GET', undefined);
    //alert(token);
    //This request goes to the ESB
    let username = (<HTMLInputElement>this._('username'))!.value;
    let password = (<HTMLInputElement>this._('password'))!.value;

    fetchQuery(this._constructURL(<string>token.token, <string>username, <string>password), this.suscribe ? 'POST' : 'GET', undefined)
      .then((data) => {
        this.fire('auth-changed', data)
      }).catch((err) => {
        console.log(err);
      })

  }

  private _constructURL(token: string, username: string, password: string): string {
    return `${this.officeURL}?jwt=${token}&codigo=${username}&password=${password}`;
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
