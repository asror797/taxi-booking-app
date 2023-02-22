import App from "./app";
import RegionRoute from "./routes/region.route";
import RoleRoute from "./routes/role.route";
import UserRoute from "./routes/user.route";



const app  = new App([
   new RoleRoute(),
   new UserRoute(),
   new RegionRoute()
])


app.listen();