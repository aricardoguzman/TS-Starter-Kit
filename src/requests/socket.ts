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
import * as io from 'socket.io-client';


export class Socket {
  socket: any;
  vehicleId: string = '';

  public joinRoom(vehicle_id: string, base_price: number, min_price: number): void {
    this.vehicleId = vehicle_id;
    this.socket = io.connect('/', { upgrade: false, transports: ['websocket'], reconnection: true, forceNew: false });
    //this.socket.on('welcome', (a: any) => alert(a));
    this.socket.on('price-changed', (a: any) => {
      window.dispatchEvent(new CustomEvent('price-changed', { detail: a }));
    });
    this.socket.on('finish', () => alert('Se acabó la subasta!'));
    this.socket.on('room-data', (e: any) => {
      window.dispatchEvent(new CustomEvent('room-data', { detail: JSON.parse(e) }));
    });


    let str = JSON.stringify({ vehicle_id: this.vehicleId, base_price, min_price });
    this.socket.emit('join-room', str);
  }


  public close() {
    this.socket.disconnect();
  }
}
