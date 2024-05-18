// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 此处后端没有提供注释 POST /v1/user/getuser */
export async function userGetCurrentUser(
  body: API.GetCurrentUserRequest,
  options?: { [key: string]: any },
) {
  return request<API.GetCurrentUserReply>('/v1/user/getuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/user/list */
export async function userList(body: API.ListRequest, options?: { [key: string]: any }) {
  return request<API.ListReply>('/v1/user/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户端登录 POST /v1/user/login */
export async function userLogin(body: API.LoginRequest, options?: { [key: string]: any }) {
  return request<API.LoginReply>('/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册 POST /v1/user/register */
export async function userRegister(body: API.RegisterRequest, options?: { [key: string]: any }) {
  return request<API.RegisterReply>('/v1/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
