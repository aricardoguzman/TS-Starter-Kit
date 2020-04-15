import { BaseLit, customElement, property, css, html } from './base-element';
import './custom-components/layout/app-drawer';
import './custom-components/layout/app-header';
import './custom-components/cards/card-component';
import './utilities/helpers';
import { menuIcon } from './icons/icons';
import { IconStyle, ScrollBarStyle, TypographyStyle } from './styles/main-shared-style';
import { AppHeader } from './custom-components/layout/app-header';
//import { AppHeader } from './custom-components/layout/app-header';

@customElement('main-app')
export class MainApp extends BaseLit {
  static styles = [
    TypographyStyle,
    IconStyle,
    ScrollBarStyle,
    css`
    :host {
      width: 100vw;
      height: 100vh;
      --dark-primary-color : #512DA8;
      --default-primary-color :  #673AB7;
      --light-primary-color : #D1C4E9;
      --text-primary-color : #FFFFFF;
      --accent-color : #7C4DFF;
      --gradient-color: #AF00F7;
      --primary-text-color : #212121;
      --secondary-text-color : #757575;
      --primary-background-color: #FFFFFF;
      --divider-color : #BDBDBD;
      --shadow-transition: transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      --shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12),
                  0 3px 1px -2px rgba(0, 0, 0, 0.2);
      --shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                  0 1px 8px 0 rgba(0, 0, 0, 0.12),
                  0 3px 3px -2px rgba(0, 0, 0, 0.4);
      --shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                  0 1px 10px 0 rgba(0, 0, 0, 0.12),
                  0 2px 4px -1px rgba(0, 0, 0, 0.4);
      --shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.4);
      --shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12),
                  0 5px 5px -3px rgba(0, 0, 0, 0.4);
      --shadow-elevation-16dp:0 16px 24px 2px rgba(0, 0, 0, 0.14),
                  0  6px 30px 5px rgba(0, 0, 0, 0.12),
                  0  8px 10px -5px rgba(0, 0, 0, 0.4);
    }

    app-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;
      width: 100%;
      align-items: center;
      color: var(--text-secondary-color);
      --app-header-bg-color: var(--default-primary-color)
    }

    app-drawer{
      z-index: 150;
    }

    main {
      padding-top: 64px;
      height: calc(100vh - 64px);
      min-height: calc(100vh - 64px);
      max-height: calc(100vh - 64px);
      overflow: auto;
      display: grid;
      grid-template-rows: 1fr auto;
      /*
      font-family: var(--app-font-family);
      */
      -webkit-overflow-scrolling: touch;
      background: var(--primary-background-color, #FFFFFF);
    }

    .page {
      display: none;
    }

    .page[active] {
      display: block;
    }

    footer {
      grid-row: 2 / 3;
      background: var(--default-primary-color);
      height: 50px;
    }`
  ];

  @property()
  appTitle = "Auctions"

  @property({ type: String })
  _page = "home"

  @property({ type: Boolean })
  _drawerOpened = false;

  render() {
    return html`
     <app-header>
       <span class="icon" slot="prefix" @click="${() => this._drawerOpened = true}">${menuIcon}</span>
     </app-header>

     <app-drawer .opened="${this._drawerOpened}"
        @drawer-opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        <span class="drawer-icon"></span>
        <div class="underline"></div>
        <a ?selected="${this._page === 'home'}" href="/"><span></span>Home</a>
        <a ?selected="${this._page === 'ordenes'}" href="/ordenes"><span></span>Ordenes</a>
        <a ?selected="${this._page === 'dashboard'}" href="/dashboard"><span></span>Dashboard</a>
        <a ?selected="${this._page === 'inventario'}" href="/inventario"><span></span>Inventario</a>
        <a ?selected="${this._page === 'diario'}" href="/diario"><span></span>Diario</a>
        <a ?selected="${this._page === 'consultas'}" href="/consultas"><span></span>Consultas</a>
        <div class="underline"></div>
      </nav>
    </app-drawer>

     <main id="main-content" class="body-1">
      <div style=" display:flex; justify-content: space-around; flex-wrap: wrap ">
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
        <card-component>
          <img src="https://pbs.twimg.com/profile_images/1149343940300218370/tI3Yfg-I.png" slot="img" style="max-width: 100%; max-height: 100%; object-fit: contain">
          <h3 class="headline-3" slot="container">Headline 3</h3>
          <p slot="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </card-component>
      </div>
     <footer></footer>
     </main>
    `;
  }

  private _drawerOpenedChanged(e: CustomEvent): void {
    this._drawerOpened = e.detail;
  }

  public firstUpdated() {
    (<AppHeader>this.$$('app-header')!).setScrollElement(this._('main-content'))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp;
  }
}
