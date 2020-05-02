(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./src/pages/auction-view.ts":
/*!***********************************!*\
  !*** ./src/pages/auction-view.ts ***!
  \***********************************/
/*! exports provided: AuctionView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionView", function() { return AuctionView; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-element */ "./src/base-element.ts");
/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-view */ "./src/pages/page-view.ts");
/* harmony import */ var _styles_main_shared_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main-shared-style */ "./src/styles/main-shared-style.ts");
/* harmony import */ var _custom_components_input_custom_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-components/input/custom-input */ "./src/custom-components/input/custom-input.ts");
/* harmony import */ var _custom_components_cards_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-components/cards/carousel-component */ "./src/custom-components/cards/carousel-component.ts");
/* harmony import */ var _data_tmp_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/tmp-data */ "./src/data/tmp-data.ts");
/* harmony import */ var _requests_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../requests/socket */ "./src/requests/socket.ts");
/* harmony import */ var _requests_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../requests/request */ "./src/requests/request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { fetchQuery, serviceCredentials } from '../requests/request';


let AuctionView = class AuctionView extends _page_view__WEBPACK_IMPORTED_MODULE_1__["PageView"] {
    constructor() {
        super();
        this.shouldOpen = false;
        this.user = {};
        this.data = {};
        this.fotos = _data_tmp_data__WEBPACK_IMPORTED_MODULE_5__["carousel_data"];
        this.username = {};
        this.available = false;
        this.price = 0;
        this.winner = "";
        //TODO: fetch data
        //fetchQuery(serviceCredentials[0].url,'GET');
        //from data we set price
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

        h1 {
          width: min-content;
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
        }

        .buttons{
          margin: auto;
          width: 25%;
        }

        button {
          height: 50px;
        }

        .linked-btn{
          padding: 16px;
        }
      `
        ];
    }
    render() {
        return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <carousel-component .items=${this.data.fotos}></carousel-component>
      <div class="form">
        <div>
          <h1 class="headline-1">Subasta</h1>
          <label class="first-price">${(this.auction && this.auction['_id']) || '-'}</label>
        </div>
        <div>
          <h1 class="headline-1" style="position:sticky;">Restante</h1>
          ${this.available ? _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<custom-counter @time-is-up=${this._timeUp} .max=${this.auction && parseInt((this.auction['fin'] - Date.now()) / 1000)}></custom-counter>` : _base_element__WEBPACK_IMPORTED_MODULE_0__["html"] `<label class="first-price">Not Available</label>`}
        </div>
        <div>
          <h1 class="headline-1">Costo partida</h1>
          <label class="first-price">${this.data['precio_base']}</label>
        </div>
        <div>
          <h1 class="headline-1">Última puja</h1>
          <label class="last-price">${this.price}</label>
        </div>
        <div class="full-line">
          <h1 class="headline-1">Pujar</h1>
          <div class="buttons">
            <ripple-container @click="${this.pushHalf}"> <button class="button linked-btn"> Media </button> </ripple-container>
            <ripple-container @click="${this.pushFull}"> <button class="button linked-btn"> Full </button></ripple-container>
          </div>
        </div>
      </div>
    `;
    }
    firstUpdated() {
        let self = this;
        window.addEventListener('room-data', (e) => {
            self.auction = e.detail;
            self.price = e.detail.current;
            self.requestUpdate();
        });
        window.addEventListener('price-changed', (e) => {
            self.price = e.detail;
            self.requestUpdate();
        });
    }
    attributeChangedCallback(name, old, value) {
        if (name === 'active') {
            if (value === '' && old !== null) {
                //alert('abriendo el socket firstupdated')
                this.available = true;
                this.socket = new _requests_socket__WEBPACK_IMPORTED_MODULE_6__["Socket"]();
                this.socket.joinRoom(this.data.id, this.data.precio_base, this.data.minimo_requerido);
                this.shouldOpen = true;
            }
            else if (this.shouldOpen && old === null) {
                //alert('abriendo el socket no first')
                this.available = true;
                this.socket = new _requests_socket__WEBPACK_IMPORTED_MODULE_6__["Socket"]();
                this.socket.joinRoom(this.data.id, this.data.precio_base, this.data.minimo_requerido);
            }
            else if (value === null && old === '') {
                //alert('cerrando el socket :O')
                this.socket.close();
            }
        }
        super.attributeChangedCallback(name, old, value);
    }
    _timeUp() {
        this.available = false;
    }
    pushHalf() {
        let data = {
            auction_id: this.auction['_id'],
            vehicle_id: this.data['id'],
            type: 0,
            client_id: this.user['codigo'],
            timestamp: Date.now(),
            price: this.price
        };
        console.log(data);
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_7__["fetchQuery"])("/bids", "POST", data);
    }
    pushFull() {
        let data = {
            auction_id: this.auction['_id'],
            vehicle_id: this.data['id'],
            type: 1,
            client_id: this.user['codigo'],
            timestamp: Date.now(),
            price: this.price
        };
        console.log(data);
        Object(_requests_request__WEBPACK_IMPORTED_MODULE_7__["fetchQuery"])("/bids", "POST", data);
    }
};
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], AuctionView.prototype, "shouldOpen", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "user", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "data", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Array })
], AuctionView.prototype, "fotos", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "username", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Boolean })
], AuctionView.prototype, "available", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Number })
], AuctionView.prototype, "price", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: Object })
], AuctionView.prototype, "auction", void 0);
__decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["property"])({ type: String })
], AuctionView.prototype, "winner", void 0);
AuctionView = __decorate([
    Object(_base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])('auction-view')
], AuctionView);



/***/ }),

/***/ "./src/requests/socket.ts":
/*!********************************!*\
  !*** ./src/requests/socket.ts ***!
  \********************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/*import * as io from 'socket.io-client';

const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message'
};

class Socket {
  public user: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: { from: string, content: string }) => void;
  private socket: any;

  constructor(onChange: (isConnected: boolean) => void, onMessage: (message: { from: string, content: string }) => void) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = '';
    this.user = '';
    this.port = '';
  }

  public connect = (user: string, port: string) => {
    this.user = user;
    this.port = port;

    // const host = `http://192.168.0.220:${port}`; // Running from local network
    // this.socket = io.connect(host);
    this.socket = io.connect();

    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);
  };

  public sendMessage = (message: { from: string, content: string, time: string }) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.MESSAGE, message)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  };

  public disconnect = () => this.socket.close();
}

export const socket = new Socket();
*/

class Socket {
    constructor() {
        this.vehicleId = '';
    }
    joinRoom(vehicle_id, base_price, min_price) {
        this.vehicleId = vehicle_id;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__["connect"]('/', { upgrade: false, transports: ['websocket'], reconnection: true, forceNew: false });
        //this.socket.on('welcome', (a: any) => alert(a));
        this.socket.on('price-changed', (a) => {
            window.dispatchEvent(new CustomEvent('price-changed', { detail: a }));
        });
        this.socket.on('finish', () => alert('Se acabó la subasta!'));
        this.socket.on('room-data', (e) => {
            window.dispatchEvent(new CustomEvent('room-data', { detail: JSON.parse(e) }));
        });
        let str = JSON.stringify({ vehicle_id: this.vehicleId, base_price, min_price });
        this.socket.emit('join-room', str);
    }
    close() {
        this.socket.disconnect();
    }
}


/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90bXAtZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXVjdGlvbi12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0cy9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTSxZQUFZLEdBQUc7SUFDMUI7UUFDRSxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLGFBQWEsRUFBRSw2SEFBNkg7UUFDNUksTUFBTSxFQUFFLFdBQVc7UUFDbkIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRDtRQUNFLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsYUFBYSxFQUFFLDZIQUE2SDtRQUM1SSxNQUFNLEVBQUUsV0FBVztRQUNuQixZQUFZLEVBQUUsY0FBYztLQUM3QjtJQUNEO1FBQ0UsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixhQUFhLEVBQUUsNkhBQTZIO1FBQzVJLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFlBQVksRUFBRSxjQUFjO0tBQzdCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLGFBQWEsRUFBRSw2SEFBNkg7UUFDNUksTUFBTSxFQUFFLFdBQVc7UUFDbkIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRDtRQUNFLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsYUFBYSxFQUFFLDZIQUE2SDtRQUM1SSxNQUFNLEVBQUUsV0FBVztRQUNuQixZQUFZLEVBQUUsY0FBYztLQUM3QjtJQUNEO1FBQ0UsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixhQUFhLEVBQUUsNkhBQTZIO1FBQzVJLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFlBQVksRUFBRSxjQUFjO0tBQzdCO0NBQ0Y7QUFFTSxNQUFNLGFBQWEsR0FBRztJQUMzQjtRQUNFLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUIsS0FBSyxFQUFFLE9BQU87UUFD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RUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBR00sS0FBSztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7QUNoRkQsZSIsImZpbGUiOiI3NGE0NWQyY2ZlOGZlZmIyODViMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2ZWhpY2xlX2RhdGEgPSBbXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTEuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDFcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjlcIlxuICB9LFxuICB7XG4gICAgXCJ1cmxcIjogXCIuLi8uLi9pbWdzL20yLmpwZWdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSAyXCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI4XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tMy5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgM1wiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyN1wiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTQuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNFwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNlwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTUuanBnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNVwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNVwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTYuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDZcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjRcIlxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBjYXJvdXNlbF9kYXRhID0gW1xuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmcxLmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgMVwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfSxcbiAge1xuICAgIHVybDogXCIuLi8uLi9pbWdzL2JnMi5qcGVnXCIsXG4gICAgdGl0bGU6IFwiSU1HIDJcIixcbiAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiLi4vLi4vaW1ncy9iZzMuanBlZ1wiLFxuICAgIHRpdGxlOiBcIklNRyAzXCIsXG4gICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIlxuICB9LFxuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmc0LmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgNFwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfVxuXSIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGh0bWwsIGNzcywgcHJvcGVydHkgfSBmcm9tICcuLi9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUGFnZVZpZXcgfSBmcm9tICcuL3BhZ2Utdmlldyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5U3R5bGUsIEJ1dHRvblN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9tYWluLXNoYXJlZC1zdHlsZSc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2lucHV0L2N1c3RvbS1pbnB1dCc7XG5pbXBvcnQgJy4uL2N1c3RvbS1jb21wb25lbnRzL2NhcmRzL2Nhcm91c2VsLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBjYXJvdXNlbF9kYXRhIGFzIENhcm91c2VsIH0gZnJvbSAnLi4vZGF0YS90bXAtZGF0YSdcbi8vaW1wb3J0IHsgZmV0Y2hRdWVyeSwgc2VydmljZUNyZWRlbnRpYWxzIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tICcuLi9yZXF1ZXN0cy9zb2NrZXQnXG5pbXBvcnQgeyBmZXRjaFF1ZXJ5IH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdCc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2F1Y3Rpb24tdmlldycpXG5leHBvcnQgY2xhc3MgQXVjdGlvblZpZXcgZXh0ZW5kcyBQYWdlVmlldyB7XG5cbiAgc29ja2V0OiBhbnk7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuICBzaG91bGRPcGVuID0gZmFsc2U7XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHVzZXI6IGFueSA9IHt9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIGRhdGE6IGFueSA9IHt9XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSlcbiAgZm90b3MgPSBDYXJvdXNlbFxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICB1c2VybmFtZTogYW55ID0ge31cblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIGF2YWlsYWJsZSA9IGZhbHNlXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogTnVtYmVyIH0pXG4gIHByaWNlID0gMDtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgYXVjdGlvbjogYW55XG5cbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pXG4gIHdpbm5lciA9IFwiXCJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy9UT0RPOiBmZXRjaCBkYXRhXG4gICAgLy9mZXRjaFF1ZXJ5KHNlcnZpY2VDcmVkZW50aWFsc1swXS51cmwsJ0dFVCcpO1xuICAgIC8vZnJvbSBkYXRhIHdlIHNldCBwcmljZVxuICB9XG5cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3VwZXIuc3R5bGVzLFxuICAgICAgVHlwb2dyYXBoeVN0eWxlLFxuICAgICAgQnV0dG9uU3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm17XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgZ3JpZC1nYXA6IDFweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSA+ICoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGwtbGluZSB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXByaW1hcnktY29sb3IpXG4gICAgICAgIH1cblxuICAgICAgICBjdXN0b20tY291bnRlcntcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmlwcGxlLWNvbnRhaW5lcntcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbnN7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saW5rZWQtYnRue1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICBdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGNhcm91c2VsLWNvbXBvbmVudCAuaXRlbXM9JHt0aGlzLmRhdGEuZm90b3N9PjwvY2Fyb3VzZWwtY29tcG9uZW50PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+U3ViYXN0YTwvaDE+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmlyc3QtcHJpY2VcIj4keyh0aGlzLmF1Y3Rpb24gJiYgdGhpcy5hdWN0aW9uWydfaWQnXSkgfHwgJy0nfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIiBzdHlsZT1cInBvc2l0aW9uOnN0aWNreTtcIj5SZXN0YW50ZTwvaDE+XG4gICAgICAgICAgJHt0aGlzLmF2YWlsYWJsZSA/IGh0bWxgPGN1c3RvbS1jb3VudGVyIEB0aW1lLWlzLXVwPSR7dGhpcy5fdGltZVVwfSAubWF4PSR7dGhpcy5hdWN0aW9uICYmIHBhcnNlSW50KCh0aGlzLmF1Y3Rpb25bJ2ZpbiddIC0gRGF0ZS5ub3coKSkgLyAxMDAwKX0+PC9jdXN0b20tY291bnRlcj5gIDogaHRtbGA8bGFiZWwgY2xhc3M9XCJmaXJzdC1wcmljZVwiPk5vdCBBdmFpbGFibGU8L2xhYmVsPmB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj5Db3N0byBwYXJ0aWRhPC9oMT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmaXJzdC1wcmljZVwiPiR7dGhpcy5kYXRhWydwcmVjaW9fYmFzZSddfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj7Dmmx0aW1hIHB1amE8L2gxPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhc3QtcHJpY2VcIj4ke3RoaXMucHJpY2V9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLWxpbmVcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkbGluZS0xXCI+UHVqYXI8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lciBAY2xpY2s9XCIke3RoaXMucHVzaEhhbGZ9XCI+IDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPiBNZWRpYSA8L2J1dHRvbj4gPC9yaXBwbGUtY29udGFpbmVyPlxuICAgICAgICAgICAgPHJpcHBsZS1jb250YWluZXIgQGNsaWNrPVwiJHt0aGlzLnB1c2hGdWxsfVwiPiA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGxpbmtlZC1idG5cIj4gRnVsbCA8L2J1dHRvbj48L3JpcHBsZS1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHB1YmxpYyBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyb29tLWRhdGEnLCAoZTogYW55KSA9PiB7XG4gICAgICBzZWxmLmF1Y3Rpb24gPSBlLmRldGFpbDtcbiAgICAgIHNlbGYucHJpY2UgPSBlLmRldGFpbC5jdXJyZW50O1xuICAgICAgc2VsZi5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncHJpY2UtY2hhbmdlZCcsIChlOiBhbnkpID0+IHtcbiAgICAgIHNlbGYucHJpY2UgPSBlLmRldGFpbDtcbiAgICAgIHNlbGYucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZDogc3RyaW5nIHwgbnVsbCwgdmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcblxuICAgIGlmIChuYW1lID09PSAnYWN0aXZlJykge1xuICAgICAgaWYgKHZhbHVlID09PSAnJyAmJiBvbGQgIT09IG51bGwpIHtcbiAgICAgICAgLy9hbGVydCgnYWJyaWVuZG8gZWwgc29ja2V0IGZpcnN0dXBkYXRlZCcpXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgU29ja2V0KCk7XG4gICAgICAgIHRoaXMuc29ja2V0LmpvaW5Sb29tKHRoaXMuZGF0YS5pZCwgdGhpcy5kYXRhLnByZWNpb19iYXNlLCB0aGlzLmRhdGEubWluaW1vX3JlcXVlcmlkbyk7XG4gICAgICAgIHRoaXMuc2hvdWxkT3BlbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvdWxkT3BlbiAmJiBvbGQgPT09IG51bGwpIHtcbiAgICAgICAgLy9hbGVydCgnYWJyaWVuZG8gZWwgc29ja2V0IG5vIGZpcnN0JylcbiAgICAgICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBTb2NrZXQoKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuam9pblJvb20odGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEucHJlY2lvX2Jhc2UsIHRoaXMuZGF0YS5taW5pbW9fcmVxdWVyaWRvKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwgJiYgb2xkID09PSAnJykge1xuICAgICAgICAvL2FsZXJ0KCdjZXJyYW5kbyBlbCBzb2NrZXQgOk8nKVxuICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSlcbiAgfVxuXG4gIHByaXZhdGUgX3RpbWVVcCgpIHtcbiAgICB0aGlzLmF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoSGFsZigpIHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGF1Y3Rpb25faWQ6IHRoaXMuYXVjdGlvblsnX2lkJ10sXG4gICAgICB2ZWhpY2xlX2lkOiB0aGlzLmRhdGFbJ2lkJ10sXG4gICAgICB0eXBlOiAwLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLnVzZXJbJ2NvZGlnbyddLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgcHJpY2U6IHRoaXMucHJpY2VcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgZmV0Y2hRdWVyeShcIi9iaWRzXCIsIFwiUE9TVFwiLCBkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVzaEZ1bGwoKSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBhdWN0aW9uX2lkOiB0aGlzLmF1Y3Rpb25bJ19pZCddLFxuICAgICAgdmVoaWNsZV9pZDogdGhpcy5kYXRhWydpZCddLFxuICAgICAgdHlwZTogMSxcbiAgICAgIGNsaWVudF9pZDogdGhpcy51c2VyWydjb2RpZ28nXSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHByaWNlOiB0aGlzLnByaWNlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGZldGNoUXVlcnkoXCIvYmlkc1wiLCBcIlBPU1RcIiwgZGF0YSk7XG4gIH1cblxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgICdhdWN0aW9uLXZpZXcnOiBBdWN0aW9uVmlldztcbiAgfVxufVxuXG4iLCIvKmltcG9ydCAqIGFzIGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG5jb25zdCBFVkVOVFMgPSB7XG4gIENPTk5FQ1Q6ICdjb25uZWN0JyxcbiAgRElTQ09OTkVDVDogJ2Rpc2Nvbm5lY3QnLFxuICBNRVNTQUdFOiAnbWVzc2FnZSdcbn07XG5cbmNsYXNzIFNvY2tldCB7XG4gIHB1YmxpYyB1c2VyOiBzdHJpbmc7XG4gIHB1YmxpYyBwb3J0OiBzdHJpbmc7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChpc0Nvbm5lY3RlZDogYm9vbGVhbikgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvbk1lc3NhZ2U6IChtZXNzYWdlOiB7IGZyb206IHN0cmluZywgY29udGVudDogc3RyaW5nIH0pID0+IHZvaWQ7XG4gIHByaXZhdGUgc29ja2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob25DaGFuZ2U6IChpc0Nvbm5lY3RlZDogYm9vbGVhbikgPT4gdm9pZCwgb25NZXNzYWdlOiAobWVzc2FnZTogeyBmcm9tOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyB9KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIHRoaXMub25NZXNzYWdlID0gb25NZXNzYWdlO1xuICAgIHRoaXMuc29ja2V0ID0gJyc7XG4gICAgdGhpcy51c2VyID0gJyc7XG4gICAgdGhpcy5wb3J0ID0gJyc7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdCA9ICh1c2VyOiBzdHJpbmcsIHBvcnQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5wb3J0ID0gcG9ydDtcblxuICAgIC8vIGNvbnN0IGhvc3QgPSBgaHR0cDovLzE5Mi4xNjguMC4yMjA6JHtwb3J0fWA7IC8vIFJ1bm5pbmcgZnJvbSBsb2NhbCBuZXR3b3JrXG4gICAgLy8gdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KGhvc3QpO1xuICAgIHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXG4gICAgdGhpcy5zb2NrZXQub24oRVZFTlRTLkNPTk5FQ1QsIHRoaXMub25Db25uZWN0ZWQpO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNvbm5lY3RlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNvY2tldC5vbihFVkVOVFMuTUVTU0FHRSwgdGhpcy5vbk1lc3NhZ2UpO1xuICAgIHRoaXMub25DaGFuZ2UodHJ1ZSk7XG4gIH07XG5cbiAgcHVibGljIHNlbmRNZXNzYWdlID0gKG1lc3NhZ2U6IHsgZnJvbTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIHRpbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnNvY2tldC5lbWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNvY2tldC5lbWl0KEVWRU5UUy5NRVNTQUdFLCBtZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgZW1pdCBzb2NrZXQgbWVzc2FnZXMuIFNvY2tldC5pbyBub3QgY29ubmVjdGVkLicpO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgZGlzY29ubmVjdCA9ICgpID0+IHRoaXMuc29ja2V0LmNsb3NlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBzb2NrZXQgPSBuZXcgU29ja2V0KCk7XG4qL1xuaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvY2tldCB7XG4gIHNvY2tldDogYW55O1xuICB2ZWhpY2xlSWQ6IHN0cmluZyA9ICcnO1xuXG4gIHB1YmxpYyBqb2luUm9vbSh2ZWhpY2xlX2lkOiBzdHJpbmcsIGJhc2VfcHJpY2U6IG51bWJlciwgbWluX3ByaWNlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZlaGljbGVJZCA9IHZlaGljbGVfaWQ7XG4gICAgdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCcvJywgeyB1cGdyYWRlOiBmYWxzZSwgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXSwgcmVjb25uZWN0aW9uOiB0cnVlLCBmb3JjZU5ldzogZmFsc2UgfSk7XG4gICAgLy90aGlzLnNvY2tldC5vbignd2VsY29tZScsIChhOiBhbnkpID0+IGFsZXJ0KGEpKTtcbiAgICB0aGlzLnNvY2tldC5vbigncHJpY2UtY2hhbmdlZCcsIChhOiBhbnkpID0+IHtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncHJpY2UtY2hhbmdlZCcsIHsgZGV0YWlsOiBhIH0pKTtcbiAgICB9KTtcbiAgICB0aGlzLnNvY2tldC5vbignZmluaXNoJywgKCkgPT4gYWxlcnQoJ1NlIGFjYWLDsyBsYSBzdWJhc3RhIScpKTtcbiAgICB0aGlzLnNvY2tldC5vbigncm9vbS1kYXRhJywgKGU6IGFueSkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyb29tLWRhdGEnLCB7IGRldGFpbDogSlNPTi5wYXJzZShlKSB9KSk7XG4gICAgfSk7XG5cblxuICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeSh7IHZlaGljbGVfaWQ6IHRoaXMudmVoaWNsZUlkLCBiYXNlX3ByaWNlLCBtaW5fcHJpY2UgfSk7XG4gICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pbi1yb29tJywgc3RyKTtcbiAgfVxuXG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==