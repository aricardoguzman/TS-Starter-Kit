(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/custom-components/cards/carousel-component.ts":
/*!***********************************************************!*\
  !*** ./src/custom-components/cards/carousel-component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/icons */ "./src/icons/icons.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CarouselComponent = class CarouselComponent extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super(...arguments);
        this.items = [];
        this.index = 1;
        this.photos = [];
        this.width = 750;
    }
    static get styles() {
        return [
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["IconStyle"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
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

    `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
    ${this.width != 750 ? _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <style>
        :host{
          width: ${this.width}px;
        }
      </style>
    ` : ''}
    <div class="container" style="transform: translateX(-${this.width}px);">
      ${this.items.length > 1 ?
            _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="slider" style="background: url(${this.items[this.items.length - 1].url}) no-repeat center center / cover" id="lclone">
              <div class="caption">
                <h2 class="headline-2">${this.items[this.items.length - 1].title}</h2>
                <p>${this.items[this.items.length - 1].caption}</p>
              </div>
          </div>` : ''}
      ${this.items.map(it => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="slider" style="background: url(${it.url}) no-repeat center center / cover">
            <div class="caption">
              <h2 class="headline-2">${it.title}</h2>
              <p>${it.caption}</p>
            </div>
        </div>
      `)}
      ${this.items.length > 1 ?
            _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="slider" style="background: url(${this.items[0].url}) no-repeat center center / cover" id="fclone">
              <div class="caption">
                <h2 class="headline-2">${this.items[0].title}</h2>
                <p>${this.items[0].caption}</p>
              </div>
          </div>` : ''}
    </div>
    <button id="next" @click="${this._clickHandler}"><span class="icon">${_icons_icons__WEBPACK_IMPORTED_MODULE_1__["backwardArrowIcon"]}</span></button>
    <button id="prev" @click="${this._clickHandler}"><span class="icon">${_icons_icons__WEBPACK_IMPORTED_MODULE_1__["forwardArrowIcon"]}</span></button>
    `;
    }
    firstUpdated() {
        /* this.clickHandler = this._clickHandler.bind(this);
         this.$$$('button')!.forEach(element => element.addEventListener('click', this.clickHandler));*/
        this.photos = Array.prototype.slice.call(this.$$$('.slider'));
        this.transitionHandler = this._transitionHandler.bind(this);
        this.$$('.container').addEventListener('transitionend', this.transitionHandler);
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.$$('.container')) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', this.transitionHandler);
    }
    _transitionHandler() {
        let container = this.$$('.container');
        if (this.photos[this.index].id === 'lclone') {
            container.style.transition = 'none';
            this.index = this.photos.length - 2;
            container.style.transform = `translateX( -${this.width * this.index}px)`;
        }
        if (this.photos[this.index].id === 'fclone') {
            container.style.transition = 'none';
            this.index = this.photos.length - this.index;
            container.style.transform = `translateX(-${this.width * this.index}px)`;
        }
    }
    _clickHandler(event) {
        if (this.index <= 0 || this.index >= this.photos.length - 1)
            return;
        if (event.target.id === 'next') {
            this.index++;
        }
        else {
            this.index--;
        }
        let container = this.$$('.container');
        container.style.transition = 'transform 250ms ease-in-out';
        container.style.transform = `translateX( -${this.width * this.index}px)`;
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], CarouselComponent.prototype, "items", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CarouselComponent.prototype, "index", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], CarouselComponent.prototype, "photos", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CarouselComponent.prototype, "width", void 0);
CarouselComponent = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('carousel-component')
], CarouselComponent);



/***/ }),

/***/ "./src/custom-components/input/custom-input.ts":
/*!*****************************************************!*\
  !*** ./src/custom-components/input/custom-input.ts ***!
  \*****************************************************/
/*! exports provided: CustomInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInput", function() { return CustomInput; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CustomInput = class CustomInput extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super(...arguments);
        this.type = "";
        this.required = false;
        this.label = "";
        this.value = "";
        this.readOnly = false;
    }
    static get styles() {
        return [
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host{
          position: relative;
          display: block;
          width: 200px;
          height: 50px;
        }

        :host > * {
          display: inline-block;
        }

        input {
          padding: 10px 8px;
          margin-bottom: 30px;
          box-sizing: border-box;
          border: none;
          box-shadow: none;
          outline: none;
          color: var(--custom-input-color, var(--light-primary-color, #999));
        }

        label {
          display:block;
          width: 100%;
          position: absolute;
          top: 10px;
          pointer-events: none;
          left: 0;
          color: var(--custom-input-color, var(--light-primary-color, #999));
          transition: .5s;
        }

        span.underline{
          background: var(--custom-input-color,var(--light-primary-color, red));
          transform: rotateY(0deg);
        }

        span{
          bottom: 10px;
          position: absolute;
          width: 100%;
          height: 2px;
          background: var(--custom-input-focus-color,var(--default-primary-color, red));
          display: block;
          transform: rotateY(90deg);
          transition-property: transform;
          transition-duration: 250ms;
        }

        :host(.valid) span,
        input:focus ~ span{
          transform: rotateY(0);
        }

        :host(.valid) span.underline,
        input:focus ~ span.underline{
          transform: rotateY(90deg);
        }

        :host(.valid) label,
        input:focus ~ label {
          top: -12px;
          color: var(--custom-input-focus-color,var(--default-primary-color));
          font-size: 12px;
          left: 0;
          font-weight: bold;
        }

        input:focus{
          font-weight: 800;
          color: var(--custom-input-focus-color,var(--default-primary-color));
        }

      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <slot name="prefix"></slot>
      <div>
        <input .type="${this.type}" @change="${this._valueChanged}" ?required=${this.required} .value="${this.value}" ?readOnly=${this.readOnly}>
        <label>${this.label}</label>
        <span class="underline"></span>
        <span></span>
      </div>
      <slot name="suffix"></slot>
    `;
    }
    _valueChanged(e) {
        if ((this.value = e.target.value) != "") {
            this.classList.add("valid");
        }
        else {
            this.classList.remove("valid");
        }
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], CustomInput.prototype, "type", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], CustomInput.prototype, "required", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], CustomInput.prototype, "label", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], CustomInput.prototype, "value", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], CustomInput.prototype, "readOnly", void 0);
CustomInput = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('custom-input')
], CustomInput);



/***/ }),

/***/ "./src/data/tmp-data.ts":
/*!******************************!*\
  !*** ./src/data/tmp-data.ts ***!
  \******************************/
/*! exports provided: vehicle_data, carousel_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicle_data", function() { return vehicle_data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carousel_data", function() { return carousel_data; });
const vehicle_data = [
    {
        "url": "../../imgs/m1.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 1",
        "auction_id": "849489456129"
    },
    {
        "url": "../../imgs/m2.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 2",
        "auction_id": "849489456128"
    },
    {
        "url": "../../imgs/m3.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 3",
        "auction_id": "849489456127"
    },
    {
        "url": "../../imgs/m4.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 4",
        "auction_id": "849489456126"
    },
    {
        "url": "../../imgs/m5.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 5",
        "auction_id": "849489456125"
    },
    {
        "url": "../../imgs/m6.jpeg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "name": "vehicle 6",
        "auction_id": "849489456124"
    }
];
const carousel_data = [
    {
        url: "../../imgs/bg1.jpeg",
        title: "IMG 1",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        url: "../../imgs/bg2.jpeg",
        title: "IMG 2",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        url: "../../imgs/bg3.jpeg",
        title: "IMG 3",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        url: "../../imgs/bg4.jpeg",
        title: "IMG 4",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];


/***/ }),

/***/ "./src/pages/auction-view.ts":
/*!***********************************!*\
  !*** ./src/pages/auction-view.ts ***!
  \***********************************/
/*! exports provided: AuctionView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionView", function() { return AuctionView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
/* harmony import */ var _custom_components_cards_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-components/cards/carousel-component */ "./src/custom-components/cards/carousel-component.ts");
/* harmony import */ var _data_tmp_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/tmp-data */ "./src/data/tmp-data.ts");
/* harmony import */ var _requests_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../requests/socket */ "./src/requests/socket.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { fetchQuery, serviceCredentials } from '../requests/request';

let AuctionView = class AuctionView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super();
        this.data = {
            "url": "../../imgs/m2.jpeg",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "name": "vehicle 2",
            "auction_id": "849489456128",
            "base_price": 5000,
            "owner": null,
            "init": Date.now() + 5 * 60000,
            "exp": 60000 * 1
        };
        this.fotos = _data_tmp_data__WEBPACK_IMPORTED_MODULE_5__["carousel_data"];
        this.username = {};
        this.available = false;
        this.price = 0;
        this.winner = "";
        //TODO: fetch data
        //fetchQuery(serviceCredentials[0].url,'GET');
        //from data we set price
        Object(_requests_socket__WEBPACK_IMPORTED_MODULE_6__["subscribeToTimer"])((err, timestamp) => {
            if (err)
                console.log(err);
            console.log(err, timestamp);
            this.requestUpdate();
        });
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyles"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host {
          padding: 25px;
          box-sizing: border-box;
        }

        .form{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          width: 95%;
          margin: auto;
          background: var(--divider-color);
          grid-gap: 1px;
          margin-top:10px;
        }

        .form > * {
          background: white;
        }

        .full-line {
          grid-column: 1 / 3;
        }

        h1 {
          width: min-content;
          text-align: center;
        }

        label{
          text-align: center;
          width: 100%;
          display: block;
          font-size: 36px;
          font-weight: lighter;
          color: var(--default-primary-color)
        }

        custom-counter{
          font-size: 36px;
          margin: auto;
        }

        ripple-container{
          display: inline-block;
          height: 60px;
        }

        .buttons{
          margin: auto;
          width: 25%;
        }

        button {
          height: 50px;
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <carousel-component .items=${this.fotos}></carousel-component>
      <div class="form">
        <div>
          <h1 class="headline-1">Subasta</h1>
          <label class="first-price">${this.data['auction_id']}</label>
        </div>
        <div>
          <h1 class="headline-1" style="position:sticky;">Restante</h1>
          ${this.available ? _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<custom-counter @time-is-up=${this._timeUp} .max="${this._leftTime}"></custom-counter>` : _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<label class="first-price">Not Available</label>`}
        </div>
        <div>
          <h1 class="headline-1">Costo partida</h1>
          <label class="first-price">${this.data['base_price']}</label>
        </div>
        <div>
          <h1 class="headline-1">Última puja</h1>
          <label class="last-price">${this.price}</label>
        </div>
        <div class="full-line">
          <h1 class="headline-1">Pujar</h1>
          <div class="buttons">
            <ripple-container> <button class="button linked-btn"> Media </button> </ripple-container>
            <ripple-container> <button class="button linked-btn"> Full </button></ripple-container>
          </div>
        </div>
      </div>
    `;
    }
    attributeChangedCallback(name, old, value) {
        if (name === 'active') {
            if (value === '') {
                //revisar
                if (this.data.init >= Date.now()) {
                    this.available = true;
                }
                else {
                }
            }
        }
        super.attributeChangedCallback(name, old, value);
    }
    _timeUp() {
        this.available = false;
    }
    _leftTime() {
        return 500;
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "data", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], AuctionView.prototype, "fotos", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "username", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], AuctionView.prototype, "available", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], AuctionView.prototype, "price", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], AuctionView.prototype, "winner", void 0);
AuctionView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('auction-view')
], AuctionView);



/***/ }),

/***/ "./src/pages/page-view.ts":
/*!********************************!*\
  !*** ./src/pages/page-view.ts ***!
  \********************************/
/*! exports provided: PageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return PageView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PageView = class PageView extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super(...arguments);
        this.active = true;
    }
    static get styles() {
        return [
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `

      :host{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      @keyframes fadeIn{
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut{
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      :host([active]){
        animation: forwards fadeIn 500ms;
      }
    `
        ];
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean, reflect: true })
], PageView.prototype, "active", void 0);
PageView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('page-view')
], PageView);



/***/ }),

/***/ "./src/requests/socket.ts":
/*!********************************!*\
  !*** ./src/requests/socket.ts ***!
  \********************************/
/*! exports provided: subscribeToTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToTimer", function() { return subscribeToTimer; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/*import * as io from 'socket.io-client';

const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message'
};

class Socket {
  public user: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: { from: string, content: string }) => void;
  private socket: any;

  constructor(onChange: (isConnected: boolean) => void, onMessage: (message: { from: string, content: string }) => void) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = '';
    this.user = '';
    this.port = '';
  }

  public connect = (user: string, port: string) => {
    this.user = user;
    this.port = port;

    // const host = `http://192.168.0.220:${port}`; // Running from local network
    // this.socket = io.connect(host);
    this.socket = io.connect();

    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);
  };

  public sendMessage = (message: { from: string, content: string, time: string }) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.MESSAGE, message)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  };

  public disconnect = () => this.socket.close();
}

export const socket = new Socket();
*/

const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://localhost:3000');
function subscribeToTimer(cb) {
    socket.on('welcome', (a) => alert(a));
    socket.on('mensaje', (timestamp) => cb(null, timestamp));
    socket.emit('hello', "puto");
}



/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2Fyb3VzZWwtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdG1wLWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2F1Y3Rpb24tdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZS12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0cy9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUY7QUFDVDtBQUNJO0FBVTVFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEscURBQU87SUFBOUM7O1FBS0UsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFHeEIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUdWLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHakIsVUFBSyxHQUFHLEdBQUcsQ0FBQztJQW1LZCxDQUFDO0lBaktDLE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLG1FQUFTO1lBQ1QseUVBQWU7WUFDZixpREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdFSjtTQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsTUFBTTtRQUNkLE9BQU8sa0RBQUk7TUFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0RBQUk7OzttQkFHWCxJQUFJLENBQUMsS0FBSzs7O0tBR3hCLEVBQUMsQ0FBQyxFQUFFOzJEQUNrRCxJQUFJLENBQUMsS0FBSztRQUUvRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMs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QkFBdUIsQ0FBQyxDQUFDO0FBRW5ELFNBQVMsZ0JBQWdCLENBQUMsRUFBTztJQUMvQixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFjLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQzJCOzs7Ozs7Ozs7Ozs7QUM3RDVCLGUiLCJmaWxlIjoiN2YwZDU4MzA5MjkwMDdkODg4NjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTGl0LCBodG1sLCBjc3MsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IGZvcndhcmRBcnJvd0ljb24sIGJhY2t3YXJkQXJyb3dJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMvaWNvbnMnO1xuaW1wb3J0IHsgSWNvblN0eWxlLCBUeXBvZ3JhcGh5U3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvbWFpbi1zaGFyZWQtc3R5bGUnO1xuXG5cbmludGVyZmFjZSBJdGVtIHtcbiAgdXJsOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNhcHRpb246IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2Nhcm91c2VsLWNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICB0cmFuc2l0aW9uSGFuZGxlcjogYW55O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGl0ZW1zOiBBcnJheTxJdGVtPiA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBpbmRleCA9IDE7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgcGhvdG9zOiBhbnkgPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgd2lkdGggPSA3NTA7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIEljb25TdHlsZSxcbiAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgIDpob3N0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBtYXJnaW46YXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLnNsaWRlciB7XG4gICAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuXG4gICAgICAjbmV4dCwgI3ByZXZ7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAjbmV4dHtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAuY2FwdGlvbntcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAzNSUgYXV0byAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXB0aW9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgfVxuXG4gICAgYF07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICR7dGhpcy53aWR0aCAhPSA3NTAgPyBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICB3aWR0aDogJHt0aGlzLndpZHRofXB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHt0aGlzLndpZHRofXB4KTtcIj5cbiAgICAgICR7XG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgP1xuICAgICAgICBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0udXJsfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlclwiIGlkPVwibGNsb25lXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPiR7dGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0uY2FwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA6ICcnXG4gICAgICB9XG4gICAgICAke1xuICAgICAgdGhpcy5pdGVtcy5tYXAoaXQgPT4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogdXJsKCR7aXQudXJsfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPiR7aXQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHA+JHtpdC5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGApXG4gICAgICB9XG4gICAgICAke1xuICAgICAgdGhpcy5pdGVtcy5sZW5ndGggPiAxID9cbiAgICAgICAgaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogdXJsKCR7dGhpcy5pdGVtc1swXS51cmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyXCIgaWQ9XCJmY2xvbmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+JHt0aGlzLml0ZW1zWzBdLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+JHt0aGlzLml0ZW1zWzBdLmNhcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gaWQ9XCJuZXh0XCIgQGNsaWNrPVwiJHt0aGlzLl9jbGlja0hhbmRsZXJ9XCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+JHtiYWNrd2FyZEFycm93SWNvbn08L3NwYW4+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cInByZXZcIiBAY2xpY2s9XCIke3RoaXMuX2NsaWNrSGFuZGxlcn1cIj48c3BhbiBjbGFzcz1cImljb25cIj4ke2ZvcndhcmRBcnJvd0ljb259PC9zcGFuPjwvYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBwdWJsaWMgZmlyc3RVcGRhdGVkKCkge1xuICAgIC8qIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5fY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgIHRoaXMuJCQkKCdidXR0b24nKSEuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcikpOyovXG4gICAgdGhpcy5waG90b3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLiQkJCgnLnNsaWRlcicpKTtcbiAgICB0aGlzLnRyYW5zaXRpb25IYW5kbGVyID0gdGhpcy5fdHJhbnNpdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLiQkKCcuY29udGFpbmVyJykhLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25IYW5kbGVyKTtcbiAgfVxuXG5cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLiQkKCcuY29udGFpbmVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25IYW5kbGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zaXRpb25IYW5kbGVyKCkge1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuJCQoJy5jb250YWluZXInKTtcbiAgICBpZiAodGhpcy5waG90b3NbdGhpcy5pbmRleF0uaWQgPT09ICdsY2xvbmUnKSB7XG4gICAgICBjb250YWluZXIhLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5waG90b3MubGVuZ3RoIC0gMjtcbiAgICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoIC0ke3RoaXMud2lkdGggKiB0aGlzLmluZGV4fXB4KWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBob3Rvc1t0aGlzLmluZGV4XS5pZCA9PT0gJ2ZjbG9uZScpIHtcbiAgICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnBob3Rvcy5sZW5ndGggLSB0aGlzLmluZGV4O1xuICAgICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLndpZHRoICogdGhpcy5pbmRleH1weClgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlcihldmVudDogRXZlbnQpIHtcblxuICAgIGlmICh0aGlzLmluZGV4IDw9IDAgfHwgdGhpcy5pbmRleCA+PSB0aGlzLnBob3Rvcy5sZW5ndGggLSAxKSByZXR1cm47XG5cbiAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmlkID09PSAnbmV4dCcpIHtcbiAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleC0tO1xuICAgIH1cbiAgICBsZXQgY29udGFpbmVyID0gdGhpcy4kJCgnLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQnO1xuICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoIC0ke3RoaXMud2lkdGggKiB0aGlzLmluZGV4fXB4KWA7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjYXJvdXNlbC1jb21wb25lbnQnOiBDYXJvdXNlbENvbXBvbmVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdjdXN0b20taW5wdXQnKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUlucHV0IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGUgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICByZXF1aXJlZCA9IGZhbHNlXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGxhYmVsID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLCB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjOTk5KSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvciwgdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgIzk5OSkpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvcix2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCByZWQpKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFue1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWlucHV0LWZvY3VzLWNvbG9yLHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvciwgcmVkKSk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4sXG4gICAgICAgIGlucHV0OmZvY3VzIH4gc3BhbntcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4udW5kZXJsaW5lLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIGxhYmVsLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcbiAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgIH1cblxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IC50eXBlPVwiJHt0aGlzLnR5cGV9XCIgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiID9yZXF1aXJlZD0ke3RoaXMucmVxdWlyZWR9IC52YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIiA/cmVhZE9ubHk9JHt0aGlzLnJlYWRPbmx5fT5cbiAgICAgICAgPGxhYmVsPiR7dGhpcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZTogRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmICgodGhpcy52YWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkudmFsdWUpICE9IFwiXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpXG4gICAgfVxuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnY3VzdG9tLWlucHV0JzogQ3VzdG9tSW5wdXRcbiAgfVxufSIsImV4cG9ydCBjb25zdCB2ZWhpY2xlX2RhdGEgPSBbXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTEuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDFcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjlcIlxuICB9LFxuICB7XG4gICAgXCJ1cmxcIjogXCIuLi8uLi9pbWdzL20yLmpwZWdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSAyXCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI4XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tMy5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgM1wiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyN1wiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTQuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNFwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNlwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTUuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNVwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNVwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTYuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDZcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjRcIlxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBjYXJvdXNlbF9kYXRhID0gW1xuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmcxLmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgMVwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfSxcbiAge1xuICAgIHVybDogXCIuLi8uLi9pbWdzL2JnMi5qcGVnXCIsXG4gICAgdGl0bGU6IFwiSU1HIDJcIixcbiAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiLi4vLi4vaW1ncy9iZzMuanBlZ1wiLFxuICAgIHRpdGxlOiBcIklNRyAzXCIsXG4gICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIlxuICB9LFxuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmc0LmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgNFwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfVxuXSIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUGFnZVZpZXcgfSBmcm9tICcuL3BhZ2Utdmlldyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUsIEJ1dHRvblN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2Nhcm91c2VsLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBjYXJvdXNlbF9kYXRhIGFzIENhcm91c2VsIH0gZnJvbSAnLi4vZGF0YS90bXAtZGF0YSdcbi8vaW1wb3J0IHsgZmV0Y2hRdWVyeSwgc2VydmljZUNyZWRlbnRpYWxzIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb1RpbWVyIH0gZnJvbSAnLi4vcmVxdWVzdHMvc29ja2V0J1xuXG5cbkBjdXN0b21FbGVtZW50KCdhdWN0aW9uLXZpZXcnKVxuZXhwb3J0IGNsYXNzIEF1Y3Rpb25WaWV3IGV4dGVuZHMgUGFnZVZpZXcge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBkYXRhID0ge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tMi5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgMlwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyOFwiLFxuICAgIFwiYmFzZV9wcmljZVwiOiA1MDAwLFxuICAgIFwib3duZXJcIjogbnVsbCxcbiAgICBcImluaXRcIjogRGF0ZS5ub3coKSArIDUgKiA2MDAwMCxcbiAgICBcImV4cFwiOiA2MDAwMCAqIDFcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIGZvdG9zID0gQ2Fyb3VzZWxcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgdXNlcm5hbWU6IGFueSA9IHt9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBhdmFpbGFibGUgPSBmYWxzZVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBwcmljZSA9IDA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHdpbm5lciA9IFwiXCJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy9UT0RPOiBmZXRjaCBkYXRhXG4gICAgLy9mZXRjaFF1ZXJ5KHNlcnZpY2VDcmVkZW50aWFsc1swXS51cmwsJ0dFVCcpO1xuICAgIC8vZnJvbSBkYXRhIHdlIHNldCBwcmljZVxuICAgIHN1YnNjcmliZVRvVGltZXIoKGVycjogYW55LCB0aW1lc3RhbXA6IGFueSkgPT4ge1xuICAgICAgaWYgKGVycilcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgY29uc29sZS5sb2coZXJyLCB0aW1lc3RhbXApO1xuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5zdHlsZXMsXG4gICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICBCdXR0b25TdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICBncmlkLWdhcDogMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtID4gKiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC1saW5lIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbS1jb3VudGVye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICByaXBwbGUtY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uc3tcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxjYXJvdXNlbC1jb21wb25lbnQgLml0ZW1zPSR7dGhpcy5mb3Rvc30+PC9jYXJvdXNlbC1jb21wb25lbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj5TdWJhc3RhPC9oMT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmaXJzdC1wcmljZVwiPiR7dGhpcy5kYXRhWydhdWN0aW9uX2lkJ119PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGxpbmUtMVwiIHN0eWxlPVwicG9zaXRpb246c3RpY2t5O1wiPlJlc3RhbnRlPC9oMT5cbiAgICAgICAgICAke3RoaXMuYXZhaWxhYmxlID8gaHRtbGA8Y3VzdG9tLWNvdW50ZXIgQHRpbWUtaXMtdXA9JHt0aGlzLl90aW1lVXB9IC5tYXg9XCIke3RoaXMuX2xlZnRUaW1lfVwiPjwvY3VzdG9tLWNvdW50ZXI+YCA6IGh0bWxgPGxhYmVsIGNsYXNzPVwiZmlyc3QtcHJpY2VcIj5Ob3QgQXZhaWxhYmxlPC9sYWJlbD5gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+Q29zdG8gcGFydGlkYTwvaDE+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmlyc3QtcHJpY2VcIj4ke3RoaXMuZGF0YVsnYmFzZV9wcmljZSddfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj7Dmmx0aW1hIHB1amE8L2gxPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhc3QtcHJpY2VcIj4ke3RoaXMucHJpY2V9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLWxpbmVcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+UHVqYXI8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lcj4gPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+IE1lZGlhIDwvYnV0dG9uPiA8L3JpcHBsZS1jb250YWluZXI+XG4gICAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lcj4gPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+IEZ1bGwgPC9idXR0b24+PC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkOiBzdHJpbmcgfCBudWxsLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuXG4gICAgaWYgKG5hbWUgPT09ICdhY3RpdmUnKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIC8vcmV2aXNhclxuICAgICAgICBpZiAodGhpcy5kYXRhLmluaXQgPj0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgIHRoaXMuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUpXG4gIH1cblxuICBwcml2YXRlIF90aW1lVXAoKSB7XG4gICAgdGhpcy5hdmFpbGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2xlZnRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDUwMDtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2F1Y3Rpb24tdmlldyc6IEF1Y3Rpb25WaWV3O1xuICB9XG59XG5cbiIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgncGFnZS12aWV3JylcbmV4cG9ydCBjbGFzcyBQYWdlVmlldyBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG5cbiAgICAgIDpob3N0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZU91dHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXSl7XG4gICAgICAgIGFuaW1hdGlvbjogZm9yd2FyZHMgZmFkZUluIDUwMG1zO1xuICAgICAgfVxuICAgIGBdO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBhY3RpdmUgPSB0cnVlO1xuXG5cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG5cbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ3BhZ2Utdmlldyc6IFBhZ2VWaWV3O1xuICB9XG5cbn1cblxuIiwiLyppbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3QgRVZFTlRTID0ge1xuICBDT05ORUNUOiAnY29ubmVjdCcsXG4gIERJU0NPTk5FQ1Q6ICdkaXNjb25uZWN0JyxcbiAgTUVTU0FHRTogJ21lc3NhZ2UnXG59O1xuXG5jbGFzcyBTb2NrZXQge1xuICBwdWJsaWMgdXNlcjogc3RyaW5nO1xuICBwdWJsaWMgcG9ydDogc3RyaW5nO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoaXNDb25uZWN0ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHByaXZhdGUgb25NZXNzYWdlOiAobWVzc2FnZTogeyBmcm9tOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB9KSA9PiB2b2lkO1xuICBwcml2YXRlIHNvY2tldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKG9uQ2hhbmdlOiAoaXNDb25uZWN0ZWQ6IGJvb2xlYW4pID0+IHZvaWQsIG9uTWVzc2FnZTogKG1lc3NhZ2U6IHsgZnJvbTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcgfSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB0aGlzLm9uTWVzc2FnZSA9IG9uTWVzc2FnZTtcbiAgICB0aGlzLnNvY2tldCA9ICcnO1xuICAgIHRoaXMudXNlciA9ICcnO1xuICAgIHRoaXMucG9ydCA9ICcnO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3QgPSAodXNlcjogc3RyaW5nLCBwb3J0OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgIHRoaXMucG9ydCA9IHBvcnQ7XG5cbiAgICAvLyBjb25zdCBob3N0ID0gYGh0dHA6Ly8xOTIuMTY4LjAuMjIwOiR7cG9ydH1gOyAvLyBSdW5uaW5nIGZyb20gbG9jYWwgbmV0d29ya1xuICAgIC8vIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdChob3N0KTtcbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcblxuICAgIHRoaXMuc29ja2V0Lm9uKEVWRU5UUy5DT05ORUNULCB0aGlzLm9uQ29ubmVjdGVkKTtcbiAgfTtcblxuICBwdWJsaWMgb25Db25uZWN0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zb2NrZXQub24oRVZFTlRTLk1FU1NBR0UsIHRoaXMub25NZXNzYWdlKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRydWUpO1xuICB9O1xuXG4gIHB1YmxpYyBzZW5kTWVzc2FnZSA9IChtZXNzYWdlOiB7IGZyb206IHN0cmluZywgY29udGVudDogc3RyaW5nLCB0aW1lOiBzdHJpbmcgfSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5zb2NrZXQuZW1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zb2NrZXQuZW1pdChFVkVOVFMuTUVTU0FHRSwgbWVzc2FnZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGVtaXQgc29ja2V0IG1lc3NhZ2VzLiBTb2NrZXQuaW8gbm90IGNvbm5lY3RlZC4nKTtcbiAgICB9XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB0aGlzLnNvY2tldC5jbG9zZSgpO1xufVxuXG5leHBvcnQgY29uc3Qgc29ja2V0ID0gbmV3IFNvY2tldCgpO1xuKi9cbmltcG9ydCBvcGVuU29ja2V0IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBzb2NrZXQgPSBvcGVuU29ja2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAnKTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlVG9UaW1lcihjYjogYW55KSB7XG4gIHNvY2tldC5vbignd2VsY29tZScsIChhOiBhbnkpID0+IGFsZXJ0KGEpKTtcbiAgc29ja2V0Lm9uKCdtZW5zYWplJywgKHRpbWVzdGFtcDogYW55KSA9PiBjYihudWxsLCB0aW1lc3RhbXApKTtcbiAgc29ja2V0LmVtaXQoJ2hlbGxvJywgXCJwdXRvXCIpO1xufVxuZXhwb3J0IHsgc3Vic2NyaWJlVG9UaW1lciB9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=