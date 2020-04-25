import { customElement, html, css } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';

@customElement('error-view')
export class ErrorView extends PageView {

  static get styles() {
    return [
      ...super.styles,
      TypographyStyle,
      ButtonStyles,
      css`
        h1,h2 {
          text-align: center;
        }

        ripple-container{
          margin: auto;
        }

        a {
          width: 200px;
          padding: 36px;
          box-shadow: var(--shadow-elevation-4dp);
        }
      `
    ];
  }

  render() {
    return html`
      <h1 class="headline-1"> Parece que esta funcionalidad no existe!</h1>
      <h2 class="headline-2"> regrese a los sitios seguros </h2>
      <ripple-container>
        <a href="/" class="linked-btn button">Ir a inicio</a>
      </ripple-container>`;


  }

}

declare global {
  interface HTMLTagNameMap {
    'error-view': ErrorView
  }
}
