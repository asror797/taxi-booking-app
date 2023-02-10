import express from "express"


class App {
  public app: Express.Application


  constructor() {
    this.app = express()
    this.connectionToDatabase()
  }


  private connectionToDatabase() {

  }

}


export default App;