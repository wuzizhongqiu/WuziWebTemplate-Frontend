import ACCESS_NUM from "@/access/accessEnum";

/**
 * 检查用户权限（判断当前用户有没有某个权限）
 * @param loginUser
 * @param needAccess
 */
const checkAccess = (loginUser: API.GetCurrentUserReply, needAccess = ACCESS_NUM.NOT_LOGIN) => {
  // 获取当前用户权限（如果没有 userRole 表示未登录）
  let loginUserAccess = loginUser?.userRole ?? ACCESS_NUM.NOT_LOGIN;

  if (loginUserAccess === 10) {
    loginUserAccess = ACCESS_NUM.USER;
  }
  if (loginUserAccess === 20) {
    loginUserAccess = ACCESS_NUM.ADMIN;
  }

  // 未登录也能访问
  if (needAccess === ACCESS_NUM.NOT_LOGIN) {
    return true;
  }
  // 如果需要用户权限
  if (needAccess === ACCESS_NUM.USER) {
    if (loginUserAccess === ACCESS_NUM.NOT_LOGIN) {
      return false;
    }
  }
  // 如果需要管理员权限
  if (needAccess === ACCESS_NUM.ADMIN) {
    if (loginUserAccess !== ACCESS_NUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;