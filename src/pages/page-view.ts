import { BaseLit, customElement, property, css } from '../base-element';

@customElement('page-view')
export class PageView extends BaseLit {

  static get styles() {
    return [
      css`

      :host{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      @keyframes fadeIn{
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut{
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      :host([active]){
        animation: forwards fadeIn 500ms;
      }
    `];
  }

  @property({ type: Object })
  credentials: any

  @property({ type: Boolean, reflect: true })
  active = true;

  @property({ type: String })
  esburl = ''

  @property({ type: String })
  tokenurl = ''
}

declare global {

  interface HTMLElementTagNameMap {
    'page-view': PageView;
  }

}

