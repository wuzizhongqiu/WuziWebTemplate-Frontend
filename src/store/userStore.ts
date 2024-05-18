import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { userGetCurrentUser, userList, userLogin } from "@/api/user";
import ACCESS_NUM from "@/access/accessEnum";

/**
 * 这里的作用是：
 * 外面只要拿到 loginUser 就能获取到用户信息（以及改变用户登录状态等）
 */

export const useLoginUserStore = defineStore("", () => {
  const loginUser = ref<API.GetCurrentUserReply>({
    username: "未登录"
  });

  function setLoginUser(newLoginUser: API.GetCurrentUserReply) {
    loginUser.value = newLoginUser;
  }

  async function fetchLoginUser() {
    // 这里放一个获取用户当前登录态的方法
    // @ts-ignore
    const res = await userGetCurrentUser({}); // TODO 调用失败直接崩溃，需要有一个异常处理才行
    if (res.status == 200) { // 获取到用户当前的信息
      // @ts-ignore
      loginUser.value = res.data.data;
    } else {
      loginUser.value = {};
    }
  }

  return { setLoginUser, fetchLoginUser, loginUser };
});