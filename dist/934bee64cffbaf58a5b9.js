(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2FyZC1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZS12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUY7QUFJakYsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLHFEQUFPO0lBQTFDOztRQUdFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUdaLFdBQU0sR0FBRyxHQUFHLENBQUM7UUEySGIsVUFBSyxHQUFRLEVBQUU7UUFDZixhQUFRLEdBQVksSUFBSTtJQW1CMUIsQ0FBQztJQXREQyxNQUFNO1FBQ0osT0FBTyxrREFBSTtVQUNMLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxrREFBSTs7OzZCQUczQixJQUFJLENBQUMsS0FBSzs4QkFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUU7Ozs7OEJBSWhCLElBQUksQ0FBQyxNQUFNOzs7Ozs4QkFLWCxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU07OztTQUdwQyxFQUFDLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7OztlQWFFO0lBQ2IsQ0FBQztJQUtNLGlCQUFpQjtRQUN0QixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRSxnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVTLGtCQUFrQixDQUFDLENBQVE7UUFFbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7Q0FDRjtBQTdJUSxvQkFBTSxHQUFHO0lBQ2QsaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUZGO0NBQ0Y7QUE3RkQ7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO2dEQUNWO0FBR2xCO0lBREMsOERBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs0Q0FDZjtBQUdaO0lBREMsOERBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs2Q0FDZDtBQVRGLGFBQWE7SUFEekIsbUVBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztHQUNuQixhQUFhLENBd0p6QjtBQXhKeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdUQ7QUFHakYsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBWSxTQUFRLHFEQUFPO0lBQXhDOztRQUdFLFNBQUksR0FBRyxFQUFFO1FBR1QsYUFBUSxHQUFHLEtBQUs7UUFHaEIsVUFBSyxHQUFHLEVBQUU7UUFHVixVQUFLLEdBQUcsRUFBRTtRQUdWLGFBQVEsR0FBRyxLQUFLLENBQUM7SUF3R25CLENBQUM7SUF0R0MsTUFBTSxLQUFLLE1BQU07UUFDZixPQUFPO1lBQ0wsaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMEVGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxrREFBSTs7O3dCQUdTLElBQUksQ0FBQyxJQUFJLGNBQWMsSUFBSSxDQUFDLGFBQWEsZUFBZSxJQUFJLENBQUMsUUFBUSxZQUFZLElBQUksQ0FBQyxLQUFLLGVBQWUsSUFBSSxDQUFDLFFBQVE7aUJBQzlILElBQUksQ0FBQyxLQUFLOzs7OztLQUt0QixDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFRO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFzQixDQUFDLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FFRjtBQXBIQztJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBQ2xCO0FBR1Q7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDOzZDQUNaO0FBR2hCO0lBREMsOERBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzswQ0FDakI7QUFHVjtJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7MENBQ2pCO0FBR1Y7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDOzZDQUNYO0FBZk4sV0FBVztJQUR2QixtRUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNqQixXQUFXLENBdUh2QjtBQXZIdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIZ0Q7QUFHeEUsSUFBYSxRQUFRLEdBQXJCLE1BQWEsUUFBUyxTQUFRLHFEQUFPO0lBQXJDOztRQXNDRSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBSWhCLENBQUM7SUF4Q0MsTUFBTSxLQUFLLE1BQU07UUFDZixPQUFPO1lBQ0wsaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQThCSjtTQUFDLENBQUM7SUFDTCxDQUFDO0NBT0Y7QUFKQztJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzt3Q0FDN0I7QUF0Q0gsUUFBUTtJQURwQixtRUFBYSxDQUFDLFdBQVcsQ0FBQztHQUNkLFFBQVEsQ0EwQ3BCO0FBMUNvQiIsImZpbGUiOiI5MzRiZWU2NGNmZmJhZjU4YTViOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MsIGh0bWwgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdjYXJkLWNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2hhZG93Qm94ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHdpZHRoID0gMjc1O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBoZWlnaHQgPSAzMDA7XG5cbiAgc3RhdGljIHN0eWxlcyA9IFtcbiAgICBjc3NgXG4gICAgICA6aG9zdCguZXhwYW5kZWQpe1xuICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEyLjVweCAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5mYWNlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmZhY2UxIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgICB9XG5cbiAgICAgIC5mYWNlMiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi00ZHAsIG5vbmUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgfVxuXG5cbiAgICAgIHNsb3RbbmFtZT1cImltZ1wiXTo6c2xvdHRlZCgqKXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAyNTBtcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmNvbnRlbnR7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyIHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi04ZHApO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIHNsb3RbbmFtZT1cImltZ1wiXTo6c2xvdHRlZCgqKSxcbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UxLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTEgLmNvbnRlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMixcbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyIC5jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmV4cGFuZGVkKSAuZmFjZTEsXG4gICAgICA6aG9zdCguZXhwYW5kZWQpIC5mYWNlMntcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgYFxuICBdXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgICAke3RoaXMud2lkdGggIT0gMjc1IHx8IHRoaXMuaGVpZ2h0ICE9IDMwMCA/IGh0bWxgXG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgLmZhY2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHt0aGlzLndpZHRofXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5oZWlnaHQgLSAyNX1weDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgOmhvc3R7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLmhlaWdodH1weDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgOmhvc3QoLmV4cGFuZGVkKXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkezIgKiB0aGlzLmhlaWdodH1weDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICBgOiAnJ31cbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY2UgZmFjZTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImltZ1wiPjwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlIGZhY2UyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250YWluZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgPC9kaXY+YFxuICB9XG5cbiAgcHJvcHM6IGFueSA9IHt9XG4gIGZvcndhcmRzOiBCb29sZWFuID0gdHJ1ZVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5wcm9wc1snX3RyYW5zaXRpb25IYW5kbGVyJ10gPSB0aGlzLl90cmFuc2l0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMucHJvcHMuX3RyYW5zaXRpb25IYW5kbGVyKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnByb3BzLl90cmFuc2l0aW9uSGFuZGxlcik7XG4gICAgLy90aGlzLmZpcmUoJ2FwcC1yZXNldC1sYXlvdXQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdHJhbnNpdGlvbkhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VlbnRlclwiICYmICF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcIm1vdXNlbGVhdmVcIiAmJiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjYXJkLWNvbXBvbmVudCc6IENhcmRDb21wb25lbnQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1pbnB1dCcpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSW5wdXQgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHJlcXVpcmVkID0gZmFsc2VcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbGFiZWwgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHZhbHVlID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtY29sb3IsIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsICM5OTkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLCB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjOTk5KSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi51bmRlcmxpbmV7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsIHJlZCkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yLCByZWQpKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgc3BhbixcbiAgICAgICAgaW5wdXQ6Zm9jdXMgfiBzcGFue1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgc3Bhbi51bmRlcmxpbmUsXG4gICAgICAgIGlucHV0OmZvY3VzIH4gc3Bhbi51bmRlcmxpbmV7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgbGFiZWwsXG4gICAgICAgIGlucHV0OmZvY3VzIH4gbGFiZWwge1xuICAgICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1mb2N1cy1jb2xvcix2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1mb2N1cy1jb2xvcix2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICBgXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgLnR5cGU9XCIke3RoaXMudHlwZX1cIiBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCIgP3JlcXVpcmVkPSR7dGhpcy5yZXF1aXJlZH0gLnZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiID9yZWFkT25seT0ke3RoaXMucmVhZE9ubHl9PlxuICAgICAgICA8bGFiZWw+JHt0aGlzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChlOiBFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKCh0aGlzLnZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS52YWx1ZSkgIT0gXCJcIikge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIilcbiAgICB9XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjdXN0b20taW5wdXQnOiBDdXN0b21JbnB1dFxuICB9XG59IiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcyB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdwYWdlLXZpZXcnKVxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcblxuICAgICAgOmhvc3R7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlSW57XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlT3V0e1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFthY3RpdmVdKXtcbiAgICAgICAgYW5pbWF0aW9uOiBmb3J3YXJkcyBmYWRlSW4gNTAwbXM7XG4gICAgICB9XG4gICAgYF07XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIGFjdGl2ZSA9IHRydWU7XG5cblxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAncGFnZS12aWV3JzogUGFnZVZpZXc7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9