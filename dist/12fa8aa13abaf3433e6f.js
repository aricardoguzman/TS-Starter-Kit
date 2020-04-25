(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
        z-index:0;
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
/* harmony import */ var _data_tmp_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/tmp-data */ "./src/data/tmp-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let HomeView = class HomeView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super(...arguments);
        this.data = _data_tmp_data__WEBPACK_IMPORTED_MODULE_8__["vehicle_data"];
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyles"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        card-component{
          --card-bg : linear-gradient(45deg, var(--default-primary-color), var(--gradient-color))
        }

        ripple-container {
          margin-left: 40%;
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div style=" display:flex; justify-content: space-around; flex-wrap: wrap; padding-top: 10px;">
        ${this.data.map((el, inx) => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
          <card-component .height="${250}">
            <img src=${el.url} slot="img" style="max-width: 100%; max-height: 100%; width: 100%; height: 100%;">
            <h5 class="headline-5" slot="container">${el.name}</h5>
            <p slot="container" class="caption">
              ${el.description}
            </p>
            <ripple-container slot="container">
              <a href="/subasta" class="linked-btn button" index="${inx}" @click="${this._saveVehicle}">Ir a puja</a>
            </ripple-container>
          </card-component>
        `)}
      </div>
    `;
    }
    _saveVehicle(e) {
        let idx = Number(e.target.getAttribute('index'));
        this.fire('auction-selected', this.data[idx].auction_id);
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], HomeView.prototype, "data", void 0);
HomeView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('home-view')
], HomeView);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3JpcHBsZS1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2Nhcm91c2VsLWNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvY2xvY2svY3VzdG9tLWNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdG1wLWRhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBSTlFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxxREFBTztJQU92QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBRyxDQUFDLENBQUM7SUFJVCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0NEO1NBQ0g7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUksZ0JBQWU7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFhO1FBQ2pDLElBQUksU0FBUyxHQUF1QixDQUFDLENBQUMsTUFBcUIsQ0FBQztRQUM1RCxJQUFJLE1BQU0sR0FBcUMsU0FBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFB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QUFRLENBOENwQjtBQTlDb0IiLCJmaWxlIjoiMTJmYThhYTEzYWJhZjM0MzNlNmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzLCBodG1sIH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcblxuXG5AY3VzdG9tRWxlbWVudCgncmlwcGxlLWNvbnRhaW5lcicpXG5leHBvcnQgY2xhc3MgUmlwcGxlRWZmZWN0IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHBvc1ggPSAwO1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgcG9zWSA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9jbGlja0hhbmRsZXIpXG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2NsaWNrSGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICA6aG9zdHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDo6c2xvdHRlZCgqKXtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6MDtcbiAgICAgIH1cblxuICAgICAgLmluayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5hbmltYXRlIHtcbiAgICAgICAgYW5pbWF0aW9uOnJpcHBsZSAwLjY1cyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7fVxuICAgICAgfWAsXG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gXG4gIH1cblxuICBwcml2YXRlIF9jbGlja0hhbmRsZXIoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCB0YXJnZXRfZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCBpbmtfZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9ICg8SFRNTEVsZW1lbnQ+dGFyZ2V0X2VsKS5xdWVyeVNlbGVjdG9yKCcuaW5rJykgfHwgdGhpcy4kJCgnLmluaycpO1xuXG4gICAgaWYgKGlua19lbCkge1xuICAgICAgaW5rX2VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbmtfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpbmtfZWwuY2xhc3NMaXN0LmFkZCgnaW5rJyk7XG4gICAgICBpbmtfZWwuc3R5bGUud2lkdGggPSBpbmtfZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0X2VsLm9mZnNldFdpZHRoLCB0YXJnZXRfZWwub2Zmc2V0SGVpZ2h0KSArICdweCc7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLmFwcGVuZENoaWxkKGlua19lbCk7XG4gICAgfVxuXG4gICAgaW5rX2VsLnN0eWxlLmxlZnQgPSAoZS5vZmZzZXRYIC0gaW5rX2VsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xuICAgIGlua19lbC5zdHlsZS50b3AgPSAoZS5vZmZzZXRZIC0gaW5rX2VsLm9mZnNldEhlaWdodCAvIDIpICsgJ3B4JztcbiAgICBpbmtfZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAncmlwcGxlLWNvbnRhaW5lcic6IFJpcHBsZUVmZmVjdDtcbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGh0bWwsIGNzcywgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZm9yd2FyZEFycm93SWNvbiwgYmFja3dhcmRBcnJvd0ljb24gfSBmcm9tICcuLi8uLi9pY29ucy9pY29ucyc7XG5pbXBvcnQgeyBJY29uU3R5bGUsIFR5cG9ncmFwaHlTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5cblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB1cmw6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2FwdGlvbjogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnY2Fyb3VzZWwtY29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHRyYW5zaXRpb25IYW5kbGVyOiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IEFycmF5PEl0ZW0+ID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGluZGV4ID0gMTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBwaG90b3M6IGFueSA9IFtdO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB3aWR0aCA9IDc1MDtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgSWNvblN0eWxlLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgOmhvc3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuc2xpZGVyIHtcbiAgICAgICAgZmxleDogMSAwIDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG5cbiAgICAgICNuZXh0LCAjcHJldntcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICNuZXh0e1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5jYXB0aW9ue1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW46IDM1JSBhdXRvIDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cblxuICAgICAgLmNhcHRpb246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICB9XG5cbiAgICBgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgJHt0aGlzLndpZHRoICE9IDc1MCA/IGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0e1xuICAgICAgICAgIHdpZHRoOiAke3RoaXMud2lkdGh9cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDogJyd9XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ke3RoaXMud2lkdGh9cHgpO1wiPlxuICAgICAgJHtcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID4gMSA/XG4gICAgICAgIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJcIiBzdHlsZT1cImJhY2tncm91bmQ6IHVybCgke3RoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS51cmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyXCIgaWQ9XCJsY2xvbmVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+JHt0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDogJydcbiAgICAgIH1cbiAgICAgICR7XG4gICAgICB0aGlzLml0ZW1zLm1hcChpdCA9PiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJHtpdC51cmx9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+JHtpdC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8cD4ke2l0LmNhcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYClcbiAgICAgIH1cbiAgICAgICR7XG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgP1xuICAgICAgICBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLml0ZW1zWzBdLnVybH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXJcIiBpZD1cImZjbG9uZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRsaW5lLTJcIj4ke3RoaXMuaXRlbXNbMF0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuaXRlbXNbMF0uY2FwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmA6ICcnXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBpZD1cIm5leHRcIiBAY2xpY2s9XCIke3RoaXMuX2NsaWNrSGFuZGxlcn1cIj48c3BhbiBjbGFzcz1cImljb25cIj4ke2JhY2t3YXJkQXJyb3dJY29ufTwvc3Bhbj48L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwicHJldlwiIEBjbGljaz1cIiR7dGhpcy5fY2xpY2tIYW5kbGVyfVwiPjxzcGFuIGNsYXNzPVwiaWNvblwiPiR7Zm9yd2FyZEFycm93SWNvbn08L3NwYW4+PC9idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgLyogdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLl9jbGlja0hhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgdGhpcy4kJCQoJ2J1dHRvbicpIS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKSk7Ki9cbiAgICB0aGlzLnBob3RvcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuJCQkKCcuc2xpZGVyJykpO1xuICAgIHRoaXMudHJhbnNpdGlvbkhhbmRsZXIgPSB0aGlzLl90cmFuc2l0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuJCQoJy5jb250YWluZXInKSEuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkhhbmRsZXIpO1xuICB9XG5cblxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuJCQoJy5jb250YWluZXInKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMudHJhbnNpdGlvbkhhbmRsZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNpdGlvbkhhbmRsZXIoKSB7XG5cbiAgICBsZXQgY29udGFpbmVyID0gdGhpcy4kJCgnLmNvbnRhaW5lcicpO1xuICAgIGlmICh0aGlzLnBob3Rvc1t0aGlzLmluZGV4XS5pZCA9PT0gJ2xjbG9uZScpIHtcbiAgICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnBob3Rvcy5sZW5ndGggLSAyO1xuICAgICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCggLSR7dGhpcy53aWR0aCAqIHRoaXMuaW5kZXh9cHgpYDtcbiAgICB9XG4gICAgaWYgKHRoaXMucGhvdG9zW3RoaXMuaW5kZXhdLmlkID09PSAnZmNsb25lJykge1xuICAgICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdGhpcy5pbmRleCA9IHRoaXMucGhvdG9zLmxlbmd0aCAtIHRoaXMuaW5kZXg7XG4gICAgICBjb250YWluZXIhLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMud2lkdGggKiB0aGlzLmluZGV4fXB4KWA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xpY2tIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPD0gMCB8fCB0aGlzLmluZGV4ID49IHRoaXMucGhvdG9zLmxlbmd0aCAtIDEpIHJldHVybjtcblxuICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuaWQgPT09ICduZXh0Jykge1xuICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluZGV4LS07XG4gICAgfVxuICAgIGxldCBjb250YWluZXIgPSB0aGlzLiQkKCcuY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dCc7XG4gICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCggLSR7dGhpcy53aWR0aCAqIHRoaXMuaW5kZXh9cHgpYDtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2Nhcm91c2VsLWNvbXBvbmVudCc6IENhcm91c2VsQ29tcG9uZW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5cbkBjdXN0b21FbGVtZW50KCdjdXN0b20tY291bnRlcicpXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ291bnRlciBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHRvdGFsU2Vjb25kczogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgbWF4ID0gNjBcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGZvcndhcmRzID0gZmFsc2VcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgaG91cnMgPSAwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBtaW51dGVzID0gMDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgc2Vjb25kcyA9IDA7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoLnRpY2spIGxhYmVsIHtcbiAgICAgICAgICBhbmltYXRpb246IHRpY2sgMnMgaW5maW5pdGU7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHRpY2sge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLHJlZCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGxhYmVsPiR7KHRoaXMuaG91cnMgKyBcIlwiKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7KHRoaXMubWludXRlcyArIFwiXCIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHsodGhpcy5zZWNvbmRzICsgXCJcIikucGFkU3RhcnQoMiwgXCIwXCIpfSA8L2xhYmVsPlxuICAgIGA7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLl9zZXRUaW1lLmJpbmQodGhpcyksIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VGltZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdGFsU2Vjb25kcyA9IHRoaXMudG90YWxTZWNvbmRzICsgMTtcbiAgICBpZiAodGhpcy5mb3J3YXJkcykge1xuICAgICAgdGhpcy5zZWNvbmRzID0gdGhpcy50b3RhbFNlY29uZHMgJSA2MDtcbiAgICAgIHRoaXMubWludXRlcyA9IE1hdGguZmxvb3IodGhpcy50b3RhbFNlY29uZHMgLyA2MCk7XG4gICAgICB0aGlzLmhvdXJzID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY29uZHMgPSAodGhpcy5tYXggLSB0aGlzLnRvdGFsU2Vjb25kcykgJSA2MDtcbiAgICAgIHRoaXMubWludXRlcyA9IE1hdGguZmxvb3IoKHRoaXMubWF4IC0gdGhpcy50b3RhbFNlY29uZHMpIC8gNjApO1xuICAgICAgdGhpcy5ob3VycyA9IE1hdGguZmxvb3IoKHRoaXMubWF4IC0gdGhpcy50b3RhbFNlY29uZHMpIC8gMzYwMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcndhcmRzKSB7XG4gICAgICBpZiAodGhpcy5taW51dGVzID09IDAgJiYgdGhpcy5ob3VycyA9PSAwICYmIHRoaXMuc2Vjb25kcyA8IDMwKVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3RpY2snKVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3RpY2snKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5tYXggLSB0aGlzLnRvdGFsU2Vjb25kcyA8PSAzMClcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd0aWNrJylcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCd0aWNrJylcbiAgICB9XG4gICAgaWYgKHRoaXMudG90YWxTZWNvbmRzIDwgdGhpcy5tYXgpXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX3NldFRpbWUuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5maXJlKCd0aW1lLWlzLXVwJyk7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjdXN0b20tY291bnRlcic6IEN1c3RvbUNvdW50ZXJcbiAgfVxufSIsImV4cG9ydCBjb25zdCB2ZWhpY2xlX2RhdGEgPSBbXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTEuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDFcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjlcIlxuICB9LFxuICB7XG4gICAgXCJ1cmxcIjogXCIuLi8uLi9pbWdzL20yLmpwZWdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSAyXCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI4XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tMy5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgM1wiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyN1wiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTQuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNFwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNlwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTUuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNVwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNVwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTYuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDZcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjRcIlxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBjYXJvdXNlbF9kYXRhID0gW1xuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmcxLmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgMVwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfSxcbiAge1xuICAgIHVybDogXCIuLi8uLi9pbWdzL2JnMi5qcGVnXCIsXG4gICAgdGl0bGU6IFwiSU1HIDJcIixcbiAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiLi4vLi4vaW1ncy9iZzMuanBlZ1wiLFxuICAgIHRpdGxlOiBcIklNRyAzXCIsXG4gICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIlxuICB9LFxuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmc0LmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgNFwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfVxuXSIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUGFnZVZpZXcgfSBmcm9tICcuL3BhZ2Utdmlldyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUsIEJ1dHRvblN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50JztcbmltcG9ydCAnLi4vY29udGFpbmVyL3JpcHBsZS1jb250YWluZXInO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9jYXJkcy9jYXJvdXNlbC1jb21wb25lbnQnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9jbG9jay9jdXN0b20tY291bnRlcic7XG5pbXBvcnQgeyB2ZWhpY2xlX2RhdGEgYXMgVmVoaWNsZXMgfSBmcm9tICcuLi9kYXRhL3RtcC1kYXRhJ1xuXG5AY3VzdG9tRWxlbWVudCgnaG9tZS12aWV3JylcbmV4cG9ydCBjbGFzcyBIb21lVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBkYXRhID0gVmVoaWNsZXNcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuc3R5bGVzLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgQnV0dG9uU3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICBjYXJkLWNvbXBvbmVudHtcbiAgICAgICAgICAtLWNhcmQtYmcgOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvciksIHZhcigtLWdyYWRpZW50LWNvbG9yKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJpcHBsZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBzdHlsZT1cIiBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyBmbGV4LXdyYXA6IHdyYXA7IHBhZGRpbmctdG9wOiAxMHB4O1wiPlxuICAgICAgICAke3RoaXMuZGF0YS5tYXAoKGVsLCBpbngpID0+IGh0bWxgXG4gICAgICAgICAgPGNhcmQtY29tcG9uZW50IC5oZWlnaHQ9XCIkezI1MH1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7ZWwudXJsfSBzbG90PVwiaW1nXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IG1heC1oZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJoZWFkbGluZS01XCIgc2xvdD1cImNvbnRhaW5lclwiPiR7ZWwubmFtZX08L2g1PlxuICAgICAgICAgICAgPHAgc2xvdD1cImNvbnRhaW5lclwiIGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAke2VsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHJpcHBsZS1jb250YWluZXIgc2xvdD1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3N1YmFzdGFcIiBjbGFzcz1cImxpbmtlZC1idG4gYnV0dG9uXCIgaW5kZXg9XCIke2lueH1cIiBAY2xpY2s9XCIke3RoaXMuX3NhdmVWZWhpY2xlfVwiPklyIGEgcHVqYTwvYT5cbiAgICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2NhcmQtY29tcG9uZW50PlxuICAgICAgICBgKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlVmVoaWNsZShlOiBFdmVudCkge1xuICAgIGxldCBpZHggPSBOdW1iZXIoKDxIVE1MRWxlbWVudD5lLnRhcmdldCkhLmdldEF0dHJpYnV0ZSgnaW5kZXgnKSk7XG4gICAgdGhpcy5maXJlKCdhdWN0aW9uLXNlbGVjdGVkJywgdGhpcy5kYXRhW2lkeF0uYXVjdGlvbl9pZCk7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9