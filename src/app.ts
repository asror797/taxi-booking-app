import express from 'express'
import * as http from 'http'
import { PORT } from './config'

class App {
  public app: express.Application
  public socket:any


  constructor() {
    this.app = express()
    this.connectionToDatabase()
  }

  public listen() {
    this.app.listen(PORT,() => {
      console.log(`Server is runing at ${PORT}`)
    })
  }


  private connectionToDatabase() {

  }

  private initializeRoutes() {
    
  }

}


export default App;