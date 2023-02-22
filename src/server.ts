import App from "./app";
import RoleRoute from "./routes/role.route";
import UserRoute from "./routes/user.route";



const app  = new App([
   new RoleRoute(),
   new UserRoute()
])


app.listen();