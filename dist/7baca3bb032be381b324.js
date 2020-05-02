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
                    this.fire('user-changed', data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3JpcHBsZS1jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luLXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BhZ2Utdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdHMvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBSTlFLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxxREFBTztJQU92QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBTFYsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULFNBQUksR0FBRyxDQUFDLENBQUM7SUFJVCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDeEQsQ0FBQztJQUVNLG9CQUFvQjtRQUN6QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVELE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBa0NEO1NBQ0g7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUksZ0JBQWU7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxDQUFhO1FBQ2pDLElBQUksU0FBUyxHQUF1QixDQUFDLENBQUMsTUFBcUIsQ0FBQztRQUM1RCxJQUFJLE1BQU0sR0FB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QWtCLEdBQUc7SUFDaEM7UUFDRSxNQUFNLEVBQUUsVUFBVTtRQUNsQixLQUFLLEVBQUUsYUFBYTtRQUNwQixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELGFBQWEsRUFBRTtZQUNiLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsVUFBVSxFQUFFLGVBQWU7U0FDNUI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLFdBQVc7UUFDbkIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxhQUFhLEVBQUU7WUFDYixZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxrQkFBa0I7U0FDL0I7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLFdBQVc7UUFDbkIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxhQUFhLEVBQUU7WUFDYixZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFVBQVUsRUFBRSxjQUFjO1NBQzNCO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxLQUFLO1FBQ2IsS0FBSyxFQUFFLGFBQWE7UUFDcEIsU0FBUyxFQUFFLEVBRVY7S0FDRjtDQUNGIiwiZmlsZSI6IjdiYWNhM2JiMDMyYmUzODFiMzI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcywgaHRtbCB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ3JpcHBsZS1jb250YWluZXInKVxuZXhwb3J0IGNsYXNzIFJpcHBsZUVmZmVjdCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE51bWJlciB9KVxuICBwb3NYID0gMDtcbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHBvc1kgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fY2xpY2tIYW5kbGVyKVxuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9jbGlja0hhbmRsZXIpXG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgOmhvc3R7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6OnNsb3R0ZWQoKil7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICB6LWluZGV4OjUwO1xuICAgICAgfVxuXG4gICAgICAuaW5rIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgICAgIH1cblxuICAgICAgLmFuaW1hdGUge1xuICAgICAgICBhbmltYXRpb246cmlwcGxlIDAuNjVzIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyByaXBwbGUge1xuICAgICAgICAgIDEwMCUge29wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMi41KTt9XG4gICAgICB9YCxcbiAgICBdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmBcbiAgfVxuXG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlcihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgbGV0IHRhcmdldF9lbDogSFRNTEVsZW1lbnQgfCBudWxsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgbGV0IGlua19lbDogSFRNTEVsZW1lbnQgfCBudWxsID0gKDxIVE1MRWxlbWVudD50YXJnZXRfZWwpLnF1ZXJ5U2VsZWN0b3IoJy5pbmsnKSB8fCB0aGlzLiQkKCcuaW5rJyk7XG5cbiAgICBpZiAoaW5rX2VsKSB7XG4gICAgICBpbmtfZWwuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlua19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIGlua19lbC5jbGFzc0xpc3QuYWRkKCdpbmsnKTtcbiAgICAgIGlua19lbC5zdHlsZS53aWR0aCA9IGlua19lbC5zdHlsZS5oZWlnaHQgPSBNYXRoLm1heCh0YXJnZXRfZWwub2Zmc2V0V2lkdGgsIHRhcmdldF9lbC5vZmZzZXRIZWlnaHQpICsgJ3B4JztcbiAgICAgIHRoaXMuc2hhZG93Um9vdCEuYXBwZW5kQ2hpbGQoaW5rX2VsKTtcbiAgICB9XG5cbiAgICBpbmtfZWwuc3R5bGUubGVmdCA9IChlLm9mZnNldFggLSBpbmtfZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XG4gICAgaW5rX2VsLnN0eWxlLnRvcCA9IChlLm9mZnNldFkgLSBpbmtfZWwub2Zmc2V0SGVpZ2h0IC8gMikgKyAncHgnO1xuICAgIGlua19lbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdyaXBwbGUtY29udGFpbmVyJzogUmlwcGxlRWZmZWN0O1xuICB9XG59IiwiaW1wb3J0IHsgQmFzZUxpdCwgY3VzdG9tRWxlbWVudCwgcHJvcGVydHksIGNzcywgaHRtbCB9IGZyb20gJy4uLy4uL2Jhc2UtZWxlbWVudCc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2NhcmQtY29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IGV4dGVuZHMgQmFzZUxpdCB7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzaGFkb3dCb3ggPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgd2lkdGggPSAyNzU7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIGhlaWdodCA9IDMwMDtcblxuICBzdGF0aWMgc3R5bGVzID0gW1xuICAgIGNzc2BcbiAgICAgIDpob3N0KC5leHBhbmRlZCl7XG4gICAgICAgIHBhZGRpbmc6IGluaXRpYWw7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTIuNXB4IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmZhY2Uge1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZmFjZTEge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmcpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICAgIH1cblxuICAgICAgLmZhY2UyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLTRkcCwgbm9uZSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICB9XG5cblxuICAgICAgc2xvdFtuYW1lPVwiaW1nXCJdOjpzbG90dGVkKCope1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDI1MG1zIGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSAuY29udGVudHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTIge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZWxldmF0aW9uLThkcCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcikgc2xvdFtuYW1lPVwiaW1nXCJdOjpzbG90dGVkKCopLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTEsXG4gICAgICA6aG9zdCg6aG92ZXIpIC5mYWNlMSAuY29udGVudCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3ZlcikgLmZhY2UyLFxuICAgICAgOmhvc3QoOmhvdmVyKSAuZmFjZTIgLmNvbnRlbnQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguZXhwYW5kZWQpIC5mYWNlMSxcbiAgICAgIDpob3N0KC5leHBhbmRlZCkgLmZhY2Uye1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB9XG5cbiAgICBgXG4gIF1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7dGhpcy53aWR0aCAhPSAyNzUgfHwgdGhpcy5oZWlnaHQgIT0gMzAwID8gaHRtbGBcbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgICAuZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3RoaXMud2lkdGh9cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJHt0aGlzLmhlaWdodCAtIDI1fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA6aG9zdHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAke3RoaXMuaGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICA6aG9zdCguZXhwYW5kZWQpe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7MiAqIHRoaXMuaGVpZ2h0fXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIGA6ICcnfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZSBmYWNlMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiaW1nXCI+PC9zbG90PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY2UgZmFjZTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRhaW5lclwiPjwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICA8L2Rpdj5gXG4gIH1cblxuICBwcm9wczogYW55ID0ge31cbiAgZm9yd2FyZHM6IEJvb2xlYW4gPSB0cnVlXG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLnByb3BzWydfdHJhbnNpdGlvbkhhbmRsZXInXSA9IHRoaXMuX3RyYW5zaXRpb25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5wcm9wcy5fdHJhbnNpdGlvbkhhbmRsZXIpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMucHJvcHMuX3RyYW5zaXRpb25IYW5kbGVyKTtcbiAgICAvL3RoaXMuZmlyZSgnYXBwLXJlc2V0LWxheW91dCcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF90cmFuc2l0aW9uSGFuZGxlcihlOiBFdmVudCk6IHZvaWQge1xuXG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWVudGVyXCIgJiYgIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgfSBlbHNlIGlmIChlLnR5cGUgPT09IFwibW91c2VsZWF2ZVwiICYmIHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2NhcmQtY29tcG9uZW50JzogQ2FyZENvbXBvbmVudDtcbiAgfVxufSIsImltcG9ydCB7IEJhc2VMaXQsIGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi8uLi9iYXNlLWVsZW1lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnY3VzdG9tLWlucHV0JylcbmV4cG9ydCBjbGFzcyBDdXN0b21JbnB1dCBleHRlbmRzIEJhc2VMaXQge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0eXBlID0gXCJcIlxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgcmVxdWlyZWQgPSBmYWxzZVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBsYWJlbCA9IFwiXCJcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdmFsdWUgPSBcIlwiXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICByZWFkT25seSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0e1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgPiAqIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWN1c3RvbS1pbnB1dC1jb2xvciwgdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgIzk5OSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jdXN0b20taW5wdXQtY29sb3IsIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IsICM5OTkpKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLnVuZGVybGluZXtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jdXN0b20taW5wdXQtY29sb3IsdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgcmVkKSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWN1c3RvbS1pbnB1dC1mb2N1cy1jb2xvcix2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IsIHJlZCkpO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoLnZhbGlkKSBzcGFuLFxuICAgICAgICBpbnB1dDpmb2N1cyB+IHNwYW57XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoLnZhbGlkKSBzcGFuLnVuZGVybGluZSxcbiAgICAgICAgaW5wdXQ6Zm9jdXMgfiBzcGFuLnVuZGVybGluZXtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoLnZhbGlkKSBsYWJlbCxcbiAgICAgICAgaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XG4gICAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWZvY3VzLWNvbG9yLHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6Zm9jdXN7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3VzdG9tLWlucHV0LWZvY3VzLWNvbG9yLHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICB9XG5cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiPjwvc2xvdD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCAudHlwZT1cIiR7dGhpcy50eXBlfVwiIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIiA/cmVxdWlyZWQ9JHt0aGlzLnJlcXVpcmVkfSAudmFsdWU9XCIke3RoaXMudmFsdWV9XCIgP3JlYWRPbmx5PSR7dGhpcy5yZWFkT25seX0+XG4gICAgICAgIDxsYWJlbD4ke3RoaXMubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNsb3QgbmFtZT1cInN1ZmZpeFwiPjwvc2xvdD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGU6IEV2ZW50KTogdm9pZCB7XG5cbiAgICBpZiAoKHRoaXMudmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZS50YXJnZXQpLnZhbHVlKSAhPSBcIlwiKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZFwiKVxuICAgIH1cbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2N1c3RvbS1pbnB1dCc6IEN1c3RvbUlucHV0XG4gIH1cbn0iLCJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IFBhZ2VWaWV3IH0gZnJvbSAnLi9wYWdlLXZpZXcnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVN0eWxlLCBCdXR0b25TdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvbWFpbi1zaGFyZWQtc3R5bGUnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9jYXJkcy9jYXJkLWNvbXBvbmVudCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5pbXBvcnQgJy4uL2NvbnRhaW5lci9yaXBwbGUtY29udGFpbmVyJztcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcblxuQGN1c3RvbUVsZW1lbnQoJ2xvZ2luLXZpZXcnKVxuZXhwb3J0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgdGl0bGUgPSAnTG9naW4nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgc3VzY3JpYmUgPSBmYWxzZTtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuc3R5bGVzLFxuICAgICAgQnV0dG9uU3R5bGVzLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmlwcGxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTV2aCAtIDY0cHgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveC0yZHApO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b20taW5wdXR7XG4gICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uYnV0dG9uLmxpbmtlZC1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCl7XG4gICAgICAgICAgLmZvcm17XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+ICR7dGhpcy50aXRsZX0gPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNDBweDtcIj48L2Rpdj5cbiAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIiR7dGhpcy5zdXNjcmliZSA/ICdOb21icmUnIDogJ0NvZGlnbyd9XCIgaWQ9XCJ1c2VybmFtZVwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCI+PC9jdXN0b20taW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIiBzeXRsZT1cIm1hcmdpbi10b3A6IDQwcHg7XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46YXV0bzsgd2lkdGg6NTcuNSU7XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3VzY3JpYmVcIiBuYW1lPVwic3VzY3JpYmVcIiB2YWx1ZT1cImZhbHNlXCIgQGNoYW5nZT1cIiR7dGhpcy5fY2hhbmdlVGl0bGV9XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiIGZvcj1cInN1c2NyaWJlXCI+Tm8gdGllbmVzIHVuYSBjdWVudGE/PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxyaXBwbGUtY29udGFpbmVyICBAY2xpY2s9JHt0aGlzLl9hdXRoZW50aWNhdGV9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L3JpcHBsZS1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYXV0aGVudGljYXRlKCkge1xuXG4gICAgLy9UT0RPOiBnZXQgc2VydmljZSB0b2tlblxuICAgIGxldCB0b2tlbjogYW55ID0gYXdhaXQgZmV0Y2hRdWVyeSh0aGlzLnRva2VudXJsLCAnUE9TVCcsIHRoaXMuY3JlZGVudGlhbHMpO1xuICAgIC8vYWxlcnQodG9rZW4pO1xuICAgIC8vVGhpcyByZXF1ZXN0IGdvZXMgdG8gdGhlIEVTQlxuICAgIGxldCB1c2VybmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzLl8oJ3VzZXJuYW1lJykpIS52YWx1ZTtcbiAgICBsZXQgcGFzc3dvcmQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5fKCdwYXNzd29yZCcpKSEudmFsdWU7XG5cbiAgICBpZiAoIXRoaXMuc3VzY3JpYmUpIHtcbiAgICAgIGZldGNoUXVlcnkodGhpcy5fY29uc3RydWN0VVJMKDxzdHJpbmc+dG9rZW4udG9rZW4sIDxzdHJpbmc+dXNlcm5hbWUsIDxzdHJpbmc+cGFzc3dvcmQpLCAnR0VUJywgdW5kZWZpbmVkKVxuICAgICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuY29kZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEuY29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVW5hdXRob3JpemVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZmlyZSgnYXV0aC1jaGFuZ2VkJywgZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVycm9yXCIsIHsgZGV0YWlsOiBcIkNyZWRlbmNpYWxlcyBpbnbDoWxpZGFzXCIgfSkpO1xuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFF1ZXJ5KGAke3RoaXMuZXNidXJsfS9BZmlsaWFkb2AsICdQT1NUJywgeyBqd3Q6IHRva2VuLnRva2VuLCBub21icmU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmNvZGUgIT09IHVuZGVmaW5lZCAmJiBkYXRhLmNvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1VuYWJsZSB0byBjaGFuZ2UgZGF0YScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3VzZXItY2hhbmdlZCcsIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZXJyb3JcIiwgeyBkZXRhaWw6IFwiT2N1cnJpw7MgdW4gZXJyb3IgYWwgYWN0dWFsaXphciBkYXRhXCIgfSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gIH1cblxuICBwcml2YXRlIF9jb25zdHJ1Y3RVUkwodG9rZW46IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZXNidXJsfS9BZmlsaWFkbz9qd3Q9JHt0b2tlbn0mY29kaWdvPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YDtcbiAgfVxuXG4gIHByaXZhdGUgX2NoYW5nZVRpdGxlKCkge1xuICAgIHRoaXMuc3VzY3JpYmUgPSAoKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygnc3VzY3JpYmUnKSkuY2hlY2tlZCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdXNjcmliZSk7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuc3VzY3JpYmUgPyBcIlNVU0NSSUJFXCIgOiBcIkxPR0lOXCI7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdsb2dpbi12aWV3JzogTG9naW5WaWV3O1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlTGl0LCBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSwgY3NzIH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcblxuQGN1c3RvbUVsZW1lbnQoJ3BhZ2UtdmlldycpXG5leHBvcnQgY2xhc3MgUGFnZVZpZXcgZXh0ZW5kcyBCYXNlTGl0IHtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuXG4gICAgICA6aG9zdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVJbntcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVPdXR7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FjdGl2ZV0pe1xuICAgICAgICBhbmltYXRpb246IGZvcndhcmRzIGZhZGVJbiA1MDBtcztcbiAgICAgIH1cbiAgICBgXTtcbiAgfVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBjcmVkZW50aWFsczogYW55XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZSB9KVxuICBhY3RpdmUgPSB0cnVlO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICBlc2J1cmwgPSAnJ1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0b2tlbnVybCA9ICcnXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAncGFnZS12aWV3JzogUGFnZVZpZXc7XG4gIH1cblxufVxuXG4iLCJleHBvcnQgY29uc3QgZmV0Y2hRdWVyeSA9ICh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGJvZHk6IGFueSkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIC8vVE9ETzogYWRkIHV0aFxuICAgIGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIC8vZWxpbWluYXJcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKVxuICAgICAgICB9XG4gICAgICAgIHNvbHZlKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSlcbiAgfSk7XG59XG5cblxuZXhwb3J0IGNvbnN0IHNlcnZpY2VDcmVkZW50aWFscyA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcImF1Y3Rpb25zXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICBcIkdFVFwiOiBbXSxcbiAgICAgIFwiUE9TVFwiOiBbXSxcbiAgICAgIFwiUFVUXCI6IFtdLFxuICAgIH0sXG4gICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICBcInNlcnZpY2VfaWRcIjogXCIxMjM0NTY3ODkxMjM0NTY3ODlcIixcbiAgICAgIFwicGFzc3dvcmRcIjogXCJzdWJhc3RhczEyMyoqXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJpbnN1cmFuY2VcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly88aXA+XCIsXG4gICAgXCJtZXRob2RzXCI6IHtcbiAgICAgIFwiR0VUXCI6IFtdLFxuICAgICAgXCJQT1NUXCI6IFtdLFxuICAgICAgXCJQVVRcIjogW10sXG4gICAgfSxcbiAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgIFwic2VydmljZV9pZFwiOiBcIjk4NzY1NDMyMTk4NzY1NDMyMVwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcImFzZWd1cmFkb3JhMTIzKipcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcImludmVudG9yeVwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovLzxpcD5cIixcbiAgICBcIm1ldGhvZHNcIjoge1xuICAgICAgXCJHRVRcIjogW10sXG4gICAgICBcIlBPU1RcIjogW10sXG4gICAgICBcIlBVVFwiOiBbXSxcbiAgICB9LFxuICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgXCJzZXJ2aWNlX2lkXCI6IFwiOTk5ODg4Nzc3NjY2NTU1NDQ0XCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwib2ZpY2luYTEyMyoqXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJFU0JcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly88aXA+XCIsXG4gICAgXCJtZXRob2RzXCI6IHtcblxuICAgIH1cbiAgfVxuXSJdLCJzb3VyY2VSb290IjoiIn0=