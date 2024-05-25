import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserLayout from "../layouts/UserLayout.vue";
import NoAuthPage from "../views/NoAuthPage.vue";
import UserLoginPage from "../views/user/UserLoginPage.vue";
import UserRegisterPage from "../views/user/UserRegisterPage.vue";
import AdminUserPage from "../views/admin/AdminUserPage.vue";
import AdminAppPage from "../views/admin/AdminAppPage.vue"
import AdminQuestionPage from "../views/admin/AdminQuestionPage.vue"
import AdminScoringResultPage from "../views/admin/AdminScoringResultPage.vue"
import AdminUserAnswerPage from "../views/admin/AdminUserAnswerPage.vue"


import ACCESS_NUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: HomePage,
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
    path: "/admin/user",
    name: "用户管理",
    component: AdminUserPage,
    meta: {
      access: ACCESS_NUM.ADMIN,
    }
  },
  {
    path: "/admin/answer",
    name: "回答管理",
    component: AdminUserAnswerPage,
    meta: {
      access: ACCESS_NUM.ADMIN,
    }
  },
  {
    path: "/admin/score",
    name: "评分管理",
    component: AdminScoringResultPage,
    meta: {
      access: ACCESS_NUM.ADMIN,
    }
  },
  {
    path: "/admin/question",
    name: "题目管理",
    component: AdminQuestionPage,
    meta: {
      access: ACCESS_NUM.ADMIN,
    }
  },
  {
    path: "/admin/app",
    name: "应用管理",
    component: AdminAppPage,
    meta: {
      access: ACCESS_NUM.ADMIN,
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
    name: "退出登录",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

