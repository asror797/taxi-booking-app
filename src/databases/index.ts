import { NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE } from './../config'

console.log('DB_HOST', DB_HOST)
console.log('NODE_ENV', NODE_ENV)
export const dbConnection = {
   url:'mongodb://localhost:27017/taxi' ,
   options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
   },
}