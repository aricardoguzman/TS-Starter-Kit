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
        this.socket.on('finish', (e) => window.dispatchEvent(new CustomEvent('error', { detail: 'Se acabó la subasta!' + e })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90bXAtZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXVjdGlvbi12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9yZXF1ZXN0cy9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTSxZQUFZLEdBQUc7SUFDMUI7UUFDRSxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLGFBQWEsRUFBRSw2SEFBNkg7UUFDNUksTUFBTSxFQUFFLFdBQVc7UUFDbkIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRDtRQUNFLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsYUFBYSxFQUFFLDZIQUE2SDtRQUM1SSxNQUFNLEVBQUUsV0FBVztRQUNuQixZQUFZLEVBQUUsY0FBYztLQUM3QjtJQUNEO1FBQ0UsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixhQUFhLEVBQUUsNkhBQTZIO1FBQzVJLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFlBQVksRUFBRSxjQUFjO0tBQzdCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLGFBQWEsRUFBRSw2SEFBNkg7UUFDNUksTUFBTSxFQUFFLFdBQVc7UUFDbkIsWUFBWSxFQUFFLGNBQWM7S0FDN0I7SUFDRDtRQUNFLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsYUFBYSxFQUFFLDZIQUE2SDtRQUM1SSxNQUFNLEVBQUUsV0FBVztRQUNuQixZQUFZLEVBQUUsY0FBYztLQUM3QjtJQUNEO1FBQ0UsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixhQUFhLEVBQUUsNkhBQTZIO1FBQzVJLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFlBQVksRUFBRSxjQUFjO0tBQzdCO0NBQ0Y7QUFFTSxNQUFNLGFBQWEsR0FBRztJQUMzQjtRQUNFLEdBQUcsRUFBRSxxQkFBcUI7UUFDMUIsS0FBSyxFQUFFLE9BQU87UUFD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RUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEYsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7OztBQ2hGRCxlIiwiZmlsZSI6IjMxZWMzMzgwYThiMjY0MWRlYWMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZlaGljbGVfZGF0YSA9IFtcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tMS5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgMVwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyOVwiXG4gIH0sXG4gIHtcbiAgICBcInVybFwiOiBcIi4uLy4uL2ltZ3MvbTIuanBlZ1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcbiAgICBcIm5hbWVcIjogXCJ2ZWhpY2xlIDJcIixcbiAgICBcImF1Y3Rpb25faWRcIjogXCI4NDk0ODk0NTYxMjhcIlxuICB9LFxuICB7XG4gICAgXCJ1cmxcIjogXCIuLi8uLi9pbWdzL20zLmpwZWdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSAzXCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI3XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tNC5qcGdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSA0XCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI2XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tNS5qcGdcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCIsXG4gICAgXCJuYW1lXCI6IFwidmVoaWNsZSA1XCIsXG4gICAgXCJhdWN0aW9uX2lkXCI6IFwiODQ5NDg5NDU2MTI1XCJcbiAgfSxcbiAge1xuICAgIFwidXJsXCI6IFwiLi4vLi4vaW1ncy9tNi5qcGVnXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxuICAgIFwibmFtZVwiOiBcInZlaGljbGUgNlwiLFxuICAgIFwiYXVjdGlvbl9pZFwiOiBcIjg0OTQ4OTQ1NjEyNFwiXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGNhcm91c2VsX2RhdGEgPSBbXG4gIHtcbiAgICB1cmw6IFwiLi4vLi4vaW1ncy9iZzEuanBlZ1wiLFxuICAgIHRpdGxlOiBcIklNRyAxXCIsXG4gICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIlxuICB9LFxuICB7XG4gICAgdXJsOiBcIi4uLy4uL2ltZ3MvYmcyLmpwZWdcIixcbiAgICB0aXRsZTogXCJJTUcgMlwiLFxuICAgIGNhcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCJcbiAgfSxcbiAge1xuICAgIHVybDogXCIuLi8uLi9pbWdzL2JnMy5qcGVnXCIsXG4gICAgdGl0bGU6IFwiSU1HIDNcIixcbiAgICBjYXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiXG4gIH0sXG4gIHtcbiAgICB1cmw6IFwiLi4vLi4vaW1ncy9iZzQuanBlZ1wiLFxuICAgIHRpdGxlOiBcIklNRyA0XCIsXG4gICAgY2FwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIlxuICB9XG5dIiwiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgaHRtbCwgY3NzLCBwcm9wZXJ0eSB9IGZyb20gJy4uL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBQYWdlVmlldyB9IGZyb20gJy4vcGFnZS12aWV3JztcbmltcG9ydCB7IFR5cG9ncmFwaHlTdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL21haW4tc2hhcmVkLXN0eWxlJztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvaW5wdXQvY3VzdG9tLWlucHV0JztcbmltcG9ydCAnLi4vY3VzdG9tLWNvbXBvbmVudHMvY2FyZHMvY2Fyb3VzZWwtY29tcG9uZW50JztcbmltcG9ydCB7IGNhcm91c2VsX2RhdGEgYXMgQ2Fyb3VzZWwgfSBmcm9tICcuLi9kYXRhL3RtcC1kYXRhJ1xuLy9pbXBvcnQgeyBmZXRjaFF1ZXJ5LCBzZXJ2aWNlQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gJy4uL3JlcXVlc3RzL3NvY2tldCdcbmltcG9ydCB7IGZldGNoUXVlcnkgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0JztcblxuXG5AY3VzdG9tRWxlbWVudCgnYXVjdGlvbi12aWV3JylcbmV4cG9ydCBjbGFzcyBBdWN0aW9uVmlldyBleHRlbmRzIFBhZ2VWaWV3IHtcblxuICBzb2NrZXQ6IGFueTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG4gIHNob3VsZE9wZW4gPSBmYWxzZTtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgdXNlcjogYW55ID0ge31cblxuICBAcHJvcGVydHkoeyB0eXBlOiBPYmplY3QgfSlcbiAgZGF0YTogYW55ID0ge31cblxuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KVxuICBmb3RvcyA9IENhcm91c2VsXG5cbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pXG4gIHVzZXJuYW1lOiBhbnkgPSB7fVxuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbiAgYXZhaWxhYmxlID0gZmFsc2VcblxuICBAcHJvcGVydHkoeyB0eXBlOiBOdW1iZXIgfSlcbiAgcHJpY2UgPSAwO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KVxuICBhdWN0aW9uOiBhbnlcblxuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbiAgd2lubmVyID0gXCJcIlxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvL1RPRE86IGZldGNoIGRhdGFcbiAgICAvL2ZldGNoUXVlcnkoc2VydmljZUNyZWRlbnRpYWxzWzBdLnVybCwnR0VUJyk7XG4gICAgLy9mcm9tIGRhdGEgd2Ugc2V0IHByaWNlXG4gIH1cblxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5zdXBlci5zdHlsZXMsXG4gICAgICBUeXBvZ3JhcGh5U3R5bGUsXG4gICAgICBCdXR0b25TdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybXtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICBncmlkLWdhcDogMXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtID4gKiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC1saW5lIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVse1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGN1c3RvbS1jb3VudGVye1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICByaXBwbGUtY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uc3tcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmtlZC1idG57XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuICAgICAgYFxuICAgIF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8Y2Fyb3VzZWwtY29tcG9uZW50IC5pdGVtcz0ke3RoaXMuZGF0YS5mb3Rvc30+PC9jYXJvdXNlbC1jb21wb25lbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj5TdWJhc3RhPC9oMT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmaXJzdC1wcmljZVwiPiR7KHRoaXMuYXVjdGlvbiAmJiB0aGlzLmF1Y3Rpb25bJ19pZCddKSB8fCAnLSd9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGxpbmUtMVwiIHN0eWxlPVwicG9zaXRpb246c3RpY2t5O1wiPlJlc3RhbnRlPC9oMT5cbiAgICAgICAgICAke3RoaXMuYXZhaWxhYmxlID8gaHRtbGA8Y3VzdG9tLWNvdW50ZXIgQHRpbWUtaXMtdXA9JHt0aGlzLl90aW1lVXB9IC5tYXg9JHt0aGlzLmF1Y3Rpb24gJiYgcGFyc2VJbnQoKHRoaXMuYXVjdGlvblsnZmluJ10gLSBEYXRlLm5vdygpKSAvIDEwMDApfT48L2N1c3RvbS1jb3VudGVyPmAgOiBodG1sYDxsYWJlbCBjbGFzcz1cImZpcnN0LXByaWNlXCI+Tm90IEF2YWlsYWJsZTwvbGFiZWw+YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGxpbmUtMVwiPkNvc3RvIHBhcnRpZGE8L2gxPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZpcnN0LXByaWNlXCI+JHt0aGlzLmRhdGFbJ3ByZWNpb19iYXNlJ119PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiaGVhZGxpbmUtMVwiPsOabHRpbWEgcHVqYTwvaDE+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFzdC1wcmljZVwiPiR7dGhpcy5wcmljZX08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtbGluZVwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRsaW5lLTFcIj5QdWphcjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxyaXBwbGUtY29udGFpbmVyIEBjbGljaz1cIiR7dGhpcy5wdXNoSGFsZn1cIj4gPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsaW5rZWQtYnRuXCI+IE1lZGlhIDwvYnV0dG9uPiA8L3JpcHBsZS1jb250YWluZXI+XG4gICAgICAgICAgICA8cmlwcGxlLWNvbnRhaW5lciBAY2xpY2s9XCIke3RoaXMucHVzaEZ1bGx9XCI+IDxidXR0b24gY2xhc3M9XCJidXR0b24gbGlua2VkLWJ0blwiPiBGdWxsIDwvYnV0dG9uPjwvcmlwcGxlLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHVibGljIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jvb20tZGF0YScsIChlOiBhbnkpID0+IHtcbiAgICAgIHNlbGYuYXVjdGlvbiA9IGUuZGV0YWlsO1xuICAgICAgc2VsZi5wcmljZSA9IGUuZGV0YWlsLmN1cnJlbnQ7XG4gICAgICBzZWxmLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwcmljZS1jaGFuZ2VkJywgKGU6IGFueSkgPT4ge1xuICAgICAgc2VsZi5wcmljZSA9IGUuZGV0YWlsO1xuICAgICAgc2VsZi5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkOiBzdHJpbmcgfCBudWxsLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuXG4gICAgaWYgKG5hbWUgPT09ICdhY3RpdmUnKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnICYmIG9sZCAhPT0gbnVsbCkge1xuICAgICAgICAvL2FsZXJ0KCdhYnJpZW5kbyBlbCBzb2NrZXQgZmlyc3R1cGRhdGVkJylcbiAgICAgICAgdGhpcy5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvY2tldCA9IG5ldyBTb2NrZXQoKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuam9pblJvb20odGhpcy5kYXRhLmlkLCB0aGlzLmRhdGEucHJlY2lvX2Jhc2UsIHRoaXMuZGF0YS5taW5pbW9fcmVxdWVyaWRvKTtcbiAgICAgICAgdGhpcy5zaG91bGRPcGVuID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRPcGVuICYmIG9sZCA9PT0gbnVsbCkge1xuICAgICAgICAvL2FsZXJ0KCdhYnJpZW5kbyBlbCBzb2NrZXQgbm8gZmlyc3QnKVxuICAgICAgICB0aGlzLmF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFNvY2tldCgpO1xuICAgICAgICB0aGlzLnNvY2tldC5qb2luUm9vbSh0aGlzLmRhdGEuaWQsIHRoaXMuZGF0YS5wcmVjaW9fYmFzZSwgdGhpcy5kYXRhLm1pbmltb19yZXF1ZXJpZG8pO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBvbGQgPT09ICcnKSB7XG4gICAgICAgIC8vYWxlcnQoJ2NlcnJhbmRvIGVsIHNvY2tldCA6TycpXG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlKVxuICB9XG5cbiAgcHJpdmF0ZSBfdGltZVVwKCkge1xuICAgIHRoaXMuYXZhaWxhYmxlID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHB1c2hIYWxmKCkge1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgYXVjdGlvbl9pZDogdGhpcy5hdWN0aW9uWydfaWQnXSxcbiAgICAgIHZlaGljbGVfaWQ6IHRoaXMuZGF0YVsnaWQnXSxcbiAgICAgIHR5cGU6IDAsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMudXNlclsnY29kaWdvJ10sXG4gICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICBwcmljZTogdGhpcy5wcmljZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBmZXRjaFF1ZXJ5KFwiL2JpZHNcIiwgXCJQT1NUXCIsIGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoRnVsbCgpIHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGF1Y3Rpb25faWQ6IHRoaXMuYXVjdGlvblsnX2lkJ10sXG4gICAgICB2ZWhpY2xlX2lkOiB0aGlzLmRhdGFbJ2lkJ10sXG4gICAgICB0eXBlOiAxLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLnVzZXJbJ2NvZGlnbyddLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgcHJpY2U6IHRoaXMucHJpY2VcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgZmV0Y2hRdWVyeShcIi9iaWRzXCIsIFwiUE9TVFwiLCBkYXRhKTtcbiAgfVxuXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgJ2F1Y3Rpb24tdmlldyc6IEF1Y3Rpb25WaWV3O1xuICB9XG59XG5cbiIsIi8qaW1wb3J0ICogYXMgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmNvbnN0IEVWRU5UUyA9IHtcbiAgQ09OTkVDVDogJ2Nvbm5lY3QnLFxuICBESVNDT05ORUNUOiAnZGlzY29ubmVjdCcsXG4gIE1FU1NBR0U6ICdtZXNzYWdlJ1xufTtcblxuY2xhc3MgU29ja2V0IHtcbiAgcHVibGljIHVzZXI6IHN0cmluZztcbiAgcHVibGljIHBvcnQ6IHN0cmluZztcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKGlzQ29ubmVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uTWVzc2FnZTogKG1lc3NhZ2U6IHsgZnJvbTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcgfSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBzb2NrZXQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvbkNoYW5nZTogKGlzQ29ubmVjdGVkOiBib29sZWFuKSA9PiB2b2lkLCBvbk1lc3NhZ2U6IChtZXNzYWdlOiB7IGZyb206IHN0cmluZywgY29udGVudDogc3RyaW5nIH0pID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgdGhpcy5vbk1lc3NhZ2UgPSBvbk1lc3NhZ2U7XG4gICAgdGhpcy5zb2NrZXQgPSAnJztcbiAgICB0aGlzLnVzZXIgPSAnJztcbiAgICB0aGlzLnBvcnQgPSAnJztcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ID0gKHVzZXI6IHN0cmluZywgcG9ydDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnBvcnQgPSBwb3J0O1xuXG4gICAgLy8gY29uc3QgaG9zdCA9IGBodHRwOi8vMTkyLjE2OC4wLjIyMDoke3BvcnR9YDsgLy8gUnVubmluZyBmcm9tIGxvY2FsIG5ldHdvcmtcbiAgICAvLyB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoaG9zdCk7XG4gICAgdGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XG5cbiAgICB0aGlzLnNvY2tldC5vbihFVkVOVFMuQ09OTkVDVCwgdGhpcy5vbkNvbm5lY3RlZCk7XG4gIH07XG5cbiAgcHVibGljIG9uQ29ubmVjdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc29ja2V0Lm9uKEVWRU5UUy5NRVNTQUdFLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0cnVlKTtcbiAgfTtcblxuICBwdWJsaWMgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZTogeyBmcm9tOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgdGltZTogc3RyaW5nIH0pID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMuc29ja2V0LmVtaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuc29ja2V0LmVtaXQoRVZFTlRTLk1FU1NBR0UsIG1lc3NhZ2UpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBlbWl0IHNvY2tldCBtZXNzYWdlcy4gU29ja2V0LmlvIG5vdCBjb25uZWN0ZWQuJyk7XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4gdGhpcy5zb2NrZXQuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvY2tldCA9IG5ldyBTb2NrZXQoKTtcbiovXG5pbXBvcnQgKiBhcyBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuXG5leHBvcnQgY2xhc3MgU29ja2V0IHtcbiAgc29ja2V0OiBhbnk7XG4gIHZlaGljbGVJZDogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGpvaW5Sb29tKHZlaGljbGVfaWQ6IHN0cmluZywgYmFzZV9wcmljZTogbnVtYmVyLCBtaW5fcHJpY2U6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmVoaWNsZUlkID0gdmVoaWNsZV9pZDtcbiAgICB0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoJy8nLCB7IHVwZ3JhZGU6IGZhbHNlLCB0cmFuc3BvcnRzOiBbJ3dlYnNvY2tldCddLCByZWNvbm5lY3Rpb246IHRydWUsIGZvcmNlTmV3OiBmYWxzZSB9KTtcbiAgICAvL3RoaXMuc29ja2V0Lm9uKCd3ZWxjb21lJywgKGE6IGFueSkgPT4gYWxlcnQoYSkpO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdwcmljZS1jaGFuZ2VkJywgKGE6IGFueSkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwcmljZS1jaGFuZ2VkJywgeyBkZXRhaWw6IGEgfSkpO1xuICAgIH0pO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdmaW5pc2gnLCAoZTogYW55KSA9PiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Vycm9yJywgeyBkZXRhaWw6ICdTZSBhY2Fiw7MgbGEgc3ViYXN0YSEnICsgZSB9KSkpO1xuICAgIHRoaXMuc29ja2V0Lm9uKCdyb29tLWRhdGEnLCAoZTogYW55KSA9PiB7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Jvb20tZGF0YScsIHsgZGV0YWlsOiBKU09OLnBhcnNlKGUpIH0pKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHsgdmVoaWNsZV9pZDogdGhpcy52ZWhpY2xlSWQsIGJhc2VfcHJpY2UsIG1pbl9wcmljZSB9KTtcbiAgICB0aGlzLnNvY2tldC5lbWl0KCdqb2luLXJvb20nLCBzdHIpO1xuICB9XG5cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5zb2NrZXQuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9