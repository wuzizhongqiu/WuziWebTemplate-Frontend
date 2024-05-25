<template>
  <div id="home">
    <div class="searchBar">
      <a-input-search
        :style="{ width: '320px'}"
        v-model:value="value"
        placeholder="搜索"
        enter-button
        @search="onSearch"
      />
    </div>
    <div class="list">
      <a-list item-layout="vertical" size="middle"
              :grid="{ gutter: 20, column: 4 }"
              :pagination="pagination"
              :data-source="dataList"
              @change="onPageChange"
      >
<!--        ant designed vue 组件通讯的方法？-->
        <template #renderItem="{ item }">
          <a-list-item>
            <AppCard :app="item"/>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed, ref, watchEffect } from "vue";
import AppCard from "@/components/AppCard.vue";
import { message } from "ant-design-vue";
import { appListAppPage } from "@/api/app";

// 初始化搜索条件（不应该被修改）
const initSearchParams = {
  current: 1,
  pageSize: 4,
};

const searchParams = ref<API.ListAppPageRequest>({
  ...initSearchParams,
});

const dataList = ref<API.AppInfo[]>([]);
const total = ref<number>(0);

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: searchParams.value.pageSize,
};

/**
 * 加载数据
 */
const loadData = async () => {
  const res = await appListAppPage(initSearchParams).catch(()=>{
    message.error("获取数据失败")
  });
  if (res) {
    // @ts-ignore
    total.value = res.data.data.total;
    // @ts-ignore
    dataList.value = res.data.data.appList;
    console.log(dataList.value)
  }
};

// 示例
// const loadDate = async () => {
//   const res = await userListUserByPage(searchParams.value).catch((err) => {
//     console.log(err);
//     message.error("获取数据失败");
//   });
// };

/**
 * 当分页变化时，改变搜索条件，触发数据加载
 * @param page
 */
const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});


const value = ref<string>('');

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};

</script>

<style scoped>
 #home {
  margin-top: 40px;
 }

.searchBar {
   text-align: center;
  margin-bottom: 60px;
}

.list {

}
</style>
