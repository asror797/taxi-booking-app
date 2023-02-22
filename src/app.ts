import express from 'express'
// import * as http from 'http'
import { connect, set } from 'mongoose'
import { PORT } from './config'
import { dbConnection } from './databases'
import { Routes } from './interfaces/routes.interface'

class App {
  public app: express.Application
  public socket:any


  constructor(routes:Routes[]) {
    this.app = express()
    this.connectionToDatabase()
    this.initializeRoutes(routes)
  }

  public listen() {

    this.app.listen(PORT,() => {
      console.log(`Server is runing at ${PORT}`)
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

  public initializeRoutes(routes:Routes[]) {
    routes.map(route => {
      this.app.use('/',route.router)
    })
  }

}


export default App;