declare namespace API {
  type CreatePostReply = {
    id?: string;
  };

  type CreatePostRequest = {
    title?: string;
    text?: string;
    tags?: string;
    userId?: string;
  };

  type GetCurrentUserReply = {
    account?: string;
    password?: string;
    username?: string;
    avatarUrl?: string;
    gender?: number;
    userInfo?: string;
    userRole?: number;
  };

  type GetCurrentUserRequest = {};

  type ListReply = {
    username?: string;
    avatarUrl?: string;
    userInfo?: string;
  };

  type ListRequest = {
    id?: string;
  };

  type LoginReply = {
    id?: string;
    token?: string;
  };

  type LoginRequest = {
    account?: string;
    password?: string;
  };

  type RegisterReply = {
    id?: string;
  };

  type RegisterRequest = {
    account?: string;
    password?: string;
    checkPassword?: string;
  };
}
