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
            window.dispatchEvent(new CustomEvent('error', { detail: "Cambios realizados correctamente" }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZmlsZS12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUM5QjtBQUNxQztBQUMzQjtBQUNNO0FBQ3ZELHVFQUF1RTtBQUN0QjtBQUlqRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFZLFNBQVEsbURBQVE7SUFBekM7O1FBR0UsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUdmLFlBQU8sR0FBUSxFQUFFO0lBbU9uQixDQUFDO0lBak9DLE1BQU0sS0FBSyxNQUFNO1FBQ2YsT0FBTztZQUNMLEdBQUcsS0FBSyxDQUFDLE1BQU07WUFDZix5RUFBZTtZQUNmLHNFQUFZO1lBQ1osaURBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTBGRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sa0RBQUk7Ozs7Ozs7Ozs7O3NDQVd1QixJQUFJLENBQUMsa0JBQWtCOzs7Ozs7Ozs7OztRQVl2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxrREFBSTtxQ0FDVCxFQUFFLCtCQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztPQUMvRSxDQUNEO3NDQUNnQyxJQUFJLENBQUMsY0FBYzs7Ozs7Ozs7Ozs7MkRBV0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O3NDQUlyQyxJQUFJLENBQUMsV0FBVzs7Ozs7O0tBTWpELENBQUM7SUFDSixDQUFDO0lBRU8sS0FBSyxDQUFDLGNBQWM7UUFFMUIsSUFBSSxLQUFLLEdBQVEsTUFBTSxvRUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxX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Q0FBQztRQUMzQixJQUFJLElBQUksSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFckIsb0VBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2FBQy9DLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLGtDQUFrQyxFQUFFLENBQUMsQ0FBQztRQUNoRyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNiLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUY7QUF0T0M7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQUNaO0FBR2Y7SUFEQyw4REFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOzRDQUNWO0FBTk4sV0FBVztJQUR2QixtRUFBYSxDQUFDLGNBQWMsQ0FBQztHQUNqQixXQUFXLENBeU92QjtBQXpPdUIiLCJmaWxlIjoiMjBmZmU1OWI3YTY5YTAxY2FiZmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBodG1sLCBjc3MsIHByb3BlcnR5IH0gZnJvbSAnLi4vYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IFBhZ2VWaWV3IH0gZnJvbSAnLi9wYWdlLXZpZXcnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVN0eWxlLCBCdXR0b25TdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvbWFpbi1zaGFyZWQtc3R5bGUnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9pbnB1dC9jdXN0b20taW5wdXQnO1xuaW1wb3J0ICcuLi9jdXN0b20tY29tcG9uZW50cy9jYXJkcy9jYXJvdXNlbC1jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBmZXRjaFF1ZXJ5LCBzZXJ2aWNlQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcblxuXG5AY3VzdG9tRWxlbWVudCgncHJvZmlsZS12aWV3JylcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgdXNlcjogYW55ID0ge307XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHBheW1lbnQ6IGFueSA9IHt9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLnN1cGVyLnN0eWxlcyxcbiAgICAgIFR5cG9ncmFwaHlTdHlsZSxcbiAgICAgIEJ1dHRvblN0eWxlcyxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3Jte1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0gPiAqIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mdWxsLWxpbmUge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLGgyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpXG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b20tY291bnRlcntcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmlwcGxlLWNvbnRhaW5lcntcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5idXR0b25ze1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGF5bWVudCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlke1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCA+IGRpdntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbS1pbnB1dHtcbiAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBheW1lbnQuY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTpncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY2Nmb3JtIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xuICAgICAgICB9XG4gICAgICBgXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+TWkgcGVyZmlsPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRsaW5lLTJcIj5EYXRvczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5bWVudCBjYXJkXCI+XG4gICAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIk5vbWJyZVwiIGlkPVwibmFtZVwiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICAgIDxjdXN0b20taW5wdXQgbGFiZWw9XCJDb250cmFzZcOxYVwiIGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIj48L2N1c3RvbS1pbnB1dD5cbiAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lciAgQGNsaWNrPSR7dGhpcy5jaGFuZ2VOYW1lUGFzc3dvcmR9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+Q2FtYmlhcjwvYnV0dG9uPlxuICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkbGluZS0yXCI+VmVyIFBhZ288L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheW1lbnQgY2FyZFwiPlxuICAgICAgJHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucGF5bWVudCkubWFwKGVsID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+JHtlbH08L2Rpdj48ZGl2IGNsYXNzPVwic3VidGl0bGVcIj4ke3RoaXMucGF5bWVudFtlbF19PC9kaXY+XG4gICAgICBgKVxuICAgICAgfVxuICAgICAgICAgIDxyaXBwbGUtY29udGFpbmVyICBAY2xpY2s9JHt0aGlzLnJlcXVlc3RQYXltZW50fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPkNvbnN1bHRhcjwvYnV0dG9uPlxuICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjY2Zvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRsaW5lLTJcIj5QYWdvIGFmaWxpYWNpw7NuPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXltZW50IGNhcmRcIj5cbiAgICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiRHVlw7FvXCIgaWQ9XCJjb2RpZ29cIiAudmFsdWU9JHt0aGlzLnVzZXIuY29kaWdvfT48L2N1c3RvbS1pbnB1dD5cbiAgICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiQ1ZWXCIgaWQ9XCJjdnZcIj48L2N1c3RvbS1pbnB1dD5cbiAgICAgICAgICA8Y3VzdG9tLWlucHV0IGxhYmVsPVwiTsO6bWVybyBkZSB0YXJqZXRhXCIgaWQ9XCJjYXJkTnVtYmVyXCI+PC9jdXN0b20taW5wdXQ+XG4gICAgICAgICAgPGN1c3RvbS1pbnB1dCBsYWJlbD1cIkNhbnRpZGFkXCIgaWQ9XCJtb250b1wiPjwvY3VzdG9tLWlucHV0PlxuICAgICAgICAgIDxyaXBwbGUtY29udGFpbmVyICBAY2xpY2s9JHt0aGlzLm1ha2VQYXltZW50fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPkNvbmZpcm1hcjwvYnV0dG9uPlxuICAgICAgICAgIDwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZXF1ZXN0UGF5bWVudCgpIHtcblxuICAgIGxldCB0b2tlbjogYW55ID0gYXdhaXQgZmV0Y2hRdWVyeSh0aGlzLnRva2VudXJsLCAnUE9TVCcsIHRoaXMuY3JlZGVudGlhbHMpO1xuXG4gICAgbGV0IHVybCA9IGAvUGFnbz9qd3Q9JHt0b2tlbi50b2tlbn0mY29kaWdvPSR7dGhpcy51c2VyLmNvZGlnb31gXG5cbiAgICBmZXRjaFF1ZXJ5KHRoaXMuZXNidXJsICsgdXJsLCBcIkdFVFwiLCB1bmRlZmluZWQpXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmlkID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ2Vycm9yJylcbiAgICAgICAgdGhpcy5wYXltZW50ID0gZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlcnJvclwiLCB7IGRldGFpbDogXCJPY3VycmnDsyB1biBlcnJvclwiIH0pKTtcbiAgICAgICAgdGhpcy5wYXltZW50ID0ge31cbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYWtlUGF5bWVudCgpIHtcblxuICAgIGlmICh0aGlzLnVzZXIudmlnZW50ZSkge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZXJyb3JcIiwgeyBkZXRhaWw6IFwiTm8gZXMgcG9zaWJsZSBwcm9jZXNhciBwYWdvXCIgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBtb250byA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzLl8oJ21vbnRvJykpLnZhbHVlO1xuXG4gICAgbGV0IHRva2VuOiBhbnkgPSBhd2FpdCBmZXRjaFF1ZXJ5KHRoaXMudG9rZW51cmwsICdQT1NUJywgdGhpcy5jcmVkZW50aWFscyk7XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGp3dDogdG9rZW4udG9rZW4sXG4gICAgICBjb2RpZ286IHRoaXMudXNlci5jb2RpZ28sXG4gICAgICBtb250bzogcGFyc2VGbG9hdChtb250bylcbiAgICB9XG4gICAgZmV0Y2hRdWVyeSh0aGlzLmVzYnVybCArICcvUGFnbycsIFwiUE9TVFwiLCBkYXRhKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuZmlyZShcInVzZXItcGF5ZWRcIilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJlcnJvclwiLCB7IGRldGFpbDogXCJPY3VycmnDsyB1biBlcnJvclwiIH0pKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2VOYW1lUGFzc3dvcmQoKSB7XG5cbiAgICBsZXQgdG9rZW46IGFueSA9IGF3YWl0IGZldGNoUXVlcnkodGhpcy50b2tlbnVybCwgJ1BPU1QnLCB0aGlzLmNyZWRlbnRpYWxzKTtcbiAgICBsZXQgbmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD50aGlzLl8oJ25hbWUnKSkudmFsdWU7XG4gICAgbGV0IHBhc3N3b3JkID0gKDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuXygncGFzc3dvcmQnKSkudmFsdWU7XG5cbiAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgand0OiB0b2tlbi50b2tlbixcbiAgICAgIGNvZGlnbzogdGhpcy51c2VyLmNvZGlnbyxcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQgIT0gJycpXG4gICAgICBkYXRhLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgaWYgKG5hbWUgIT0gJycpXG4gICAgICBkYXRhLm5vbWJyZSA9IG5hbWU7XG5cbiAgICBmZXRjaFF1ZXJ5KHRoaXMuZXNidXJsICsgJy9BZmlsaWFkbycsIFwiUFVUXCIsIGRhdGEpXG4gICAgICAudGhlbigoZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdlcnJvcicsIHsgZGV0YWlsOiBcIkNhbWJpb3MgcmVhbGl6YWRvcyBjb3JyZWN0YW1lbnRlXCIgfSkpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgYWxlcnQoXCJPY3VycmnDsyB1biBlcnJvclwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuXG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdwcm9maWxlLXZpZXcnOiBQcm9maWxlVmlldztcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9