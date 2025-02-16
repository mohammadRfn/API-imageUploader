import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import MyImages from "./pages/MyImages.vue";
import Home from "./pages/Home.vue";
import DefaultLayout from "./components/DefaultLayout.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },  // Default child route
      { path: "/images", name: "MyImages", component: MyImages }, // Relative path
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
