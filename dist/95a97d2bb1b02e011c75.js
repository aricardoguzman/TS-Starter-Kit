(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/pages/profile-view.ts":
/*!***********************************!*\
  !*** ./src/pages/profile-view.ts ***!
  \***********************************/
/*! exports provided: ProfileView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileView", function() { return ProfileView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
/* harmony import */ var _custom_components_cards_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-components/cards/carousel-component */ "./src/custom-components/cards/carousel-component.ts");
/* harmony import */ var _requests_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../requests/request */ "./src/requests/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { fetchQuery, serviceCredentials } from '../requests/request';

let ProfileView = class ProfileView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super(...arguments);
        this.user = {};
        this.payment = {};
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

        h1,h2 {
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
          grid-column: 1 / 3;
          margin: auto;
        }


        .buttons{
          margin: auto;
          width: 25%;
        }

        button {
          height: 50px;
        }

        .payment {
          text-align: center;
          padding: 25px;
          box-sizing: border-box;
        }

        .grid{
          display: grid;
          grid-template-columns: repeat(2,1fr);
          background: var(--divider-color);
          grid-gap: 1px;
        }

        .grid > div{
          background: white;
        }

        custom-input{
          margin: 5px auto;
        }

        .payment.card {
          display:grid;
          grid-template-columns: repeat(2,1fr);
          grid-template-rows: repeat(2,1fr);
        }

        .ccform {
          grid-column: 1/3;
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
    <h1 class="headline-1">Mi perfil</h1>
    <div class="grid">
      <div>
        <div class="heading">
            <h2 class="headline-2">Datos</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
          <custom-input label="Nombre" id="name"></custom-input>
          <custom-input label="Contraseña" id="password" type="password"></custom-input>
          <ripple-container  @click=${this.changeNamePassword}>
            <button class="button linked-btn">Cambiar</button>
          </ripple-container>
        </div>
      </div>
      <div>
        <div class="heading">
            <h2 class="headline-2">Ver Pago</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
      ${Object.keys(this.payment).map(el => _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
              <div class="caption">${el}</div><div class="subtitle">${this.payment[el]}</div>
      `)}
          <ripple-container  @click=${this.requestPayment}>
            <button class="button linked-btn">Consultar</button>
          </ripple-container>
        </div>
      </div>
      <div class="ccform">
        <div class="heading">
            <h2 class="headline-2">Pago afiliación</h2>
            <div class="underline"></div>
        </div>
        <div class="payment card">
          <custom-input label="Dueño" id="codigo" .value=${this.user.codigo}></custom-input>
          <custom-input label="CVV" id="cvv"></custom-input>
          <custom-input label="Número de tarjeta" id="cardNumber"></custom-input>
          <custom-input label="Cantidad" id="monto"></custom-input>
          <ripple-container  @click=${this.makePayment}>
            <button class="button linked-btn">Confirmar</button>
          </ripple-container>
        </div>
      </div>
    </div>
    `;
    }
    async requestPayment() {
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.tokenurl, 'POST', this.credentials);
        let url = `/Pago?jwt=${token.token}&codigo=${this.user.codigo}`;
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.esburl + url, "GET", undefined)
            .then((data) => {
            if (data.id === undefined)
                throw Error('error');
            this.payment = data;
        })
            .catch((err) => {
            window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error" }));
            this.payment = {};
            console.log(err);
        });
    }
    async makePayment() {
        if (this.user.vigente) {
            window.dispatchEvent(new CustomEvent("error", { detail: "No es posible procesar pago" }));
            return;
        }
        let monto = this._('monto').value;
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.tokenurl, 'POST', this.credentials);
        let data = {
            jwt: token.token,
            codigo: this.user.codigo,
            monto: parseFloat(monto)
        };
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.esburl + '/Pago', "POST", data)
            .then((data) => {
            console.log(data);
            this.fire("user-payed");
        })
            .catch((err) => {
            window.dispatchEvent(new CustomEvent("error", { detail: "Ocurrió un error" }));
            console.log(err);
        });
    }
    async changeNamePassword() {
        let token = await Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.tokenurl, 'POST', this.credentials);
        let name = this._('name').value;
        let password = this._('password').value;
        let data = {
            jwt: token.token,
            codigo: this.user.codigo,
        };
        if (password != '')
            data.password = password;
        if (name != '')
            data.nombre = name;
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_5__["fetchQuery"])(this.esburl + '/Afiliado', "PUT", data)
            .then((d) => {
            console.log(d);
            this.fire("user-payed");
        })
            .catch((err) => {
            alert("Ocurrió un error");
            console.log(err);
        });
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], ProfileView.prototype, "user", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], ProfileView.prototype, "payment", void 0);
ProfileView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('profile-view')
], ProfileView);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZmlsZS12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUM5QjtBQUNxQztBQUMzQjtBQUNNO0FBQ3ZELHVFQUF1RTtBQUN0QjtBQUlqRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsbURBQVE7SUFBekM7O1FBR0UsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUdmLFlBQU8sR0FBUSxFQUFFO0lBbU9uQixDQUFDO0lBak9DLE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDZix5RUFBZTtZQUNmLHNFQUFZO1lBQ1osaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTBGRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUk7Ozs7Ozs7Ozs7O3NDQVd1QixJQUFJLENBQUMsa0JBQWtCOzs7Ozs7Ozs7OztRQVl2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrREFBSTtxQ0FDVCxFQUFFLCtCQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztPQUMvRSxDQUNEO3NDQUNnQyxJQUFJLENBQUMsY0FBYzs7Ozs7Ozs7Ozs7MkRBV0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O3NDQUlyQyxJQUFJLENBQUMsV0FBVzs7Ozs7O0tBTWpELENBQUM7SUFDSixDQUFDO0lBRU8sS0FBSyxDQUFDLGNBQWM7UUFFMUIsSUFBSSxLQUFLLEdBQVEsTUFBTSxvRUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxX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Q0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFckIsb0VBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2FBQy9DLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFRjtBQXRPQztJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7eUNBQ1o7QUFHZjtJQURDLDhEQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7NENBQ1Y7QUFOTixXQUFXO0lBRHZCLG1FQUFhLENBQUMsY0FBYyxDQUFDO0dBQ2pCLFdBQVcsQ0F5T3ZCO0FBek91QiIsImZpbGUiOiI5NWE5N2QyYmIxYjAyZTAxMWM3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUGFnZVZpZXcgfSBmcm9tICcuL3BhZ2Utdmlldyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUsIEJ1dHRvblN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2Nhcm91c2VsLWNvbXBvbmVudCc7XG4vL2ltcG9ydCB7IGZldGNoUXVlcnksIHNlcnZpY2VDcmVkZW50aWFscyB9IGZyb20gJy4uL3JlcXVlc3RzL3JlcXVlc3QnO1xuaW1wb3J0IHsgZmV0Y2hRdWVyeSB9IGZyb20gJy4uL3JlcXVlc3RzL3JlcXVlc3QnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdwcm9maWxlLXZpZXcnKVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVWaWV3IGV4dGVuZHMgUGFnZVZpZXcge1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICB1c2VyOiBhbnkgPSB7fTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgcGF5bWVudDogYW55ID0ge31cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuc3R5bGVzLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgQnV0dG9uU3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm17XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgZ3JpZC1nYXA6IDFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSA+ICoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGwtbGluZSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEsaDIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbS1jb3VudGVye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICByaXBwbGUtY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmJ1dHRvbnN7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYXltZW50IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWR7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgZ3JpZC1nYXA6IDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkID4gZGl2e1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VzdG9tLWlucHV0e1xuICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucGF5bWVudC5jYXJkIHtcbiAgICAgICAgICBkaXNwbGF5OmdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jY2Zvcm0ge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj5NaSBwZXJmaWw8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPkRhdG9zPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50IGNhcmRcIj5cbiAgICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiTm9tYnJlXCIgaWQ9XCJuYW1lXCI+PC9jdXN0b20taW5wdXQ+XG4gICAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIkNvbnRyYXNlw7FhXCIgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICAgIDxyaXBwbGUtY29udGFpbmVyICBAY2xpY2s9JHt0aGlzLmNoYW5nZU5hbWVQYXNzd29yZH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxpbmtlZC1idG5cIj5DYW1iaWFyPC9idXR0b24+XG4gICAgICAgICAgPC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRsaW5lLTJcIj5WZXIgUGFnbzwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudCBjYXJkXCI+XG4gICAgICAke1xuICAgICAgT2JqZWN0LmtleXModGhpcy5wYXltZW50KS5tYXAoZWwgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcHRpb25cIj4ke2VsfTwvZGl2PjxkaXYgY2xhc3M9XCJzdWJ0aXRsZVwiPiR7dGhpcy5wYXltZW50W2VsXX08L2Rpdj5cbiAgICAgIGApXG4gICAgICB9XG4gICAgICAgICAgPHJpcHBsZS1jb250YWluZXIgIEBjbGljaz0ke3RoaXMucmVxdWVzdFBheW1lbnR9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+Q29uc3VsdGFyPC9idXR0b24+XG4gICAgICAgICAgPC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNjZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiaGVhZGxpbmUtMlwiPlBhZ28gYWZpbGlhY2nDs248L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheW1lbnQgY2FyZFwiPlxuICAgICAgICAgIDxjdXN0b20taW5wdXQgbGFiZWw9XCJEdWXDsW9cIiBpZD1cImNvZGlnb1wiIC52YWx1ZT0ke3RoaXMudXNlci5jb2RpZ299PjwvY3VzdG9tLWlucHV0PlxuICAgICAgICAgIDxjdXN0b20taW5wdXQgbGFiZWw9XCJDVlZcIiBpZD1cImN2dlwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICAgIDxjdXN0b20taW5wdXQgbGFiZWw9XCJOw7ptZXJvIGRlIHRhcmpldGFcIiBpZD1cImNhcmROdW1iZXJcIj48L2N1c3RvbS1pbnB1dD5cbiAgICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiQ2FudGlkYWRcIiBpZD1cIm1vbnRvXCI+PC9jdXN0b20taW5wdXQ+XG4gICAgICAgICAgPHJpcHBsZS1jb250YWluZXIgIEBjbGljaz0ke3RoaXMubWFrZVBheW1lbnR9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+Q29uZmlybWFyPC9idXR0b24+XG4gICAgICAgICAgPC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlcXVlc3RQYXltZW50KCkge1xuXG4gICAgbGV0IHRva2VuOiBhbnkgPSBhd2FpdCBmZXRjaFF1ZXJ5KHRoaXMudG9rZW51cmwsICdQT1NUJywgdGhpcy5jcmVkZW50aWFscyk7XG5cbiAgICBsZXQgdXJsID0gYC9QYWdvP2p3dD0ke3Rva2VuLnRva2VufSZjb2RpZ289JHt0aGlzLnVzZXIuY29kaWdvfWBcblxuICAgIGZldGNoUXVlcnkodGhpcy5lc2J1cmwgKyB1cmwsIFwiR0VUXCIsIHVuZGVmaW5lZClcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuaWQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aHJvdyBFcnJvcignZXJyb3InKVxuICAgICAgICB0aGlzLnBheW1lbnQgPSBkYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVycm9yXCIsIHsgZGV0YWlsOiBcIk9jdXJyacOzIHVuIGVycm9yXCIgfSkpO1xuICAgICAgICB0aGlzLnBheW1lbnQgPSB7fVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1ha2VQYXltZW50KCkge1xuXG4gICAgaWYgKHRoaXMudXNlci52aWdlbnRlKSB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlcnJvclwiLCB7IGRldGFpbDogXCJObyBlcyBwb3NpYmxlIHByb2Nlc2FyIHBhZ29cIiB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG1vbnRvID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygnbW9udG8nKSkudmFsdWU7XG5cbiAgICBsZXQgdG9rZW46IGFueSA9IGF3YWl0IGZldGNoUXVlcnkodGhpcy50b2tlbnVybCwgJ1BPU1QnLCB0aGlzLmNyZWRlbnRpYWxzKTtcblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgand0OiB0b2tlbi50b2tlbixcbiAgICAgIGNvZGlnbzogdGhpcy51c2VyLmNvZGlnbyxcbiAgICAgIG1vbnRvOiBwYXJzZUZsb2F0KG1vbnRvKVxuICAgIH1cbiAgICBmZXRjaFF1ZXJ5KHRoaXMuZXNidXJsICsgJy9QYWdvJywgXCJQT1NUXCIsIGRhdGEpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5maXJlKFwidXNlci1wYXllZFwiKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImVycm9yXCIsIHsgZGV0YWlsOiBcIk9jdXJyacOzIHVuIGVycm9yXCIgfSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZU5hbWVQYXNzd29yZCgpIHtcblxuICAgIGxldCB0b2tlbjogYW55ID0gYXdhaXQgZmV0Y2hRdWVyeSh0aGlzLnRva2VudXJsLCAnUE9TVCcsIHRoaXMuY3JlZGVudGlhbHMpO1xuICAgIGxldCBuYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygnbmFtZScpKS52YWx1ZTtcbiAgICBsZXQgcGFzc3dvcmQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5fKCdwYXNzd29yZCcpKS52YWx1ZTtcblxuICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICBqd3Q6IHRva2VuLnRva2VuLFxuICAgICAgY29kaWdvOiB0aGlzLnVzZXIuY29kaWdvLFxuICAgIH1cblxuICAgIGlmIChwYXNzd29yZCAhPSAnJylcbiAgICAgIGRhdGEucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICBpZiAobmFtZSAhPSAnJylcbiAgICAgIGRhdGEubm9tYnJlID0gbmFtZTtcblxuICAgIGZldGNoUXVlcnkodGhpcy5lc2J1cmwgKyAnL0FmaWxpYWRvJywgXCJQVVRcIiwgZGF0YSlcbiAgICAgIC50aGVuKChkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICB0aGlzLmZpcmUoXCJ1c2VyLXBheWVkXCIpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvclwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdwcm9maWxlLXZpZXcnOiBQcm9maWxlVmlldztcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9