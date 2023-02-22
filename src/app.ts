import express from 'express'
import * as http from 'http'
import { connect, set } from 'mongoose'
import { PORT } from './config'
import { dbConnection } from './databases'
import { Routes } from './interfaces/routes.interface'
import SocketServer from './utils/socket'

class App {
  public app: express.Application
  public socket:any
  public socketserver:any


  constructor(routes:Routes[]) {
    this.app = express()
    this.initializeMiddlewares()
    this.connectionToDatabase()
    this.initializeRoutes(routes)
  }

  public listen() {

    const server = http.createServer(this.app)
    this.socketserver = new SocketServer()
    this.socketserver.startConnection(server)

    server.listen(PORT,() => {
      console.log(`Server is runing at ${PORT} PORT`)
    })
  }


  public async connectionToDatabase() {
    try {
      set('strictQuery',true)
      await connect(dbConnection.url, dbConnection.options)
    } catch (error) {
      console.error(error)
    } 
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
  }

  public initializeRoutes(routes:Routes[]) {
    routes.map(route => {
      this.app.use('/',route.router)
    })
  }

}


export default App;