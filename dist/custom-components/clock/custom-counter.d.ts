import { BaseLit } from '../../base-element';
export declare class CustomCounter extends BaseLit {
    totalSeconds: number;
    max: number;
    forwards: boolean;
    hours: number;
    minutes: number;
    seconds: number;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    firstUpdated(): void;
    private _setTime;
}
declare global {
    interface HTMLElementTagNameMap {
        'custom-counter': CustomCounter;
    }
}
//# sourceMappingURL=custom-counter.d.ts.map