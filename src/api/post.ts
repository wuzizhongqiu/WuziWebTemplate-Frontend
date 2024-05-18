// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 创建帖子 POST /v1/post/createpost */
export async function postCreatePost(
  body: API.CreatePostRequest,
  options?: { [key: string]: any },
) {
  return request<API.CreatePostReply>('/v1/post/createpost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
