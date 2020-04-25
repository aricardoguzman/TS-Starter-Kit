(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
/* harmony import */ var _requests_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../requests/request */ "./src/requests/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let LoginView = class LoginView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super(...arguments);
        this.tokenURL = 'http://35.193.70.253/GetToken?client_id=999888777666555444&password=oficina123**';
        this.officeURL = 'http://35.225.144.113/Afiliado';
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

        h1 {
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
        <h1 class="headline-1"> ${this.title} </h1>
        <div class="underline" style="margin-bottom: 40px;"></div>
        <custom-input label="Username" id="username"></custom-input>
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
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.tokenURL, 'GET', undefined);
        //alert(token);
        //This request goes to the ESB
        let username = this._('username').value;
        let password = this._('password').value;
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this._constructURL(token.token, username, password), this.suscribe ? 'POST' : 'GET', undefined)
            .then((data) => {
            this.fire('auth-changed', data);
        }).catch((err) => {
            console.log(err);
        });
    }
    _constructURL(token, username, password) {
        return `${this.officeURL}?jwt=${token}&codigo=${username}&password=${password}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4tdmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdHMvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDOUI7QUFDcUM7QUFDekI7QUFDRjtBQUNBO0FBR2pELElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVUsU0FBUSxtREFBUTtJQUF2Qzs7UUFFRSxhQUFRLEdBQUcsa0ZBQWtGLENBQUM7UUFDOUYsY0FBUyxHQUFHLGdDQUFnQyxDQUFDO1FBRzdDLFVBQUssR0FBRyxPQUFPLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWlHbkIsQ0FBQztJQS9GQyxNQUFNLEtBQUssTUFBTTtRQUNmLE9BQU87WUFDTCxHQUFHLEtBQUssQ0FBQyxNQUFNO1lBQ2Ysc0VBQVk7WUFDWix5RUFBZTtZQUNmLGlEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Q0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLGtEQUFJOztrQ0FFbUIsSUFBSSxDQUFDLEtBQUs7Ozs7Ozt3RkFNNEMsSUFBSSxDQUFDLFlBQVk7OztvQ0FHckUsSUFBSSxDQUFDLGFBQWE7Ozs7S0FJakQsQ0FBQztJQUNKLENBQUM7SUFFTyxLQUFLLENBQUMsYUFBYTtRQUV6Qix5QkFBeUI7UUFDekIsSUFBSSxLQUFLLEdBQVEsTUFBTSxvRUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLGVBQWU7UUFDZiw4QkFBOEI7UUFDOUIsSUFBSSxRQUFRLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFHLENBQUMsS0FBSyxDQUFDO1FBQzdELElBQUksUUFBUSxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBRyxDQUFDLEtBQUssQ0FB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QU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1NBQy9CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsWUFBWSxFQUFFLG9CQUFvQjtZQUNsQyxVQUFVLEVBQUUsY0FBYztTQUMzQjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsS0FBSztRQUNiLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFNBQVMsRUFBRSxFQUVWO0tBQ0Y7Q0FDRiIsImZpbGUiOiI0NWUwZmJhMDhlNjc0ZTVlMGQzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUGFnZVZpZXcgfSBmcm9tICcuL3BhZ2Utdmlldyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUsIEJ1dHRvblN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2NhcmQtY29tcG9uZW50JztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvaW5wdXQvY3VzdG9tLWlucHV0JztcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcblxuQGN1c3RvbUVsZW1lbnQoJ2xvZ2luLXZpZXcnKVxuZXhwb3J0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICB0b2tlblVSTCA9ICdodHRwOi8vMzUuMTkzLjcwLjI1My9HZXRUb2tlbj9jbGllbnRfaWQ9OTk5ODg4Nzc3NjY2NTU1NDQ0JnBhc3N3b3JkPW9maWNpbmExMjMqKic7XG4gIG9mZmljZVVSTCA9ICdodHRwOi8vMzUuMjI1LjE0NC4xMTMvQWZpbGlhZG8nO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuICB0aXRsZSA9ICdMb2dpbic7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzdXNjcmliZSA9IGZhbHNlO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5zdHlsZXMsXG4gICAgICBCdXR0b25TdHlsZXMsXG4gICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0e1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICByaXBwbGUtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGMoMTV2aCAtIDY0cHgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJveC0yZHApO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b20taW5wdXR7XG4gICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uYnV0dG9uLmxpbmtlZC1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDBweCl7XG4gICAgICAgICAgLmZvcm17XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+ICR7dGhpcy50aXRsZX0gPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNDBweDtcIj48L2Rpdj5cbiAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIlVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCI+PC9jdXN0b20taW5wdXQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIiBzeXRsZT1cIm1hcmdpbi10b3A6IDQwcHg7XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW46YXV0bzsgd2lkdGg6NTcuNSU7XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwic3VzY3JpYmVcIiBuYW1lPVwic3VzY3JpYmVcIiB2YWx1ZT1cImZhbHNlXCIgQGNoYW5nZT1cIiR7dGhpcy5fY2hhbmdlVGl0bGV9XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2FwdGlvblwiIGZvcj1cInN1c2NyaWJlXCI+Tm8gdGllbmVzIHVuYSBjdWVudGE/PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxyaXBwbGUtY29udGFpbmVyICBAY2xpY2s9JHt0aGlzLl9hdXRoZW50aWNhdGV9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L3JpcHBsZS1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYXV0aGVudGljYXRlKCkge1xuXG4gICAgLy9UT0RPOiBnZXQgc2VydmljZSB0b2tlblxuICAgIGxldCB0b2tlbjogYW55ID0gYXdhaXQgZmV0Y2hRdWVyeSh0aGlzLnRva2VuVVJMLCAnR0VUJywgdW5kZWZpbmVkKTtcbiAgICAvL2FsZXJ0KHRva2VuKTtcbiAgICAvL1RoaXMgcmVxdWVzdCBnb2VzIHRvIHRoZSBFU0JcbiAgICBsZXQgdXNlcm5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5fKCd1c2VybmFtZScpKSEudmFsdWU7XG4gICAgbGV0IHBhc3N3b3JkID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygncGFzc3dvcmQnKSkhLnZhbHVlO1xuXG4gICAgZmV0Y2hRdWVyeSh0aGlzLl9jb25zdHJ1Y3RVUkwoPHN0cmluZz50b2tlbi50b2tlbiwgPHN0cmluZz51c2VybmFtZSwgPHN0cmluZz5wYXNzd29yZCksIHRoaXMuc3VzY3JpYmUgPyAnUE9TVCcgOiAnR0VUJywgdW5kZWZpbmVkKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKCdhdXRoLWNoYW5nZWQnLCBkYXRhKVxuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSlcblxuICB9XG5cbiAgcHJpdmF0ZSBfY29uc3RydWN0VVJMKHRva2VuOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLm9mZmljZVVSTH0/and0PSR7dG9rZW59JmNvZGlnbz0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWA7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VUaXRsZSgpIHtcbiAgICB0aGlzLnN1c2NyaWJlID0gKCg8SFRNTElucHV0RWxlbWVudD50aGlzLl8oJ3N1c2NyaWJlJykpLmNoZWNrZWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3VzY3JpYmUpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLnN1c2NyaWJlID8gXCJTVVNDUklCRVwiIDogXCJMT0dJTlwiO1xuICB9XG5cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICAnbG9naW4tdmlldyc6IExvZ2luVmlldztcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGZldGNoUXVlcnkgPSAodXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBib2R5OiBhbnkpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAvL1RPRE86IGFkZCB1dGhcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAvL2VsaW1pbmFyXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJlamVjdChyZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgICBzb2x2ZShyZXNwb25zZS5qc29uKCkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlQ3JlZGVudGlhbHMgPSBbXG4gIHtcbiAgICBcIm5hbWVcIjogXCJhdWN0aW9uc1wiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovLzxpcD5cIixcbiAgICBcIm1ldGhvZHNcIjoge1xuICAgICAgXCJHRVRcIjogW10sXG4gICAgICBcIlBPU1RcIjogW10sXG4gICAgICBcIlBVVFwiOiBbXSxcbiAgICB9LFxuICAgIFwiY3JlZGVudGlhbHNcIjoge1xuICAgICAgXCJzZXJ2aWNlX2lkXCI6IFwiMTIzNDU2Nzg5MTIzNDU2Nzg5XCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwic3ViYXN0YXMxMjMqKlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiaW5zdXJhbmNlXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG4gICAgICBcIkdFVFwiOiBbXSxcbiAgICAgIFwiUE9TVFwiOiBbXSxcbiAgICAgIFwiUFVUXCI6IFtdLFxuICAgIH0sXG4gICAgXCJjcmVkZW50aWFsc1wiOiB7XG4gICAgICBcInNlcnZpY2VfaWRcIjogXCI5ODc2NTQzMjE5ODc2NTQzMjFcIixcbiAgICAgIFwicGFzc3dvcmRcIjogXCJhc2VndXJhZG9yYTEyMyoqXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJpbnZlbnRvcnlcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly88aXA+XCIsXG4gICAgXCJtZXRob2RzXCI6IHtcbiAgICAgIFwiR0VUXCI6IFtdLFxuICAgICAgXCJQT1NUXCI6IFtdLFxuICAgICAgXCJQVVRcIjogW10sXG4gICAgfSxcbiAgICBcImNyZWRlbnRpYWxzXCI6IHtcbiAgICAgIFwic2VydmljZV9pZFwiOiBcIjk5OTg4ODc3NzY2NjU1NTQ0NFwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcIm9maWNpbmExMjMqKlwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiRVNCXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vPGlwPlwiLFxuICAgIFwibWV0aG9kc1wiOiB7XG5cbiAgICB9XG4gIH1cbl0iXSwic291cmNlUm9vdCI6IiJ9