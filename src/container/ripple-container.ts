import { BaseLit, customElement, property, css, html } from '../base-element';


@customElement('ripple-container')
export class RippleEffect extends BaseLit {

  @property({ type: Number })
  posX = 0;
  @property({ type: Number })
  posY = 0;

  constructor() {
    super();
  }

  public firstUpdated() {
    this.addEventListener('mousedown', this._clickHandler)
  }

  public disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('mousedown', this._clickHandler)
  }

  static get styles() {
    return [
      css`
      :host{
        display: block;
        position: relative;
        width: fit-content;
        height: fit-content;
        padding: 0;
        margin: 0;
        overflow: hidden;
      }

      ::slotted(*){
        display:block;
        text-decoration:none;
        position:relative;
        overflow:hidden;
        transition: all 0.2s ease;
        z-index:50;
      }

      .ink {
        display: block;
        position: absolute;
        background:rgba(255, 255, 255, 0.3);
        border-radius: 100%;
        transform:scale(0);
      }

      .animate {
        animation:ripple 0.65s linear;
      }

      @keyframes ripple {
          100% {opacity: 0; transform: scale(2.5);}
      }`,
    ]
  }

  render() {
    return html`<slot></slot>`
  }

  private _clickHandler(e: MouseEvent): void {
    let target_el: HTMLElement | null = e.target as HTMLElement;
    let ink_el: HTMLElement | null = (<HTMLElement>target_el).querySelector('.ink') || this.$$('.ink');

    if (ink_el) {
      ink_el.classList.remove('animate');
    }
    else {
      ink_el = document.createElement('span');
      ink_el.classList.add('ink');
      ink_el.style.width = ink_el.style.height = Math.max(target_el.offsetWidth, target_el.offsetHeight) + 'px';
      this.shadowRoot!.appendChild(ink_el);
    }

    ink_el.style.left = (e.offsetX - ink_el.offsetWidth / 2) + 'px';
    ink_el.style.top = (e.offsetY - ink_el.offsetHeight / 2) + 'px';
    ink_el.classList.add('animate');
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'ripple-container': RippleEffect;
  }
}