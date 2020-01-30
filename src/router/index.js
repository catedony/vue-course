import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Users.vue")
  },
  {
    path: "/edit-user/:id",
    component: () => import("../views/EditUser.vue")
  },
  {
    path: "/add-user",
    component: () => import("../views/AddUser.vue")
  },
  {
    path: "/contacts",
    component: () => import("../views/Contacts.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
