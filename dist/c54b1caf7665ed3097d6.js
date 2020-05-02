(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/container/ripple-container.ts":
/*!*******************************************!*\
  !*** ./src/container/ripple-container.ts ***!
  \*******************************************/
/*! exports provided: RippleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleEffect", function() { return RippleEffect; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RippleEffect = class RippleEffect extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super();
        this.posX = 0;
        this.posY = 0;
    }
    firstUpdated() {
        this.addEventListener('mousedown', this._clickHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mousedown', this._clickHandler);
    }
    static get styles() {
        return [
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<slot></slot>`;
    }
    _clickHandler(e) {
        let target_el = e.target;
        let ink_el = target_el.querySelector('.ink') || this.$$('.ink');
        if (ink_el) {
            ink_el.classList.remove('animate');
        }
        else {
            ink_el = document.createElement('span');
            ink_el.classList.add('ink');
            ink_el.style.width = ink_el.style.height = Math.max(target_el.offsetWidth, target_el.offsetHeight) + 'px';
            this.shadowRoot.appendChild(ink_el);
        }
        ink_el.style.left = (e.offsetX - ink_el.offsetWidth / 2) + 'px';
        ink_el.style.top = (e.offsetY - ink_el.offsetHeight / 2) + 'px';
        ink_el.classList.add('animate');
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], RippleEffect.prototype, "posX", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], RippleEffect.prototype, "posY", void 0);
RippleEffect = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ripple-container')
], RippleEffect);



/***/ }),

/***/ "./src/custom-components/cards/card-component.ts":
/*!*******************************************************!*\
  !*** ./src/custom-components/cards/card-component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CardComponent = class CardComponent extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super(...arguments);
        this.shadowBox = false;
        this.width = 275;
        this.height = 300;
        this.props = {};
        this.forwards = true;
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        ${this.width != 275 || this.height != 300 ? _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
          <style>
                  .face {
                    width: ${this.width}px;
                    height: ${this.height - 25}px;
                  }

                  :host{
                    height: ${this.height}px;
                  }

                  :host(.expanded){
                    padding: initial;
                    height: ${2 * this.height}px;
                  }
          </style>
        ` : ''}
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
        </div>`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.props['_transitionHandler'] = this._transitionHandler.bind(this);
        this.addEventListener('mouseenter', this.props._transitionHandler);
        this.addEventListener('mouseleave', this.props._transitionHandler);
        //this.fire('app-reset-layout');
    }
    _transitionHandler(e) {
        if (e.type === "mouseenter" && !this.classList.contains('expanded')) {
            this.classList.toggle('expanded');
        }
        else if (e.type === "mouseleave" && this.classList.contains('expanded')) {
            this.classList.toggle('expanded');
        }
    }
};
CardComponent.styles = [
    _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
      :host(.expanded){
        padding: initial;
      }

      :host {
        border-radius: 10px;
        position: relative;
        display: block;
        padding: 12.5px 0;
        -webkit-transition: height 1s ease;
        -moz-transition: height 1s ease;
        -o-transition: height 1s ease;
        transition: height 1s ease;
      }

      .face {
        transition: 0.5s;
        border-radius: 10px;
      }

      .face1 {
        border-radius: 10px;
        position: relative;
        background: var(--card-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        transform: translateY(0%);
      }

      .face2 {
        border-radius: 10px;
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
];
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], CardComponent.prototype, "shadowBox", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CardComponent.prototype, "width", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CardComponent.prototype, "height", void 0);
CardComponent = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('card-component')
], CardComponent);



/***/ }),

/***/ "./src/custom-components/clock/custom-counter.ts":
/*!*******************************************************!*\
  !*** ./src/custom-components/clock/custom-counter.ts ***!
  \*******************************************************/
/*! exports provided: CustomCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCounter", function() { return CustomCounter; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base-element */ "./src/base-element.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CustomCounter = class CustomCounter extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseLit"] {
    constructor() {
        super(...arguments);
        this.totalSeconds = 0;
        this.max = 60;
        this.forwards = false;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }
    static get styles() {
        return [
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_1__["TypographyStyle"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
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
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <label>${(this.hours + "").padStart(2, "0")}:${(this.minutes + "").padStart(2, "0")}:${(this.seconds + "").padStart(2, "0")} </label>
    `;
    }
    firstUpdated() {
        setTimeout(this._setTime.bind(this), 1000);
    }
    _setTime() {
        this.totalSeconds = this.totalSeconds + 1;
        if (this.forwards) {
            this.seconds = this.totalSeconds % 60;
            this.minutes = Math.floor(this.totalSeconds / 60);
            this.hours = Math.floor(this.totalSeconds / 3600);
        }
        else {
            this.seconds = (this.max - this.totalSeconds) % 60;
            this.minutes = Math.floor((this.max - this.totalSeconds) / 60);
            this.hours = Math.floor((this.max - this.totalSeconds) / 3600);
        }
        if (this.forwards) {
            if (this.minutes == 0 && this.hours == 0 && this.seconds < 30)
                this.classList.add('tick');
            else
                this.classList.remove('tick');
        }
        else {
            if (this.max - this.totalSeconds <= 30)
                this.classList.add('tick');
            else
                this.classList.remove('tick');
        }
        if (this.totalSeconds < this.max)
            setTimeout(this._setTime.bind(this), 1000);
        else
            this.fire('time-is-up');
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CustomCounter.prototype, "max", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], CustomCounter.prototype, "forwards", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CustomCounter.prototype, "hours", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CustomCounter.prototype, "minutes", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], CustomCounter.prototype, "seconds", void 0);
CustomCounter = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('custom-counter')
], CustomCounter);



/***/ }),

/***/ "./src/pages/home-view.ts":
/*!********************************!*\
  !*** ./src/pages/home-view.ts ***!
  \********************************/
/*! exports provided: HomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeView", function() { return HomeView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_cards_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/cards/card-component */ "./src/custom-components/cards/card-component.ts");
/* harmony import */ var _container_ripple_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/ripple-container */ "./src/container/ripple-container.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
/* harmony import */ var _custom_components_cards_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-components/cards/carousel-component */ "./src/custom-components/cards/carousel-component.ts");
/* harmony import */ var _custom_components_clock_custom_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-components/clock/custom-counter */ "./src/custom-components/clock/custom-counter.ts");
/* harmony import */ var _requests_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../requests/request */ "./src/requests/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { vehicle_data as Vehicles } from '../data/tmp-data'

let HomeView = class HomeView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super(...arguments);
        this.data = [];
        this.fotos = {};
        this.photobank = [];
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyles"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host > div {
          box-sizing: border-box;
        }

        .card {
	  margin:10px;
          width: 500px;
          box-sizing: border-box;
          box-shadow: var(--shadow-elevation-2dp);
          padding: 10px;
          border-radius: 10px;
        }

        .card:hover {
          box-shadow: var(--shadow-elevation-8dp);
	  transform: translateY(5px);
        }

        .container{
          display: grid;
          grid-template-columns: repeat(2,1fr);
        }

        .container > div{
          padding: 2px 8px;
        }

        .container > div:nth-child(even){
          background: var(--default-primary-color);
          color: white;
        }

        .container > div:nth-child(odd){
          background: var(--light-primary-color);
          color: var(--dark-primary-color);
        }

        .flex-cont{
          display:flex;
          justify-content: space-around;
          flex-wrap: wrap;
          padding: 10px;
        }

        ripple-container {
          margin-left: 50%;
          transform: translateX(-50%);
          padding: 2px;
        }

        .linked-btn{
          padding: 16px;
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="flex-cont">
        ${this.data.map((el, inx) => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
          <div class="card">
            <img src=${this.fotos[el.id] && this.fotos[el.id][0]} slot="img" style="max-width: 100%; max-height: 300px; width:100%; height: 300px;">
            <h5 class="headline-5">${el.numero_chasis}</h5>
            <div class="container">
                ${Object.keys(el).map((key) => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<div>${key}</div><div>${el[key]}</div>`)}
            </div>
            <ripple-container slot="container">
              <a href="/subasta" class="linked-btn button" index="${inx}" @click="${this._saveVehicle}">Ir a puja</a>
            </ripple-container>
          </div>
        `)}
      </div>
    `;
    }
    _saveVehicle(e) {
        let idx = Number(e.target.getAttribute('index'));
        this.fire('vehicle-selected', Object.assign(Object.assign({}, this.data[idx]), { fotos: this.fotos[this.data[idx].id] }));
    }
    async attributeChangedCallback(name, old, value) {
        if (name === 'active') {
            if (value === '' && old !== null) {
                //we retrieve token first
                let data = await this.getToken();
                //we retrieve the vehicles data
                let vehicles = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"])(`${this.esburl}/Vehiculo?jwt=${data.token}&subastable=true`, 'GET', undefined);
                let fotos = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"])(`${this.esburl}/Foto?jwt=${data.token}`, 'GET', undefined);
                this.data = vehicles.response;
                console.log(this.data);
                this.photobank = fotos.response;
                this.fotos = this.parseFotos(this.photobank);
                console.log(this.fotos);
            }
        }
        super.attributeChangedCallback(name, old, value);
    }
    parseFotos(tfotos) {
        let tData = {};
        tfotos.forEach(el => {
            if (tData[el.id_vehiculo] === undefined) {
                tData[el.id_vehiculo] = [el.url];
            }
            else {
                tData[el.id_vehiculo].push(el.url);
            }
        });
        return tData;
    }
    async getToken() {
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_8__["fetchQuery"])(this.tokenurl, 'POST', this.credentials);
        console.log(token);
        return token;
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], HomeView.prototype, "data", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], HomeView.prototype, "fotos", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], HomeView.prototype, "photobank", void 0);
HomeView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('home-view')
], HomeView);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3JpcHBsZS1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9jbG9jay9jdXN0b20tY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFJOUUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBYSxTQUFRLHFEQUFPO0lBT3ZDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFMVixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVQsU0FBSSxHQUFHLENBQUMsQ0FBQztJQUlULENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN4RCxDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzRCxDQUFDO0lBRUQsTUFBTSxLQUFLLE1BQU07UUFDZixPQUFPO1lBQ0wsaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFrQ0Q7U0FDSDtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxrREFBSSxnQkFBZTtJQUM1QixDQUFDO0lBRU8sYUFBYSxDQUFDLENBQWE7UUFDakMsSUFBSSxTQUFTLEdBQXVCLENBQUMsQ0FBQyxNQUFxQixDQUFDO1FBQzVELElBQUksTUFBTSxHQUFxQyxTQUFVLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFF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LENBQUMsV0FBVyxDQUFDO0dBQ2QsUUFBUSxDQXVKcEI7QUF2Sm9CIiwiZmlsZSI6ImM1NGIxY2FmNzY2NWVkMzA5N2Q2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcywgaHRtbCB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ3JpcHBsZS1jb250YWluZXInKVxuZXhwb3J0IGNsYXNzIFJpcHBsZUVmZmVjdCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBwb3NYID0gMDtcbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHBvc1kgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fY2xpY2tIYW5kbGVyKVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9jbGlja0hhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgOmhvc3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6OnNsb3R0ZWQoKil7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICB6LWluZGV4OjUwO1xuICAgICAgfVxuXG4gICAgICAuaW5rIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgICAgIH1cblxuICAgICAgLmFuaW1hdGUge1xuICAgICAgICBhbmltYXRpb246cmlwcGxlIDAuNjVzIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyByaXBwbGUge1xuICAgICAgICAgIDEwMCUge29wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMi41KTt9XG4gICAgICB9YCxcbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmBcbiAgfVxuXG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlcihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IHRhcmdldF9lbDogSFRNTEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IGlua19lbDogSFRNTEVsZW1lbnQgfCBudWxsID0gKDxIVE1MRWxlbWVudD50YXJnZXRfZWwpLnF1ZXJ5U2VsZWN0b3IoJy5pbmsnKSB8fCB0aGlzLiQkKCcuaW5rJyk7XG5cbiAgICBpZiAoaW5rX2VsKSB7XG4gICAgICBpbmtfZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlua19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGlua19lbC5jbGFzc0xpc3QuYWRkKCdpbmsnKTtcbiAgICAgIGlua19lbC5zdHlsZS53aWR0aCA9IGlua19lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXRfZWwub2Zmc2V0V2lkdGgsIHRhcmdldF9lbC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcbiAgICAgIHRoaXMuc2hhZG93Um9vdCEuYXBwZW5kQ2hpbGQoaW5rX2VsKTtcbiAgICB9XG5cbiAgICBpbmtfZWwuc3R5bGUubGVmdCA9IChlLm9mZnNldFggLSBpbmtfZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XG4gICAgaW5rX2VsLnN0eWxlLnRvcCA9IChlLm9mZnNldFkgLSBpbmtfZWwub2Zmc2V0SGVpZ2h0IC8gMikgKyAncHgnO1xuICAgIGlua19lbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdyaXBwbGUtY29udGFpbmVyJzogUmlwcGxlRWZmZWN0O1xuICB9XG59IiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcywgaHRtbCB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2NhcmQtY29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzaGFkb3dCb3ggPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgd2lkdGggPSAyNzU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGhlaWdodCA9IDMwMDtcblxuICBzdGF0aWMgc3R5bGVzID0gW1xuICAgIGNzc2BcbiAgICAgIDpob3N0KC5leHBhbmRlZCl7XG4gICAgICAgIHBhZGRpbmc6IGluaXRpYWw7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTIuNXB4IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmZhY2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZmFjZTEge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAgIH1cblxuICAgICAgLmZhY2UyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLTRkcCwgbm9uZSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICB9XG5cblxuICAgICAgc2xvdFtuYW1lPVwiaW1nXCJdOjpzbG90dGVkKCope1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDI1MG1zIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSAuY29udGVudHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTIge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLThkcCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcikgc2xvdFtuYW1lPVwiaW1nXCJdOjpzbG90dGVkKCopLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTEsXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMSAuY29udGVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTIgLmNvbnRlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguZXhwYW5kZWQpIC5mYWNlMSxcbiAgICAgIDpob3N0KC5leHBhbmRlZCkgLmZhY2Uye1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG5cbiAgICBgXG4gIF1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7dGhpcy53aWR0aCAhPSAyNzUgfHwgdGhpcy5oZWlnaHQgIT0gMzAwID8gaHRtbGBcbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAuZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMud2lkdGh9cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLmhlaWdodCAtIDI1fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA6aG9zdHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3RoaXMuaGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA6aG9zdCguZXhwYW5kZWQpe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7MiAqIHRoaXMuaGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIGA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZSBmYWNlMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiaW1nXCI+PC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY2UgZmFjZTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRhaW5lclwiPjwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICA8L2Rpdj5gXG4gIH1cblxuICBwcm9wczogYW55ID0ge31cbiAgZm9yd2FyZHM6IEJvb2xlYW4gPSB0cnVlXG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnByb3BzWydfdHJhbnNpdGlvbkhhbmRsZXInXSA9IHRoaXMuX3RyYW5zaXRpb25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5wcm9wcy5fdHJhbnNpdGlvbkhhbmRsZXIpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMucHJvcHMuX3RyYW5zaXRpb25IYW5kbGVyKTtcbiAgICAvL3RoaXMuZmlyZSgnYXBwLXJlc2V0LWxheW91dCcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF90cmFuc2l0aW9uSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWVudGVyXCIgJiYgIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibW91c2VsZWF2ZVwiICYmIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2NhcmQtY29tcG9uZW50JzogQ2FyZENvbXBvbmVudDtcbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcblxuQGN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1jb3VudGVyJylcbmV4cG9ydCBjbGFzcyBDdXN0b21Db3VudGVyIGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgdG90YWxTZWNvbmRzOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBtYXggPSA2MFxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgZm9yd2FyZHMgPSBmYWxzZVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBob3VycyA9IDA7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIG1pbnV0ZXMgPSAwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBzZWNvbmRzID0gMDtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgPiAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudGljaykgbGFiZWwge1xuICAgICAgICAgIGFuaW1hdGlvbjogdGljayAycyBpbmZpbml0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgdGljayB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IscmVkKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bGFiZWw+JHsodGhpcy5ob3VycyArIFwiXCIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHsodGhpcy5taW51dGVzICsgXCJcIikucGFkU3RhcnQoMiwgXCIwXCIpfTokeyh0aGlzLnNlY29uZHMgKyBcIlwiKS5wYWRTdGFydCgyLCBcIjBcIil9IDwvbGFiZWw+XG4gICAgYDtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzZXRUaW1lb3V0KHRoaXMuX3NldFRpbWUuYmluZCh0aGlzKSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRUaW1lKCk6IHZvaWQge1xuICAgIHRoaXMudG90YWxTZWNvbmRzID0gdGhpcy50b3RhbFNlY29uZHMgKyAxO1xuICAgIGlmICh0aGlzLmZvcndhcmRzKSB7XG4gICAgICB0aGlzLnNlY29uZHMgPSB0aGlzLnRvdGFsU2Vjb25kcyAlIDYwO1xuICAgICAgdGhpcy5taW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsU2Vjb25kcyAvIDYwKTtcbiAgICAgIHRoaXMuaG91cnMgPSBNYXRoLmZsb29yKHRoaXMudG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Vjb25kcyA9ICh0aGlzLm1heCAtIHRoaXMudG90YWxTZWNvbmRzKSAlIDYwO1xuICAgICAgdGhpcy5taW51dGVzID0gTWF0aC5mbG9vcigodGhpcy5tYXggLSB0aGlzLnRvdGFsU2Vjb25kcykgLyA2MCk7XG4gICAgICB0aGlzLmhvdXJzID0gTWF0aC5mbG9vcigodGhpcy5tYXggLSB0aGlzLnRvdGFsU2Vjb25kcykgLyAzNjAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9yd2FyZHMpIHtcbiAgICAgIGlmICh0aGlzLm1pbnV0ZXMgPT0gMCAmJiB0aGlzLmhvdXJzID09IDAgJiYgdGhpcy5zZWNvbmRzIDwgMzApXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndGljaycpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgndGljaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1heCAtIHRoaXMudG90YWxTZWNvbmRzIDw9IDMwKVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3RpY2snKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3RpY2snKVxuICAgIH1cbiAgICBpZiAodGhpcy50b3RhbFNlY29uZHMgPCB0aGlzLm1heClcbiAgICAgIHNldFRpbWVvdXQodGhpcy5fc2V0VGltZS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmZpcmUoJ3RpbWUtaXMtdXAnKTtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2N1c3RvbS1jb3VudGVyJzogQ3VzdG9tQ291bnRlclxuICB9XG59IiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBQYWdlVmlldyB9IGZyb20gJy4vcGFnZS12aWV3JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2FyZC1jb21wb25lbnQnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvcmlwcGxlLWNvbnRhaW5lcic7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2Nhcm91c2VsLWNvbXBvbmVudCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2Nsb2NrL2N1c3RvbS1jb3VudGVyJztcbi8vaW1wb3J0IHsgdmVoaWNsZV9kYXRhIGFzIFZlaGljbGVzIH0gZnJvbSAnLi4vZGF0YS90bXAtZGF0YSdcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcblxuXG5pbnRlcmZhY2UgQ2FyIHtcbiAgYXJyYW5jYTogbnVtYmVyO1xuICBjYW1pbmE6IG51bWJlcjtcbiAgY29saXNpb246IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgZXN0YWRvOiBudW1iZXI7XG4gIGZhbGxhX21lY2FuaWNhOiBudW1iZXI7XG4gIGdhcmFudGlhX2luc3BlY2Npb246IG51bWJlcjtcbiAgaWQ6IG51bWJlcjtcbiAgaW51bmRhZG86IG51bWJlcjtcbiAgbGluZWE6IHN0cmluZztcbiAgbWFyY2E6IHN0cmluZztcbiAgbWluaW1vX3JlcXVlcmlkbzogbnVtYmVyO1xuICBtb2RlbG86IHN0cmluZztcbiAgbnVtZXJvX2NoYXNpczogc3RyaW5nO1xuICBudW1lcm9fbW90b3I6IHN0cmluZztcbiAgb2JzZXJ2YWNpb246IHN0cmluZztcbiAgcGxhY2E6IHN0cmluZztcbiAgcHJlY2lvX2Jhc2U6IG51bWJlcjtcbiAgdGlwbzogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnaG9tZS12aWV3JylcbmV4cG9ydCBjbGFzcyBIb21lVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBkYXRhOiBBcnJheTxDYXI+ID0gW11cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgZm90b3M6IGFueSA9IHt9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgcGhvdG9iYW5rOiBBcnJheTxhbnk+ID0gW11cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuc3R5bGVzLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgQnV0dG9uU3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCA+IGRpdiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcblx0ICBtYXJnaW46MTBweDtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLTJkcCk7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tOGRwKTtcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyID4gZGl2e1xuICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyID4gZGl2Om50aC1jaGlsZChldmVuKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKG9kZCl7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleC1jb250e1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJpcHBsZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rZWQtYnRue1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29udFwiPlxuICAgICAgICAke3RoaXMuZGF0YS5tYXAoKGVsLCBpbngpID0+IGh0bWxgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7dGhpcy5mb3Rvc1tlbC5pZF0gJiYgdGhpcy5mb3Rvc1tlbC5pZF1bMF19IHNsb3Q9XCJpbWdcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgbWF4LWhlaWdodDogMzAwcHg7IHdpZHRoOjEwMCU7IGhlaWdodDogMzAwcHg7XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJoZWFkbGluZS01XCI+JHtlbC5udW1lcm9fY2hhc2lzfTwvaDU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgJHtPYmplY3Qua2V5cyhlbCkubWFwKChrZXkpID0+IGh0bWxgPGRpdj4ke2tleX08L2Rpdj48ZGl2PiR7ZWxba2V5XX08L2Rpdj5gKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHJpcHBsZS1jb250YWluZXIgc2xvdD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3N1YmFzdGFcIiBjbGFzcz1cImxpbmtlZC1idG4gYnV0dG9uXCIgaW5kZXg9XCIke2lueH1cIiBAY2xpY2s9XCIke3RoaXMuX3NhdmVWZWhpY2xlfVwiPklyIGEgcHVqYTwvYT5cbiAgICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2F2ZVZlaGljbGUoZTogRXZlbnQpIHtcbiAgICBsZXQgaWR4ID0gTnVtYmVyKCg8SFRNTEVsZW1lbnQ+ZS50YXJnZXQpIS5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpO1xuICAgIHRoaXMuZmlyZSgndmVoaWNsZS1zZWxlY3RlZCcsIHsgLi4udGhpcy5kYXRhW2lkeF0sIGZvdG9zOiB0aGlzLmZvdG9zW3RoaXMuZGF0YVtpZHhdLmlkXSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCBvbGQ6IHN0cmluZyB8IG51bGwsIHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG5cbiAgICBpZiAobmFtZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgJiYgb2xkICE9PSBudWxsKSB7XG4gICAgICAgIC8vd2UgcmV0cmlldmUgdG9rZW4gZmlyc3RcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgLy93ZSByZXRyaWV2ZSB0aGUgdmVoaWNsZXMgZGF0YVxuICAgICAgICBsZXQgdmVoaWNsZXM6IGFueSA9IGF3YWl0IGZldGNoUXVlcnkoXG4gICAgICAgICAgYCR7dGhpcy5lc2J1cmx9L1ZlaGljdWxvP2p3dD0ke2RhdGEudG9rZW59JnN1YmFzdGFibGU9dHJ1ZWAsXG4gICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGZvdG9zOiBhbnkgPSBhd2FpdCBmZXRjaFF1ZXJ5KFxuICAgICAgICAgIGAke3RoaXMuZXNidXJsfS9Gb3RvP2p3dD0ke2RhdGEudG9rZW59YCxcbiAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuZGF0YSA9IHZlaGljbGVzLnJlc3BvbnNlIGFzIEFycmF5PENhcj47XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSlcbiAgICAgICAgdGhpcy5waG90b2JhbmsgPSBmb3Rvcy5yZXNwb25zZTtcbiAgICAgICAgdGhpcy5mb3RvcyA9IHRoaXMucGFyc2VGb3Rvcyh0aGlzLnBob3RvYmFuayk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3Rvcyk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlKVxuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZUZvdG9zKHRmb3RvczogQXJyYXk8YW55Pikge1xuICAgIGxldCB0RGF0YTogYW55ID0ge307XG5cbiAgICB0Zm90b3MuZm9yRWFjaChlbCA9PiB7XG5cbiAgICAgIGlmICh0RGF0YVtlbC5pZF92ZWhpY3Vsb10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0RGF0YVtlbC5pZF92ZWhpY3Vsb10gPSBbZWwudXJsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHREYXRhW2VsLmlkX3ZlaGljdWxvXS5wdXNoKGVsLnVybCk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB0RGF0YTtcblxuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFRva2VuKCkge1xuICAgIGxldCB0b2tlbiA9IGF3YWl0IGZldGNoUXVlcnkodGhpcy50b2tlbnVybCwgJ1BPU1QnLCB0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==