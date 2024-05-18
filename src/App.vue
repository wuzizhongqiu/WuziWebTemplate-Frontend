<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout/>
    </template>
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import {useRoute} from "vue-router";
// @ts-ignore
import { userList, userLogin } from "@/api/user";


const route = useRoute()



/**
 * 下面是一个登录然后测试权限的例子
 */
// const requestBody1: API.LoginRequest = {
//   // 填写请求参数，例如：name: 'John', age: 30
//   account: "111",
//   password: "111"
// };
//
// userLogin(requestBody1).then((res: any) => {
//   console.log(res);
//   if (res.data.data.token) {
//     localStorage.token = res.data.data.token
//   }
// })
//
// const requestBody: API.ListRequest = {
//   // 填写请求参数，例如：name: 'John', age: 30
//   id: "3",
// };
//
// userList(requestBody).then((res: any) => {
//   console.log(res);
// });

</script>

<style scoped>

</style>
