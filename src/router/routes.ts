import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserLayout from "../layouts/UserLayout.vue";
import NoAuthPage from "../views/NoAuthPage.vue";
import UserLoginPage from "../views/UserLoginPage.vue";
import UserRegisterPage from "../views/UserRegisterPage.vue";
import ACCESS_NUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthPage,
    meta: {
      hideInMenu: true, // 不渲染到菜单栏中
    }
  },
  {
    path: "/admin",
    name: "管理页面",
    component: HomeView,
    meta: {
      access: ACCESS_NUM.ADMIN,
    }
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: HomeView,
    meta: {
      hideInMenu: true, // 不渲染到菜单栏中
    }
  },
  {
    path: "/user",
    name: "user",
    component: UserLayout,
    meta: {
      hideInMenu: true, // 不渲染到菜单栏中
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginPage,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterPage,
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

