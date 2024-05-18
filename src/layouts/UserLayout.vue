<template>
  <a-layout id="userLayout">
    <a-layout-header class="header">
      <a-space>
        <img class="logo" src="../assets/logo.png" />
        <div>戊子答题应用平台</div>
      </a-space>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">
      <a href="https://blog.csdn.net/Locky136?type=blog" target="_blank">个人博客 by 戊子仲秋</a>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
#userLayout {
  height: 100vh;
  text-align: center;
  background: url("../assets/userbackground.png") 0% 0% / 100% 100%;
}

#userLayout .logo {
  width: 48px;
  height: 48px;
}

/**/
#userLayout .header {
  background: none; /*无背景色*/
  margin-top: 16px; /*和顶部的间距*/
  font-size: 21px; /*调整大小*/
}

/**/
#userLayout .content {
  margin-bottom: 16px; /*和底部的间距*/
  padding: 20px; /*内部的间距*/
}

/**/
#userLayout .footer {
  padding: 16px; /*间距*/
  text-align: center; /*居中*/
  /*background: #efefef;*/
  text-decoration: none; /*去除底下的横线*/
}

</style>