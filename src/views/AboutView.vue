<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button @click="userLogout">退出登录</a-button>
  </div>
</template>

<script setup lang="ts">

import { useLoginUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";

const loginUserStore = useLoginUserStore();

const router = useRouter();

async function userLogout() {
  localStorage.token = ""
  await router.push({
    path: "/user/login",
    replace: true
  });
}

</script>