(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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
        display: flex;
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
        <div class="slider" style="background: url(${this.items[this.items.length - 1]}) no-repeat center center / cover" id="lclone">
              <!--div class="caption">
                <h2 class="headline-2">${this.items[this.items.length - 1].title}</h2>
                <p>${this.items[this.items.length - 1].caption}</p>
              </div-->
          </div>` : ''}
      ${this.items.map(it => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="slider" style="background: url(${it}) no-repeat center center / cover">
            <!--div class="caption">
              <h2 class="headline-2">${it.title}</h2>
              <p>${it.caption}</p>
            </div-->
        </div>
      `)}
      ${this.items.length > 1 ?
            _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
        <div class="slider" style="background: url(${this.items[0]}) no-repeat center center / cover" id="fclone">
              <!--div class="caption">
                <h2 class="headline-2">${this.items[0].title}</h2>
                <p>${this.items[0].caption}</p>
              </div-->
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



/***/ }),

/***/ "./src/requests/request.ts":
/*!*********************************!*\
  !*** ./src/requests/request.ts ***!
  \*********************************/
/*! exports provided: fetchQuery, serviceCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchQuery", function() { return fetchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCredentials", function() { return serviceCredentials; });
const fetchQuery = (url, method, body) => {
    return new Promise(async (solve, reject) => {
        const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
        //TODO: add uth
        fetch(url, {
            method: method,
            body: JSON.stringify(body),
            //eliminar
            mode: 'cors',
            headers: headers,
        })
            .then(response => {
            if (!response.ok) {
                reject(response);
            }
            solve(response.json());
        })
            .catch(err => {
            reject(err);
        });
    });
};
const serviceCredentials = [
    {
        "name": "auctions",
        "url": "http://<ip>",
        "methods": {
            "GET": [],
            "POST": [],
            "PUT": [],
        },
        "credentials": {
            "service_id": "123456789123456789",
            "password": "subastas123**"
        }
    },
    {
        "name": "insurance",
        "url": "http://<ip>",
        "methods": {
            "GET": [],
            "POST": [],
            "PUT": [],
        },
        "credentials": {
            "service_id": "987654321987654321",
            "password": "aseguradora123**"
        }
    },
    {
        "name": "inventory",
        "url": "http://<ip>",
        "methods": {
            "GET": [],
            "POST": [],
            "PUT": [],
        },
        "credentials": {
            "service_id": "999888777666555444",
            "password": "oficina123**"
        }
    },
    {
        "name": "ESB",
        "url": "http://<ip>",
        "methods": {}
    }
];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2Fyb3VzZWwtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhZ2Utdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdHMvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUY7QUFDVDtBQUNJO0FBSTVFLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWtCLFNBQVEscURBQU87SUFBOUM7O1FBS0UsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUd2QixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR1YsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdqQixVQUFLLEdBQUcsR0FBRyxDQUFDO0lBbUtkLENBQUM7SUFqS0MsTUFBTSxLQUFLLE1BQU07UUFDZixPQUFPO1lBQ0wsbUVBQVM7WUFDVCx5RUFBZTtZQUNmLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0VKO1NBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxNQUFNO1FBQ2QsT0FBTyxrREFBSTtNQUNULElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxrREFBSTs7O21CQUdYLElBQUksQ0FBQyxLQUFLOzs7S0FHeEIsRUFBQyxDQUFDLEVBQUU7MkRBQ2tELElBQUksQ0FBQyxLQUFLO1FBRS9ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGtEQUFJO3FEQUN5QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7eUNBRTdDLElBQUksQ0FBQyxL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SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLGFBQWE7UUFDcEIsU0FBUyxFQUFFLEVBRVY7S0FDRjtDQUNGIiwiZmlsZSI6IjQxZDA5YzI4NWJiOTc2ZDk1OWQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUxpdCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBmb3J3YXJkQXJyb3dJY29uLCBiYWNrd2FyZEFycm93SWNvbiB9IGZyb20gJy4uLy4uL2ljb25zL2ljb25zJztcbmltcG9ydCB7IEljb25TdHlsZSwgVHlwb2dyYXBoeVN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcblxuXG5AY3VzdG9tRWxlbWVudCgnY2Fyb3VzZWwtY29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHRyYW5zaXRpb25IYW5kbGVyOiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgaXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgaW5kZXggPSAxO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pXG4gIHBob3RvczogYW55ID0gW107XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHdpZHRoID0gNzUwO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBJY29uU3R5bGUsXG4gICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICBjc3NgXG4gICAgICA6aG9zdHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA3NTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLnNsaWRlciB7XG4gICAgICAgIGZsZXg6IDEgMCAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbjpob3ZlcntcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuXG4gICAgICAjbmV4dCwgI3ByZXZ7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAjbmV4dHtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAuY2FwdGlvbntcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiAzNSUgYXV0byAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnktY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXB0aW9uOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgfVxuXG4gICAgYF07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICR7dGhpcy53aWR0aCAhPSA3NTAgPyBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICB3aWR0aDogJHt0aGlzLndpZHRofXB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGA6ICcnfVxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHt0aGlzLndpZHRofXB4KTtcIj5cbiAgICAgICR7XG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgP1xuICAgICAgICBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV19KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyXCIgaWQ9XCJsY2xvbmVcIj5cbiAgICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+JHt0aGlzLml0ZW1zW3RoaXMuaXRlbXMubGVuZ3RoIC0gMV0udGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD4ke3RoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXYtLT5cbiAgICAgICAgICA8L2Rpdj5gOiAnJ1xuICAgICAgfVxuICAgICAgJHtcbiAgICAgIHRoaXMuaXRlbXMubWFwKGl0ID0+IGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJcIiBzdHlsZT1cImJhY2tncm91bmQ6IHVybCgke2l0fSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlclwiPlxuICAgICAgICAgICAgPCEtLWRpdiBjbGFzcz1cImNhcHRpb25cIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPiR7aXQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgPHA+JHtpdC5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2LS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYClcbiAgICAgIH1cbiAgICAgICR7XG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgP1xuICAgICAgICBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiB1cmwoJHt0aGlzLml0ZW1zWzBdfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlclwiIGlkPVwiZmNsb25lXCI+XG4gICAgICAgICAgICAgIDwhLS1kaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPiR7dGhpcy5pdGVtc1swXS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxwPiR7dGhpcy5pdGVtc1swXS5jYXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9kaXYtLT5cbiAgICAgICAgICA8L2Rpdj5gOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gaWQ9XCJuZXh0XCIgQGNsaWNrPVwiJHt0aGlzLl9jbGlja0hhbmRsZXJ9XCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+JHtiYWNrd2FyZEFycm93SWNvbn08L3NwYW4+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cInByZXZcIiBAY2xpY2s9XCIke3RoaXMuX2NsaWNrSGFuZGxlcn1cIj48c3BhbiBjbGFzcz1cImljb25cIj4ke2ZvcndhcmRBcnJvd0ljb259PC9zcGFuPjwvYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBwdWJsaWMgZmlyc3RVcGRhdGVkKCkge1xuICAgIC8qIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5fY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgIHRoaXMuJCQkKCdidXR0b24nKSEuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcikpOyovXG4gICAgdGhpcy5waG90b3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLiQkJCgnLnNsaWRlcicpKTtcbiAgICB0aGlzLnRyYW5zaXRpb25IYW5kbGVyID0gdGhpcy5fdHJhbnNpdGlvbkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLiQkKCcuY29udGFpbmVyJykhLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25IYW5kbGVyKTtcbiAgfVxuXG5cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLiQkKCcuY29udGFpbmVyJyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25IYW5kbGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYW5zaXRpb25IYW5kbGVyKCkge1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IHRoaXMuJCQoJy5jb250YWluZXInKTtcbiAgICBpZiAodGhpcy5waG90b3NbdGhpcy5pbmRleF0uaWQgPT09ICdsY2xvbmUnKSB7XG4gICAgICBjb250YWluZXIhLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLmluZGV4ID0gdGhpcy5waG90b3MubGVuZ3RoIC0gMjtcbiAgICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoIC0ke3RoaXMud2lkdGggKiB0aGlzLmluZGV4fXB4KWA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBob3Rvc1t0aGlzLmluZGV4XS5pZCA9PT0gJ2ZjbG9uZScpIHtcbiAgICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLnBob3Rvcy5sZW5ndGggLSB0aGlzLmluZGV4O1xuICAgICAgY29udGFpbmVyIS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLndpZHRoICogdGhpcy5pbmRleH1weClgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlcihldmVudDogRXZlbnQpIHtcblxuICAgIGlmICh0aGlzLmluZGV4IDw9IDAgfHwgdGhpcy5pbmRleCA+PSB0aGlzLnBob3Rvcy5sZW5ndGggLSAxKSByZXR1cm47XG5cbiAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmlkID09PSAnbmV4dCcpIHtcbiAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRleC0tO1xuICAgIH1cbiAgICBsZXQgY29udGFpbmVyID0gdGhpcy4kJCgnLmNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQnO1xuICAgIGNvbnRhaW5lciEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoIC0ke3RoaXMud2lkdGggKiB0aGlzLmluZGV4fXB4KWA7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjYXJvdXNlbC1jb21wb25lbnQnOiBDYXJvdXNlbENvbXBvbmVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdjdXN0b20taW5wdXQnKVxuZXhwb3J0IGNsYXNzIEN1c3RvbUlucHV0IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHR5cGUgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICByZXF1aXJlZCA9IGZhbHNlXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGxhYmVsID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB2YWx1ZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLCB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjOTk5KSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvciwgdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgIzk5OSkpO1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvcix2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCByZWQpKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFue1xuICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWlucHV0LWZvY3VzLWNvbG9yLHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvciwgcmVkKSk7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4sXG4gICAgICAgIGlucHV0OmZvY3VzIH4gc3BhbntcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIHNwYW4udW5kZXJsaW5lLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IHNwYW4udW5kZXJsaW5le1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCgudmFsaWQpIGxhYmVsLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcbiAgICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDpmb2N1c3tcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgIH1cblxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IC50eXBlPVwiJHt0aGlzLnR5cGV9XCIgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiID9yZXF1aXJlZD0ke3RoaXMucmVxdWlyZWR9IC52YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIiA/cmVhZE9ubHk9JHt0aGlzLnJlYWRPbmx5fT5cbiAgICAgICAgPGxhYmVsPiR7dGhpcy5sYWJlbH08L2xhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInVuZGVybGluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZTogRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmICgodGhpcy52YWx1ZSA9ICg8SFRNTElucHV0RWxlbWVudD5lLnRhcmdldCkudmFsdWUpICE9IFwiXCIpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpXG4gICAgfVxuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnY3VzdG9tLWlucHV0JzogQ3VzdG9tSW5wdXRcbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgncGFnZS12aWV3JylcbmV4cG9ydCBjbGFzcyBQYWdlVmlldyBleHRlbmRzIEJhc2VMaXQge1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG5cbiAgICAgIDpob3N0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZU91dHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXSl7XG4gICAgICAgIGFuaW1hdGlvbjogZm9yd2FyZHMgZmFkZUluIDUwMG1zO1xuICAgICAgfVxuICAgIGBdO1xuICB9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIGNyZWRlbnRpYWxzOiBhbnlcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pXG4gIGFjdGl2ZSA9IHRydWU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIGVzYnVybCA9ICcnXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHRva2VudXJsID0gJydcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdwYWdlLXZpZXcnOiBQYWdlVmlldztcbiAgfVxuXG59XG5cbiIsImV4cG9ydCBjb25zdCBmZXRjaFF1ZXJ5ID0gKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgYm9keTogYW55KSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAoc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgLy9UT0RPOiBhZGQgdXRoXG4gICAgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgLy9lbGltaW5hclxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZWplY3QocmVzcG9uc2UpXG4gICAgICAgIH1cbiAgICAgICAgc29sdmUocmVzcG9uc2UuanNvbigpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9KVxuICB9KTtcbn1cblxuXG5leHBvcnQgY29uc3Qgc2VydmljZUNyZWRlbnRpYWxzID0gW1xuICB7XG4gICAgXCJuYW1lXCI6IFwiYXVjdGlvbnNcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly88aXA+XCIsXG4gICAgXCJtZXRob2RzXCI6IHtcbiAgICAgIFwiR0VUXCI6IFtdLFxuICAgICAgXCJQT1NUXCI6IFtdLFxuICAgICAgXCJQVVRcIjogW10sXG4gICAgfSxcbiAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgIFwic2VydmljZV9pZFwiOiBcIjEyMzQ1Njc4OTEyMzQ1Njc4OVwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcInN1YmFzdGFzMTIzKipcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcImluc3VyYW5jZVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovLzxpcD5cIixcbiAgICBcIm1ldGhvZHNcIjoge1xuICAgICAgXCJHRVRcIjogW10sXG4gICAgICBcIlBPU1RcIjogW10sXG4gICAgICBcIlBVVFwiOiBbXSxcbiAgICB9LFxuICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgXCJzZXJ2aWNlX2lkXCI6IFwiOTg3NjU0MzIxOTg3NjU0MzIxXCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwiYXNlZ3VyYWRvcmExMjMqKlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiaW52ZW50b3J5XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICBcIkdFVFwiOiBbXSxcbiAgICAgIFwiUE9TVFwiOiBbXSxcbiAgICAgIFwiUFVUXCI6IFtdLFxuICAgIH0sXG4gICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICBcInNlcnZpY2VfaWRcIjogXCI5OTk4ODg3Nzc2NjY1NTU0NDRcIixcbiAgICAgIFwicGFzc3dvcmRcIjogXCJvZmljaW5hMTIzKipcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIkVTQlwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovLzxpcD5cIixcbiAgICBcIm1ldGhvZHNcIjoge1xuXG4gICAgfVxuICB9XG5dIl0sInNvdXJjZVJvb3QiOiIifQ==