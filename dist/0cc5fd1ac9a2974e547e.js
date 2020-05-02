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
          height: 1px;
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

/***/ "./src/pages/error-view.ts":
/*!*********************************!*\
  !*** ./src/pages/error-view.ts ***!
  \*********************************/
/*! exports provided: ErrorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorView", function() { return ErrorView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_cards_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/cards/card-component */ "./src/custom-components/cards/card-component.ts");
/* harmony import */ var _container_ripple_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/ripple-container */ "./src/container/ripple-container.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ErrorView = class ErrorView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    static get styles() {
        return [
            ...super.styles,
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyles"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        h1,h2 {
          text-align: center;
        }

        ripple-container{
          margin: auto;
        }

        a {
          width: 200px;
          padding: 36px;
          box-shadow: var(--shadow-elevation-4dp);
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <h1 class="headline-1"> Parece que esta funcionalidad no existe!</h1>
      <h2 class="headline-2"> regrese a los sitios seguros </h2>
      <ripple-container>
        <a href="/" class="linked-btn button">Ir a inicio</a>
      </ripple-container>`;
    }
};
ErrorView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('error-view')
], ErrorView);



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
        this.esburl = '';
        this.tokenurl = '';
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
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], PageView.prototype, "credentials", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean, reflect: true })
], PageView.prototype, "active", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], PageView.prototype, "esburl", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], PageView.prototype, "tokenurl", void 0);
PageView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('page-view')
], PageView);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3JpcHBsZS1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Vycm9yLXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhZ2Utdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBSTlFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxxREFBTztJQU92QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBRyxDQUFDLENBQUM7SUFJVCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0NEO1NBQ0g7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUksZ0JBQWU7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFhO1FBQ2pDLElBQUksU0FBUyxHQUF1QixDQUFDLENBQUMsTUFBcUIsQ0FBQztRQUM1RCxJQUFJLE1BQU0sR0FBcUMsU0FBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJ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eUVBQWU7WUFDZixzRUFBWTtZQUNaLGlEQUFHOzs7Ozs7Ozs7Ozs7OztPQWNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxrREFBSTs7Ozs7MEJBS1csQ0FBQztJQUd6QixDQUFDO0NBRUY7QUFwQ1ksU0FBUztJQURyQixtRUFBYSxDQUFDLFlBQVksQ0FBQztHQUNmLFNBQVMsQ0FvQ3JCO0FBcENxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JrRDtBQUd4RSxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFTLFNBQVEscURBQU87SUFBckM7O1FBeUNFLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFHZCxXQUFNLEdBQUcsRUFBRTtRQUdYLGFBQVEsR0FBRyxFQUFFO0lBQ2YsQ0FBQztJQTlDQyxNQUFNLEtBQUssTUFBTTtRQUNmLE9BQU87WUFDTCxpREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBOEJKO1NBQUMsQ0FBQztJQUNMLENBQUM7Q0FhRjtBQVZDO0lBREMsOERBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FDWDtBQUdoQjtJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzt3Q0FDN0I7QUFHZDtJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7d0NBQ2hCO0FBR1g7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzBDQUNkO0FBL0NGLFFBQVE7SUFEcEIsbUVBQWEsQ0FBQyxXQUFXLENBQUM7R0FDZCxRQUFRLENBZ0RwQjtBQWhEb0IiLCJmaWxlIjoiMGNjNWZkMWFjOWEyOTc0ZTU0N2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzLCBodG1sIH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcblxuXG5AY3VzdG9tRWxlbWVudCgncmlwcGxlLWNvbnRhaW5lcicpXG5leHBvcnQgY2xhc3MgUmlwcGxlRWZmZWN0IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHBvc1ggPSAwO1xuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgcG9zWSA9IDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9jbGlja0hhbmRsZXIpXG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2NsaWNrSGFuZGxlcilcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICA6aG9zdHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDo6c2xvdHRlZCgqKXtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHotaW5kZXg6NTA7XG4gICAgICB9XG5cbiAgICAgIC5pbmsge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICAgICAgfVxuXG4gICAgICAuYW5pbWF0ZSB7XG4gICAgICAgIGFuaW1hdGlvbjpyaXBwbGUgMC42NXMgbGluZWFyO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJpcHBsZSB7XG4gICAgICAgICAgMTAwJSB7b3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO31cbiAgICAgIH1gLFxuICAgIF1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8c2xvdD48L3Nsb3Q+YFxuICB9XG5cbiAgcHJpdmF0ZSBfY2xpY2tIYW5kbGVyKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBsZXQgdGFyZ2V0X2VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBsZXQgaW5rX2VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSAoPEhUTUxFbGVtZW50PnRhcmdldF9lbCkucXVlcnlTZWxlY3RvcignLmluaycpIHx8IHRoaXMuJCQoJy5pbmsnKTtcblxuICAgIGlmIChpbmtfZWwpIHtcbiAgICAgIGlua19lbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5rX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgaW5rX2VsLmNsYXNzTGlzdC5hZGQoJ2luaycpO1xuICAgICAgaW5rX2VsLnN0eWxlLndpZHRoID0gaW5rX2VsLnN0eWxlLmhlaWdodCA9IE1hdGgubWF4KHRhcmdldF9lbC5vZmZzZXRXaWR0aCwgdGFyZ2V0X2VsLm9mZnNldEhlaWdodCkgKyAncHgnO1xuICAgICAgdGhpcy5zaGFkb3dSb290IS5hcHBlbmRDaGlsZChpbmtfZWwpO1xuICAgIH1cblxuICAgIGlua19lbC5zdHlsZS5sZWZ0ID0gKGUub2Zmc2V0WCAtIGlua19lbC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcbiAgICBpbmtfZWwuc3R5bGUudG9wID0gKGUub2Zmc2V0WSAtIGlua19lbC5vZmZzZXRIZWlnaHQgLyAyKSArICdweCc7XG4gICAgaW5rX2VsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ3JpcHBsZS1jb250YWluZXInOiBSaXBwbGVFZmZlY3Q7XG4gIH1cbn0iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzLCBodG1sIH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcblxuXG5AY3VzdG9tRWxlbWVudCgnY2FyZC1jb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHNoYWRvd0JveCA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICB3aWR0aCA9IDI3NTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgaGVpZ2h0ID0gMzAwO1xuXG4gIHN0YXRpYyBzdHlsZXMgPSBbXG4gICAgY3NzYFxuICAgICAgOmhvc3QoLmV4cGFuZGVkKXtcbiAgICAgICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMi41cHggMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuZmFjZSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5mYWNlMSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iZyk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgICAgfVxuXG4gICAgICAuZmFjZTIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tNGRwLCBub25lKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgIH1cblxuXG4gICAgICBzbG90W25hbWU9XCJpbWdcIl06OnNsb3R0ZWQoKil7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgMjUwbXMgbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIC5jb250ZW50e1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMiB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1lbGV2YXRpb24tOGRwKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSBzbG90W25hbWU9XCJpbWdcIl06OnNsb3R0ZWQoKiksXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMSxcbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UxIC5jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTIsXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMiAuY29udGVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5leHBhbmRlZCkgLmZhY2UxLFxuICAgICAgOmhvc3QoLmV4cGFuZGVkKSAuZmFjZTJ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIH1cblxuICAgIGBcbiAgXVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgJHt0aGlzLndpZHRoICE9IDI3NSB8fCB0aGlzLmhlaWdodCAhPSAzMDAgPyBodG1sYFxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgIC5mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy53aWR0aH1weDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3RoaXMuaGVpZ2h0IC0gMjV9cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIDpob3N0e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5oZWlnaHR9cHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIDpob3N0KC5leHBhbmRlZCl7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHsyICogdGhpcy5oZWlnaHR9cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgYDogJyd9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlIGZhY2UxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpbWdcIj48L3Nsb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZSBmYWNlMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGFpbmVyXCI+PC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJtZXNzYWdlXCI+XG4gICAgICAgIDwvZGl2PmBcbiAgfVxuXG4gIHByb3BzOiBhbnkgPSB7fVxuICBmb3J3YXJkczogQm9vbGVhbiA9IHRydWVcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIHRoaXMucHJvcHNbJ190cmFuc2l0aW9uSGFuZGxlciddID0gdGhpcy5fdHJhbnNpdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnByb3BzLl90cmFuc2l0aW9uSGFuZGxlcik7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5wcm9wcy5fdHJhbnNpdGlvbkhhbmRsZXIpO1xuICAgIC8vdGhpcy5maXJlKCdhcHAtcmVzZXQtbGF5b3V0Jyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3RyYW5zaXRpb25IYW5kbGVyKGU6IEV2ZW50KTogdm9pZCB7XG5cbiAgICBpZiAoZS50eXBlID09PSBcIm1vdXNlZW50ZXJcIiAmJiAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWxlYXZlXCIgJiYgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnY2FyZC1jb21wb25lbnQnOiBDYXJkQ29tcG9uZW50O1xuICB9XG59IiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdjdXN0b20taW5wdXQnKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUlucHV0IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGUgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICByZXF1aXJlZCA9IGZhbHNlXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGxhYmVsID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLCB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjOTk5KSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvciwgdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgIzk5OSkpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvcix2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCByZWQpKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFue1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWlucHV0LWZvY3VzLWNvbG9yLHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvciwgcmVkKSk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4sXG4gICAgICAgIGlucHV0OmZvY3VzIH4gc3BhbntcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4udW5kZXJsaW5lLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIGxhYmVsLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcbiAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgIH1cblxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IC50eXBlPVwiJHt0aGlzLnR5cGV9XCIgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiID9yZXF1aXJlZD0ke3RoaXMucmVxdWlyZWR9IC52YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIiA/cmVhZE9ubHk9JHt0aGlzLnJlYWRPbmx5fT5cbiAgICAgICAgPGxhYmVsPiR7dGhpcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZTogRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmICgodGhpcy52YWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkudmFsdWUpICE9IFwiXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpXG4gICAgfVxuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnY3VzdG9tLWlucHV0JzogQ3VzdG9tSW5wdXRcbiAgfVxufSIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBQYWdlVmlldyB9IGZyb20gJy4vcGFnZS12aWV3JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2FyZC1jb21wb25lbnQnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvcmlwcGxlLWNvbnRhaW5lcic7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5cbkBjdXN0b21FbGVtZW50KCdlcnJvci12aWV3JylcbmV4cG9ydCBjbGFzcyBFcnJvclZpZXcgZXh0ZW5kcyBQYWdlVmlldyB7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnN1cGVyLnN0eWxlcyxcbiAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgIEJ1dHRvblN0eWxlcyxcbiAgICAgIGNzc2BcbiAgICAgICAgaDEsaDIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJpcHBsZS1jb250YWluZXJ7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi00ZHApO1xuICAgICAgICB9XG4gICAgICBgXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj4gUGFyZWNlIHF1ZSBlc3RhIGZ1bmNpb25hbGlkYWQgbm8gZXhpc3RlITwvaDE+XG4gICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+IHJlZ3Jlc2UgYSBsb3Mgc2l0aW9zIHNlZ3Vyb3MgPC9oMj5cbiAgICAgIDxyaXBwbGUtY29udGFpbmVyPlxuICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwibGlua2VkLWJ0biBidXR0b25cIj5JciBhIGluaWNpbzwvYT5cbiAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5gO1xuXG5cbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxUYWdOYW1lTWFwIHtcbiAgICAnZXJyb3Itdmlldyc6IEVycm9yVmlld1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzIH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ3BhZ2UtdmlldycpXG5leHBvcnQgY2xhc3MgUGFnZVZpZXcgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuXG4gICAgICA6aG9zdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVJbntcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVPdXR7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FjdGl2ZV0pe1xuICAgICAgICBhbmltYXRpb246IGZvcndhcmRzIGZhZGVJbiA1MDBtcztcbiAgICAgIH1cbiAgICBgXTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBjcmVkZW50aWFsczogYW55XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBhY3RpdmUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBlc2J1cmwgPSAnJ1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0b2tlbnVybCA9ICcnXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAncGFnZS12aWV3JzogUGFnZVZpZXc7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9