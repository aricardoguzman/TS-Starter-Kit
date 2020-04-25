import { BaseLit, customElement, html, css, property } from '../../base-element';
import { TypographyStyle } from '../../styles/main-shared-style';

@customElement('custom-counter')
export class CustomCounter extends BaseLit {

  totalSeconds: number = 0;

  @property({ type: Number })
  max = 60

  @property({ type: Boolean })
  forwards = false

  @property({ type: Number })
  hours = 0;

  @property({ type: Number })
  minutes = 0;

  @property({ type: Number })
  seconds = 0;

  static get styles() {
    return [
      TypographyStyle,
      css`
        :host{
          display: block;
          width: 100px;
          height: 50px;
        }

        :host > * {
          display: inline-block;
          padding: 0;
          margin: 0;
          color: var(--default-primary-color);
        }

        :host(.tick) label {
          animation: tick 2s infinite;
        }

        @keyframes tick {
          0% {
            color: var(--default-primary-color);
          }
          50% {
            color: var(--error-color,red);
            font-size: 1.25em;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <label>${(this.hours + "").padStart(2, "0")}:${(this.minutes + "").padStart(2, "0")}:${(this.seconds + "").padStart(2, "0")} </label>
    `;
  }

  firstUpdated() {
    setTimeout(this._setTime.bind(this), 1000);
  }

  private _setTime(): void {
    this.totalSeconds = this.totalSeconds + 1;
    if (this.forwards) {
      this.seconds = this.totalSeconds % 60;
      this.minutes = Math.floor(this.totalSeconds / 60);
      this.hours = Math.floor(this.totalSeconds / 3600);
    } else {
      this.seconds = (this.max - this.totalSeconds) % 60;
      this.minutes = Math.floor((this.max - this.totalSeconds) / 60);
      this.hours = Math.floor((this.max - this.totalSeconds) / 3600);
    }
    if (this.forwards) {
      if (this.minutes == 0 && this.hours == 0 && this.seconds < 30)
        this.classList.add('tick')
      else
        this.classList.remove('tick')
    } else {
      if (this.max - this.totalSeconds <= 30)
        this.classList.add('tick')
      else
        this.classList.remove('tick')
    }
    if (this.totalSeconds < this.max)
      setTimeout(this._setTime.bind(this), 1000);
    else
      this.fire('time-is-up');
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'custom-counter': CustomCounter
  }
}