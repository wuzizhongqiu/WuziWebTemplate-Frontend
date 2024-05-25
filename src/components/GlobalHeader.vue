<template>
  <a-row id="globalHeader" :wrap="false"> <!-- /* :wrap="false" 不换行 -->
    <a-col flex="auto">
      <a-menu mode="horizontal" :selectedKeys="selectedKeys" @click="handleMenuClick">
        <a-menu-item
          key="0"
          :style="{padding: 0, marginRight: '38px'}"
          disabled
        >
          <div class="titleBar">
            <img class="logo" src="../assets/logo.png" />
            <div class="title">答题应用平台</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div v-if="loginUserStore.loginUser.username !== '未登录'">
        {{ loginUserStore.loginUser.username }}
      </div>
      <div v-else>
        <a-button type="primary" href="/user/login">登录</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useLoginUserStore } from "@/store/userStore";
import checkAccess from "@/access/checkAccess";

const loginUserStore = useLoginUserStore();

const router = useRouter();
// 当前选中的菜单项
const selectedKeys = ref(["/"]);
// 路由跳转时，自动更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// 展示在菜单栏的数组（filter 拦截器的使用）
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单
    if (!checkAccess(loginUserStore.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});


// 处理菜单点击事件
const handleMenuClick = ({ item, key, keyPath }: { item: any; key: string; keyPath: any }) => {
  router.push({
    path: key
  });
};

</script>

<style scoped>
/**/
#globalHeader {

}

/**/
.titleBar {
  display: flex; /*弹性盒子布局（成功让 logo 和 title 排成一排了）*/
  align-items: center; /*垂直居中*/
}

/**/
.title {
  color: black;
  margin-left: 16px; /*左边距*/
}

/**/
.logo {
  height: 48px;

}

</style>