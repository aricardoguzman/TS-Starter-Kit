import { BaseLit } from '../../base-element';
export declare class CustomInput extends BaseLit {
    type: string;
    required: boolean;
    label: string;
    value: string;
    readOnly: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-html").TemplateResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        'custom-input': CustomInput;
    }
}
//# sourceMappingURL=custom-input.d.ts.map