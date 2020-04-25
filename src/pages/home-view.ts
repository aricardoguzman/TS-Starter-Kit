import { customElement, html, css, property } from '../base-element';
import { PageView } from './page-view';
import { TypographyStyle, ButtonStyles } from '../styles/main-shared-style';
import '../custom-components/cards/card-component';
import '../container/ripple-container';
import '../custom-components/input/custom-input';
import '../custom-components/cards/carousel-component';
import '../custom-components/clock/custom-counter';
import { vehicle_data as Vehicles } from '../data/tmp-data'

@customElement('home-view')
export class HomeView extends PageView {

  @property({ type: Array })
  data = Vehicles

  static get styles() {
    return [
      ...super.styles,
      TypographyStyle,
      ButtonStyles,
      css`
        card-component{
          --card-bg : linear-gradient(45deg, var(--default-primary-color), var(--gradient-color))
        }

        ripple-container {
          margin-left: 40%;
        }
      `
    ];
  }

  render() {
    return html`
      <div style=" display:flex; justify-content: space-around; flex-wrap: wrap; padding-top: 10px;">
        ${this.data.map((el, inx) => html`
          <card-component .height="${250}">
            <img src=${el.url} slot="img" style="max-width: 100%; max-height: 100%; width: 100%; height: 100%;">
            <h5 class="headline-5" slot="container">${el.name}</h5>
            <p slot="container" class="caption">
              ${el.description}
            </p>
            <ripple-container slot="container">
              <a href="/subasta" class="linked-btn button" index="${inx}" @click="${this._saveVehicle}">Ir a puja</a>
            </ripple-container>
          </card-component>
        `)}
      </div>
    `;
  }

  private _saveVehicle(e: Event) {
    let idx = Number((<HTMLElement>e.target)!.getAttribute('index'));
    this.fire('auction-selected', this.data[idx].auction_id);
  }

}

