import { css } from '../base-element'

export const ScrollBarStyle = css`
    #main-content::-webkit-scrollbar {
        height: 4px;
        width: 4px;
        background-color: var(--light-primary-color);
    }

    #main-content::-webkit-scrollbar-thumb {
        background-color: var(--dark-primary-color);
        border-radius: 5px 5px 0 0;
    }

    #main-content::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 8px rgba(0,0,0,0.3);
        background-color: #fff;
    }
`

export const IconStyle = css`
    .icon {
        width: 24px;
        height: 24px;
        fill: var(--icon-fill-color, var(--text-primary-color, black));
        cursor: pointer;
        pointer-events: none;
    }`

export const TypographyStyle = css`

    .underline {
        background: var(--divider-color);
        height: 2px;
        margin: auto;
        width: 80%;
    }

    .headline-1, .headline-2, .headline-3, .headline-4, .headline-5, .headline-6,
    .subtitle-1, .subtitle-2 {
        font-family: "Julius Sans One";
        margin: 8px auto;
        padding: 0;
    }

    .headline-1 { font-size: 78px; font-weight: lighter; }
    .headline-2 { font-size: 49px; font-weight: lighter; }
    .headline-3 { font-size: 39px; }
    .headline-4 { font-size: 28px; }
    .headline-5 { font-size: 20px; }
    .headline-6 { font-size: 16px; font-weight: medium; }

    p { margin: 0; text-align: justify; }

    .body-1, .body-2, .button, .overline, .caption { font-family: "Crimson Text"; }

    .body-1 { font-size: 20px; }
    .body-2 { font-size: 18px; font-weight: medium; }
    .subtitle-1 { font-size: 13px; }
    .subtitle-2 { font-size: 11px; }
    .button  { font-size: 18px; }
    .overline{ font-size: 13px; }
    .caption { font-size: 15px; }
    .button, .caption, .overline {text-transform: uppercase; }
`

export const ButtonStyles = css`

    .linked-btn{
        outline: none;
        background: var(--accent-color);
        color: var(--text-primary-color);
        padding: 8px;
        display: block;
        width: 127px;
        text-align: center;
        border-radius: 10px;
        margin: 8px;
        text-decoration: none;
        border: none;
        cursor: pointer;
    }
`