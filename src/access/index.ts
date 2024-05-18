import router from "@/router";
import { useLoginUserStore } from "@/store/userStore";
import ACCESS_NUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

/**
 * 进入页面前进行权限校验
 */
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore();
  let loginUser = loginUserStore.loginUser;

  // 如果之前没有尝试过获取登录用户信息，才进行自动登录
  if (!loginUser || !loginUser.userRole) {
    // 加 await 保证一定是同步的（执行完行代码才往下走，等待用户登录成功并获取到值之后才执行后续代码）
    await loginUserStore.fetchLoginUser();
    loginUser = loginUserStore.loginUser;
  }

  const needAccess = (to.meta?.access as string) ?? ACCESS_NUM.NOT_LOGIN;

  // 要访问的页面需要登录
  if (needAccess !== ACCESS_NUM.NOT_LOGIN) {
    // 如果用户未登录，则跳转到登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
    }
    // 如果已经登录了，判断权限是否足够
    if (!checkAccess(loginUser, needAccess)) {
      next(`/noAuth`);
      return;
    }
  }
  next(); // 权限校验通过，继续访问页面
});

