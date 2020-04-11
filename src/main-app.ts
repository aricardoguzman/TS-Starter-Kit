import { BaseLit, customElement, property, css, html } from './base-element';
import './utilities/helpers';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('main-app')
export class MainApp extends BaseLit {
  static styles = css`
    :host {
      display: block;
      border: solid 2px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  appTitle = "Main"
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
     <nav></nav>

    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'main-app': MainApp;
  }
}
