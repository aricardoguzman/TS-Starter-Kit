import { BaseLit, html, css, property, customElement } from '../../base-element';
import { forwardArrowIcon, backwardArrowIcon } from '../../icons/icons';
import { IconStyle, TypographyStyle } from '../../styles/main-shared-style';


interface Item {
  url: string;
  title: string;
  caption: string;
}

@customElement('carousel-component')
export class CarouselComponent extends BaseLit {

  transitionHandler: any;

  @property({ type: Array })
  items: Array<Item> = [];

  @property({ type: Number })
  index = 1;

  @property({ type: Array })
  photos: any = [];

  @property({ type: Number })
  width = 750;

  static get styles() {
    return [
      IconStyle,
      TypographyStyle,
      css`
      :host{
        display: block;
        width: 750px;
        height: 500px;
        margin:auto;
        overflow: hidden;
        position: relative;
      }

      .container {
        display: inline-flex;
        height: 100%;
        border-radius: 10px;
        align-self: flex-start;
      }

      .slider {
        flex: 1 0 100%;
        border-radius: 10px;
      }

      button {
        position: absolute;
        width: 50px;
        height: 50px;
        border: none;
        top: calc(50% - 50px);
        opacity: 0.2;
        background: var(--divider-color);
        border-radius: 100%;
        outline: none;
        transition: opacity 250ms;
        cursor: pointer;
      }

      button:hover{
        opacity: 1;
      }


      #next, #prev{
        top: 50%;
        left: 0;
      }

      #next{
        left: unset;
        right: 0;
      }

      .caption{
        width: 75%;
        margin: 35% auto 0;
        background: rgba(255,255,255,0.5);
        border-radius: 10px;
        color: var(--dark-primary-color);
        padding: 8px;
      }

      .caption:hover{
        background: rgba(255,255,255,1);
      }

    `];
  }

  protected render() {
    return html`
    ${this.width != 750 ? html`
      <style>
        :host{
          width: ${this.width}px;
        }
      </style>
    `: ''}
    <div class="container" style="transform: translateX(-${this.width}px);">
      ${
      this.items.length > 1 ?
        html`
        <div class="slider" style="background: url(${this.items[this.items.length - 1].url}) no-repeat center center / cover" id="lclone">
              <div class="caption">
                <h2 class="headline-2">${this.items[this.items.length - 1].title}</h2>
                <p>${this.items[this.items.length - 1].caption}</p>
              </div>
          </div>`: ''
      }
      ${
      this.items.map(it => html`
        <div class="slider" style="background: url(${it.url}) no-repeat center center / cover">
            <div class="caption">
              <h2 class="headline-2">${it.title}</h2>
              <p>${it.caption}</p>
            </div>
        </div>
      `)
      }
      ${
      this.items.length > 1 ?
        html`
        <div class="slider" style="background: url(${this.items[0].url}) no-repeat center center / cover" id="fclone">
              <div class="caption">
                <h2 class="headline-2">${this.items[0].title}</h2>
                <p>${this.items[0].caption}</p>
              </div>
          </div>`: ''
      }
    </div>
    <button id="next" @click="${this._clickHandler}"><span class="icon">${backwardArrowIcon}</span></button>
    <button id="prev" @click="${this._clickHandler}"><span class="icon">${forwardArrowIcon}</span></button>
    `;
  }

  public firstUpdated() {
    /* this.clickHandler = this._clickHandler.bind(this);
     this.$$$('button')!.forEach(element => element.addEventListener('click', this.clickHandler));*/
    this.photos = Array.prototype.slice.call(this.$$$('.slider'));
    this.transitionHandler = this._transitionHandler.bind(this);
    this.$$('.container')!.addEventListener('transitionend', this.transitionHandler);
  }



  public disconnectedCallback() {
    super.disconnectedCallback();
    this.$$('.container')?.removeEventListener('transitionend', this.transitionHandler);
  }

  private _transitionHandler() {

    let container = this.$$('.container');
    if (this.photos[this.index].id === 'lclone') {
      container!.style.transition = 'none';
      this.index = this.photos.length - 2;
      container!.style.transform = `translateX( -${this.width * this.index}px)`;
    }
    if (this.photos[this.index].id === 'fclone') {
      container!.style.transition = 'none';
      this.index = this.photos.length - this.index;
      container!.style.transform = `translateX(-${this.width * this.index}px)`;
    }
  }

  private _clickHandler(event: Event) {

    if (this.index <= 0 || this.index >= this.photos.length - 1) return;

    if ((<HTMLElement>event.target).id === 'next') {
      this.index++;
    } else {
      this.index--;
    }
    let container = this.$$('.container');
    container!.style.transition = 'transform 250ms ease-in-out';
    container!.style.transform = `translateX( -${this.width * this.index}px)`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'carousel-component': CarouselComponent;
  }
}
