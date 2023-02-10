import express from "express"


class App {
  public app: Express.Application


  constructor() {
    this.app = express()
  }

}


export default App;