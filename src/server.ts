import App from "./app";
import RoleRoute from "./routes/role.route";



const app  = new App([
   new RoleRoute(),
])


app.listen();