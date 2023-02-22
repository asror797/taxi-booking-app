import * as socketio from 'socket.io';
import * as http from 'http';

class SocketServer {
  public io: socketio.Server;
  public socket: socketio.Socket;

  constructor() {
  }
  public startConnection(server: http.Server) {
    this.io = new socketio.Server(server, {
      cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST'],
      },
    });

    this.io.on('connection', (socket: socketio.Socket) => {
      this.socket = socket;
      this.socket.emit('aaa', 'asdasas')
      this.registerEvents();
    });
  }
  public sendScannedInfo(message: string) {
    this.socket.emit('update-scanned-info', message)
  }
  
  
  public registerEvents() {
    this.socket.on('some-message', (message: string) => {
      console.log('message', message);
    });
  }
}

export default SocketServer;
