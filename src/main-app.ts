import { BaseLit, customElement, property, css, html } from './base-element';
import './custom-components/layout/app-drawer';
import './custom-components/layout/app-header';
import './utilities/helpers';
import { menuIcon } from './icons/icons';
import { IconStyle, ScrollBarStyle } from './styles/main-shared-style';
import { AppHeader } from './custom-components/layout/app-header';
//import { AppHeader } from './custom-components/layout/app-header';

@customElement('main-app')
export class MainApp extends BaseLit {
  static styles = [
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
      --primary-text-color : #212121;
      --secondary-text-color : #757575;
      --divider-color : #BDBDBD;
    }

    app-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 150;
      width: 100%;
      align-items: center;
      color: var(--text-secondary-color);
      background-color: var(--default-primary-color);
      border-bottom: 1px solid var(--accent-color);
      border: 0;
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
      background: var(--secondary-background-color);
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
    }
  `];

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

     <main id="main-content">
      <div style="height: 1000px;"></div>
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
