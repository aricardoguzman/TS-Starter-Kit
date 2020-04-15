import { BaseLit, customElement, property, css, html } from '../../base-element';


@customElement('card-component')
export class CardComponent extends BaseLit {

  @property({ type: Boolean })
  shadowBox = false;

  static styles = [
    css`
      :host(.expanded){
        padding: initial;
        height: 600px;
      }

      :host {
        border-radius: 10px;
        position: relative;
        display: block;
        height: 300px;
        padding: 12.5px 0;
        -webkit-transition: height 1s ease;
        -moz-transition: height 1s ease;
        -o-transition: height 1s ease;
        transition: height 1s ease;
      }

      .face {
        width: 275px;
        height: 275px;
        transition: 0.5s;
        border-radius: 10px;
      }

      .face1 {
        border-radius: 10px;
        position: relative;
        background: var(--default-primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(0%);
      }

      .face2 {
        border-radius: 10px;
        height: 275px;
        position: relative;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        box-sizing: border-box;
        box-shadow: var(--shadow-elevation-4dp, none);
        transform: translateY(-100%);
      }


      slot[name="img"]::slotted(*){
        border-radius: 10px;
        transition: border-radius 250ms linear;
      }

      .content{
        border-radius: 10px;
        opacity: 0.6;
        transition: 0.5s;
        height: 100%;
        width: 100%;
      }

      :host(:hover) .content{
        opacity: 1;
      }

      :host(:hover) .face2 {
        box-shadow: var(--shadow-elevation-8dp);
      }

      :host(:hover) slot[name="img"]::slotted(*),
      :host(:hover) .face1,
      :host(:hover) .face1 .content {
        border-radius: 10px 10px 0 0;
      }

      :host(:hover) .face2,
      :host(:hover) .face2 .content {
        border-radius: 0 0 10px 10px;
      }

      :host(.expanded) .face1,
      :host(.expanded) .face2{
        transform: translateY(0);
      }

    `
  ]

  render() {
    return html`
        <div class="face face1">
          <div class="content">
            <slot name="img"></slot>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <slot name="container"></slot>
          </div>
        </div>
        <div class="message">
            <slot name="message">
        </div>`
  }

  props: any = {}
  forwards: Boolean = true

  public connectedCallback(): void {
    super.connectedCallback();

    this.props['_transitionHandler'] = this._transitionHandler.bind(this);
    this.addEventListener('mouseenter', this.props._transitionHandler);
    this.addEventListener('mouseleave', this.props._transitionHandler);
    //this.fire('app-reset-layout');
  }

  protected _transitionHandler(e: Event): void {

    if (e.type === "mouseenter" && !this.classList.contains('expanded')) {
      this.classList.toggle('expanded');
    } else if (e.type === "mouseleave" && this.classList.contains('expanded')) {
      this.classList.toggle('expanded');
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-component': CardComponent;
  }
}