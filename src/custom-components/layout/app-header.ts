import { BaseLit, customElement, property, css, html } from '../../base-element';
import { TypographyStyle } from '../../styles/main-shared-style';

@customElement('app-header')
export class AppHeader extends BaseLit {

  scrollElement: HTMLElement | undefined;
  last_known_scroll_position: number = 0;
  ticking: Boolean = false;

  static styles = [
    TypographyStyle,
    css`

      :host([top]){
        background-color: transparent;
        transform: translateY(0);
      }

      :host([show]){
        transform: translateY(0);
        opacity: 1;
      }

      :host {
        background-color: var(--app-header-bg-color, blue);
        width: 100%;
        display: flex;
        height: var(--app-header-height, 64px);
        transition: opacity 300ms linear, transform 100ms ease;
        opacity: 1;
        transform: translateY(-100%);
      }

      .prefix, .suffix{
        flex: 1 0 7.5%;
        height: var(--app-header-height, 64px);
        align-items: center;
        display: inline-flex;
        margin-left: 2.5%;
        box-sizing: border-box;
      }

      .suffix {
        flex: 1 0 10%;
      }

      .title {
        flex: 1 0 80%;
        text-align: center;
        color: var(--text-primary-color, black)
      }
    `];

  @property()
  title = "Header"

  @property({ type: Boolean, reflect: true })
  top = true;

  @property({ type: Boolean, reflect: true })
  show = true;

  render() {
    return html`
    <div class="prefix">
      <slot name="prefix">
      </slot>
    </div>
    <div class="title">
      <slot name="title">
      <h3 class="headline-3">${this.title}</h3>
      </slot>
    </div>
    <div class="suffix">
      <slot name="suffix">
      </slot>
    </div>
    `;
  }

  public setScrollElement(scroll: HTMLElement | null): void {
    if (!scroll) return;
    this.scrollElement = scroll;
    /* set listener */
    this.scrollElement.addEventListener('scroll', this.scrollAction.bind(this));
  }

  private scrollAction() {

    let difference = this.scrollElement!.scrollTop - this.last_known_scroll_position;
    this.last_known_scroll_position = this.scrollElement!.scrollTop;
    let self = this;
    if (!this.ticking) {
      window.requestAnimationFrame(function () {
        self.showHeader(difference, self.last_known_scroll_position);
        self.ticking = false;
      });
    }
    this.ticking = true;
  }

  private showHeader(direction: number, current: number) {

    if (current <= 0) {
      this.top = true;
      this.style.opacity = '';
    } else {
      this.top = false;
      if (current >= 90 && direction > 0) {
        this.style.opacity = '0';
        this.show = false;
      } else {
        this.style.opacity = (current >= 90) ? '1' : (current / 90) + '';
        this.show = true;
      }
    }

  }

}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
