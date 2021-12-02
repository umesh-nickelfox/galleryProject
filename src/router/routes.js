import HomePage from "../pages/homePage";
import Login from "../pages/login";
import SignUp from "../pages/signup";

export const menuItem = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/", component: HomePage, protected: true },

  // { component: NotFound },
];
