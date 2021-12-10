///import AppActions from "../redux/actions";
//import AppReducer from "../redux/reducers/appReducer";
//import { AppActions } from "../redux/actions/appActions";
import HomePage from "../pages/homePage";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Counter from "../pages/counter";

export const menuItem = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/homePage", component: HomePage, protected: true },
  { path: "/counter", component: Counter, protected: true },




  // { component: NotFound },
];
