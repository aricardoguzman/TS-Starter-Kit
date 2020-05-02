(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./src/pages/login-view.ts":
/*!*********************************!*\
  !*** ./src/pages/login-view.ts ***!
  \*********************************/
/*! exports provided: LoginView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginView", function() { return LoginView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_cards_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/cards/card-component */ "./src/custom-components/cards/card-component.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
/* harmony import */ var _container_ripple_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../container/ripple-container */ "./src/container/ripple-container.ts");
/* harmony import */ var _requests_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../requests/request */ "./src/requests/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LoginView = class LoginView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super(...arguments);
        this.title = 'Login';
        this.suscribe = false;
    }
    static get styles() {
        return [
            ...super.styles,
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["ButtonStyles"],
            _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__["TypographyStyle"],
            _base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        :host{
          background-color: var(--default-primary-color);
        }

        ripple-container {
          margin: auto;
        }

        .form {
          padding-top: 40px;
          box-sizing: border-box;
          height: 70vh;
          width: 30%;
          margin: auto;
          margin-top: calc(15vh - 64px);
          border-radius: 10px;
          box-shadow: var(--shadow-box-2dp);
          background: var(--primary-background-color);
        }

        custom-input{
          margin: 25px auto;
          width: 60%;
        }

        h2 {
          text-align: center;
          text-transform: none;
        }

        button.button.linked-btn {
          padding: 16px;
          width: 150px;
        }

        @media only screen and (max-width: 840px){
          .form{
            width: 80%;
          }
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="form">
        <h2 class="headline-2"> ${this.title} </h2>
        <div class="underline" style="margin-bottom: 40px;"></div>
        <custom-input label="${this.suscribe ? 'Nombre' : 'Codigo'}" id="username"></custom-input>
        <custom-input label="Password" type="password" id="password"></custom-input>
        <div class="underline" sytle="margin-top: 40px;"></div>
        <div style="margin:auto; width:57.5%;">
          <input type="checkbox" id="suscribe" name="suscribe" value="false" @change="${this._changeTitle}">
          <label class="caption" for="suscribe">No tienes una cuenta?</label>
        </div>
        <ripple-container  @click=${this._authenticate}>
          <button class="button linked-btn">Submit</button>
        </ripple-container>
      </div>
    `;
    }
    async _authenticate() {
        //TODO: get service token
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_6__["fetchQuery"])(this.tokenurl, 'POST', this.credentials);
        //alert(token);
        //This request goes to the ESB
        let username = this._('username').value;
        let password = this._('password').value;
        if (!this.suscribe) {
            Object(_requests_request__WEBPACK_IMPORTED_MODULE_6__["fetchQuery"])(this._constructURL(token.token, username, password), 'GET', undefined)
                .then((data) => {
                if (data.code !== undefined && data.code !== 200) {
                    throw Error('Unauthorized');
                }
                this.fire('auth-changed', data);
            }).catch((err) => {
                console.log(err);
                window.dispatchEvent(new CustomEvent("error", { detail: "Credenciales inválidas" }));
            });
        }
        else {
            Object(_requests_request__WEBPACK_IMPORTED_MODULE_6__["fetchQuery"])(`${this.esburl}/Afiliado`, 'POST', { jwt: token.token, nombre: username, password: password })
                .then((data) => {
                if (data.code !== undefined && data.code !== 200) {
                    throw Error('Unable to change data');
                }
                else {
                    this.fire('auth-changed', data);
                    window.dispatchEvent(new CustomEvent("error", { detail: data.codigo }));
                }
            }).catch((err) => {
                console.log(err);
                window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error al actualizar data" }));
            });
        }
    }
    _constructURL(token, username, password) {
        return `${this.esburl}/Afiliado?jwt=${token}&codigo=${username}&password=${password}`;
    }
    _changeTitle() {
        this.suscribe = (this._('suscribe').checked);
        console.log(this.suscribe);
        this.title = this.suscribe ? "SUSCRIBE" : "LOGIN";
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], LoginView.prototype, "title", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], LoginView.prototype, "suscribe", void 0);
LoginView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('login-view')
], LoginView);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3JpcHBsZS1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luLXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhZ2Utdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdHMvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBSTlFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxxREFBTztJQU92QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBRyxDQUFDLENBQUM7SUFJVCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0NEO1NBQ0g7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUksZ0JBQWU7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFhO1FBQ2pDLElBQUksU0FBUyxHQUF1QixDQUFDLENBQUMsTUFBcUIsQ0FBQztRQUM1RCxJQUFJLE1BQU0sR0FB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QUFDLEVBQUU7WUFDWCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFHTSxNQUFNLGtCQUFrQixHQUFHO0lBQ2hDO1FBQ0UsTUFBTSxFQUFFLFVBQVU7UUFDbEIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxhQUFhLEVBQUU7WUFDYixZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxlQUFlO1NBQzVCO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1NBQy9CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsY0FBYztTQUMzQjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRSxFQUVWO0tBQ0Y7Q0FDRiIsImZpbGUiOiIzMGNhOWYxNDMyZWNhYzFlNjdmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MsIGh0bWwgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdyaXBwbGUtY29udGFpbmVyJylcbmV4cG9ydCBjbGFzcyBSaXBwbGVFZmZlY3QgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgcG9zWCA9IDA7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBwb3NZID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2NsaWNrSGFuZGxlcilcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fY2xpY2tIYW5kbGVyKVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgIDpob3N0e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKCope1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgei1pbmRleDo1MDtcbiAgICAgIH1cblxuICAgICAgLmluayB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5hbmltYXRlIHtcbiAgICAgICAgYW5pbWF0aW9uOnJpcHBsZSAwLjY1cyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcmlwcGxlIHtcbiAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7fVxuICAgICAgfWAsXG4gICAgXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gXG4gIH1cblxuICBwcml2YXRlIF9jbGlja0hhbmRsZXIoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGxldCB0YXJnZXRfZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGxldCBpbmtfZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9ICg8SFRNTEVsZW1lbnQ+dGFyZ2V0X2VsKS5xdWVyeVNlbGVjdG9yKCcuaW5rJykgfHwgdGhpcy4kJCgnLmluaycpO1xuXG4gICAgaWYgKGlua19lbCkge1xuICAgICAgaW5rX2VsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbmtfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBpbmtfZWwuY2xhc3NMaXN0LmFkZCgnaW5rJyk7XG4gICAgICBpbmtfZWwuc3R5bGUud2lkdGggPSBpbmtfZWwuc3R5bGUuaGVpZ2h0ID0gTWF0aC5tYXgodGFyZ2V0X2VsLm9mZnNldFdpZHRoLCB0YXJnZXRfZWwub2Zmc2V0SGVpZ2h0KSArICdweCc7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLmFwcGVuZENoaWxkKGlua19lbCk7XG4gICAgfVxuXG4gICAgaW5rX2VsLnN0eWxlLmxlZnQgPSAoZS5vZmZzZXRYIC0gaW5rX2VsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xuICAgIGlua19lbC5zdHlsZS50b3AgPSAoZS5vZmZzZXRZIC0gaW5rX2VsLm9mZnNldEhlaWdodCAvIDIpICsgJ3B4JztcbiAgICBpbmtfZWwuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAncmlwcGxlLWNvbnRhaW5lcic6IFJpcHBsZUVmZmVjdDtcbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5LCBjc3MsIGh0bWwgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdjYXJkLWNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc2hhZG93Qm94ID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHdpZHRoID0gMjc1O1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBoZWlnaHQgPSAzMDA7XG5cbiAgc3RhdGljIHN0eWxlcyA9IFtcbiAgICBjc3NgXG4gICAgICA6aG9zdCguZXhwYW5kZWQpe1xuICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEyLjVweCAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5mYWNlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmZhY2UxIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJnKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgICB9XG5cbiAgICAgIC5mYWNlMiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi00ZHAsIG5vbmUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgICAgfVxuXG5cbiAgICAgIHNsb3RbbmFtZT1cImltZ1wiXTo6c2xvdHRlZCgqKXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAyNTBtcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmNvbnRlbnR7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyIHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWVsZXZhdGlvbi04ZHApO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIHNsb3RbbmFtZT1cImltZ1wiXTo6c2xvdHRlZCgqKSxcbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UxLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTEgLmNvbnRlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMixcbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyIC5jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmV4cGFuZGVkKSAuZmFjZTEsXG4gICAgICA6aG9zdCguZXhwYW5kZWQpIC5mYWNlMntcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgfVxuXG4gICAgYFxuICBdXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgICAke3RoaXMud2lkdGggIT0gMjc1IHx8IHRoaXMuaGVpZ2h0ICE9IDMwMCA/IGh0bWxgXG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgLmZhY2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJHt0aGlzLndpZHRofXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7dGhpcy5oZWlnaHQgLSAyNX1weDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgOmhvc3R7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLmhlaWdodH1weDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgOmhvc3QoLmV4cGFuZGVkKXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkezIgKiB0aGlzLmhlaWdodH1weDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICBgOiAnJ31cbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY2UgZmFjZTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImltZ1wiPjwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNlIGZhY2UyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250YWluZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgPC9kaXY+YFxuICB9XG5cbiAgcHJvcHM6IGFueSA9IHt9XG4gIGZvcndhcmRzOiBCb29sZWFuID0gdHJ1ZVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgdGhpcy5wcm9wc1snX3RyYW5zaXRpb25IYW5kbGVyJ10gPSB0aGlzLl90cmFuc2l0aW9uSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMucHJvcHMuX3RyYW5zaXRpb25IYW5kbGVyKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnByb3BzLl90cmFuc2l0aW9uSGFuZGxlcik7XG4gICAgLy90aGlzLmZpcmUoJ2FwcC1yZXNldC1sYXlvdXQnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdHJhbnNpdGlvbkhhbmRsZXIoZTogRXZlbnQpOiB2b2lkIHtcblxuICAgIGlmIChlLnR5cGUgPT09IFwibW91c2VlbnRlclwiICYmICF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSBcIm1vdXNlbGVhdmVcIiAmJiB0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjYXJkLWNvbXBvbmVudCc6IENhcmRDb21wb25lbnQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnLi4vLi4vYmFzZS1lbGVtZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1pbnB1dCcpXG5leHBvcnQgY2xhc3MgQ3VzdG9tSW5wdXQgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdHlwZSA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHJlcXVpcmVkID0gZmFsc2VcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgbGFiZWwgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHZhbHVlID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgcmVhZE9ubHkgPSBmYWxzZTtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtY29sb3IsIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsICM5OTkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLCB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjOTk5KSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi51bmRlcmxpbmV7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY3VzdG9tLWlucHV0LWNvbG9yLHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsIHJlZCkpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20taW5wdXQtZm9jdXMtY29sb3IsdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yLCByZWQpKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgc3BhbixcbiAgICAgICAgaW5wdXQ6Zm9jdXMgfiBzcGFue1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgc3Bhbi51bmRlcmxpbmUsXG4gICAgICAgIGlucHV0OmZvY3VzIH4gc3Bhbi51bmRlcmxpbmV7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KC52YWxpZCkgbGFiZWwsXG4gICAgICAgIGlucHV0OmZvY3VzIH4gbGFiZWwge1xuICAgICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1mb2N1cy1jb2xvcix2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OmZvY3Vze1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1mb2N1cy1jb2xvcix2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICBgXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgLnR5cGU9XCIke3RoaXMudHlwZX1cIiBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCIgP3JlcXVpcmVkPSR7dGhpcy5yZXF1aXJlZH0gLnZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiID9yZWFkT25seT0ke3RoaXMucmVhZE9ubHl9PlxuICAgICAgICA8bGFiZWw+JHt0aGlzLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChlOiBFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKCh0aGlzLnZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS52YWx1ZSkgIT0gXCJcIikge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwidmFsaWRcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRcIilcbiAgICB9XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdjdXN0b20taW5wdXQnOiBDdXN0b21JbnB1dFxuICB9XG59IiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBQYWdlVmlldyB9IGZyb20gJy4vcGFnZS12aWV3JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2FyZC1jb21wb25lbnQnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQnO1xuaW1wb3J0ICcuLi9jb250YWluZXIvcmlwcGxlLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBmZXRjaFF1ZXJ5IH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdCc7XG5cbkBjdXN0b21FbGVtZW50KCdsb2dpbi12aWV3JylcbmV4cG9ydCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBQYWdlVmlldyB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHRpdGxlID0gJ0xvZ2luJztcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHN1c2NyaWJlID0gZmFsc2U7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnN1cGVyLnN0eWxlcyxcbiAgICAgIEJ1dHRvblN0eWxlcyxcbiAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJpcHBsZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGhlaWdodDogNzB2aDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDE1dmggLSA2NHB4KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ib3gtMmRwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tLWlucHV0e1xuICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmJ1dHRvbi5saW5rZWQtYnRuIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpe1xuICAgICAgICAgIC5mb3Jte1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPiAke3RoaXMudGl0bGV9IDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDQwcHg7XCI+PC9kaXY+XG4gICAgICAgIDxjdXN0b20taW5wdXQgbGFiZWw9XCIke3RoaXMuc3VzY3JpYmUgPyAnTm9tYnJlJyA6ICdDb2RpZ28nfVwiIGlkPVwidXNlcm5hbWVcIj48L2N1c3RvbS1pbnB1dD5cbiAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIlBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lXCIgc3l0bGU9XCJtYXJnaW4tdG9wOiA0MHB4O1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOmF1dG87IHdpZHRoOjU3LjUlO1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInN1c2NyaWJlXCIgbmFtZT1cInN1c2NyaWJlXCIgdmFsdWU9XCJmYWxzZVwiIEBjaGFuZ2U9XCIke3RoaXMuX2NoYW5nZVRpdGxlfVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNhcHRpb25cIiBmb3I9XCJzdXNjcmliZVwiPk5vIHRpZW5lcyB1bmEgY3VlbnRhPzwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cmlwcGxlLWNvbnRhaW5lciAgQGNsaWNrPSR7dGhpcy5fYXV0aGVudGljYXRlfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxpbmtlZC1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2F1dGhlbnRpY2F0ZSgpIHtcblxuICAgIC8vVE9ETzogZ2V0IHNlcnZpY2UgdG9rZW5cbiAgICBsZXQgdG9rZW46IGFueSA9IGF3YWl0IGZldGNoUXVlcnkodGhpcy50b2tlbnVybCwgJ1BPU1QnLCB0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICAvL2FsZXJ0KHRva2VuKTtcbiAgICAvL1RoaXMgcmVxdWVzdCBnb2VzIHRvIHRoZSBFU0JcbiAgICBsZXQgdXNlcm5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5fKCd1c2VybmFtZScpKSEudmFsdWU7XG4gICAgbGV0IHBhc3N3b3JkID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygncGFzc3dvcmQnKSkhLnZhbHVlO1xuXG4gICAgaWYgKCF0aGlzLnN1c2NyaWJlKSB7XG4gICAgICBmZXRjaFF1ZXJ5KHRoaXMuX2NvbnN0cnVjdFVSTCg8c3RyaW5nPnRva2VuLnRva2VuLCA8c3RyaW5nPnVzZXJuYW1lLCA8c3RyaW5nPnBhc3N3b3JkKSwgJ0dFVCcsIHVuZGVmaW5lZClcbiAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmNvZGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1VuYXV0aG9yaXplZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZpcmUoJ2F1dGgtY2hhbmdlZCcsIGRhdGEpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlcnJvclwiLCB7IGRldGFpbDogXCJDcmVkZW5jaWFsZXMgaW52w6FsaWRhc1wiIH0pKTtcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hRdWVyeShgJHt0aGlzLmVzYnVybH0vQWZpbGlhZG9gLCAnUE9TVCcsIHsgand0OiB0b2tlbi50b2tlbiwgbm9tYnJlOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXG4gICAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5jb2RlICE9PSB1bmRlZmluZWQgJiYgZGF0YS5jb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gY2hhbmdlIGRhdGEnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdhdXRoLWNoYW5nZWQnLCBkYXRhKTtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVycm9yXCIsIHsgZGV0YWlsOiBkYXRhLmNvZGlnbyB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVycm9yXCIsIHsgZGV0YWlsOiBcIk9jdXJyacOzIHVuIGVycm9yIGFsIGFjdHVhbGl6YXIgZGF0YVwiIH0pKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3RydWN0VVJMKHRva2VuOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmVzYnVybH0vQWZpbGlhZG8/and0PSR7dG9rZW59JmNvZGlnbz0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWA7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VUaXRsZSgpIHtcbiAgICB0aGlzLnN1c2NyaWJlID0gKCg8SFRNTElucHV0RWxlbWVudD50aGlzLl8oJ3N1c2NyaWJlJykpLmNoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3VzY3JpYmUpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLnN1c2NyaWJlID8gXCJTVVNDUklCRVwiIDogXCJMT0dJTlwiO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbG9naW4tdmlldyc6IExvZ2luVmlldztcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcyB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5cbkBjdXN0b21FbGVtZW50KCdwYWdlLXZpZXcnKVxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcblxuICAgICAgOmhvc3R7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlSW57XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlT3V0e1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFthY3RpdmVdKXtcbiAgICAgICAgYW5pbWF0aW9uOiBmb3J3YXJkcyBmYWRlSW4gNTAwbXM7XG4gICAgICB9XG4gICAgYF07XG4gIH1cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgY3JlZGVudGlhbHM6IGFueVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSlcbiAgYWN0aXZlID0gdHJ1ZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgZXNidXJsID0gJydcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdG9rZW51cmwgPSAnJ1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG5cbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ3BhZ2Utdmlldyc6IFBhZ2VWaWV3O1xuICB9XG5cbn1cblxuIiwiZXhwb3J0IGNvbnN0IGZldGNoUXVlcnkgPSAodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBib2R5OiBhbnkpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAvL1RPRE86IGFkZCB1dGhcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAvL2VsaW1pbmFyXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgICBzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlQ3JlZGVudGlhbHMgPSBbXG4gIHtcbiAgICBcIm5hbWVcIjogXCJhdWN0aW9uc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovLzxpcD5cIixcbiAgICBcIm1ldGhvZHNcIjoge1xuICAgICAgXCJHRVRcIjogW10sXG4gICAgICBcIlBPU1RcIjogW10sXG4gICAgICBcIlBVVFwiOiBbXSxcbiAgICB9LFxuICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgXCJzZXJ2aWNlX2lkXCI6IFwiMTIzNDU2Nzg5MTIzNDU2Nzg5XCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwic3ViYXN0YXMxMjMqKlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICBcIkdFVFwiOiBbXSxcbiAgICAgIFwiUE9TVFwiOiBbXSxcbiAgICAgIFwiUFVUXCI6IFtdLFxuICAgIH0sXG4gICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICBcInNlcnZpY2VfaWRcIjogXCI5ODc2NTQzMjE5ODc2NTQzMjFcIixcbiAgICAgIFwicGFzc3dvcmRcIjogXCJhc2VndXJhZG9yYTEyMyoqXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJpbnZlbnRvcnlcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly88aXA+XCIsXG4gICAgXCJtZXRob2RzXCI6IHtcbiAgICAgIFwiR0VUXCI6IFtdLFxuICAgICAgXCJQT1NUXCI6IFtdLFxuICAgICAgXCJQVVRcIjogW10sXG4gICAgfSxcbiAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgIFwic2VydmljZV9pZFwiOiBcIjk5OTg4ODc3NzY2NjU1NTQ0NFwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcIm9maWNpbmExMjMqKlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRVNCXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG5cbiAgICB9XG4gIH1cbl0iXSwic291cmNlUm9vdCI6IiJ9