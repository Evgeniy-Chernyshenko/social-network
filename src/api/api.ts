import { AuthType } from "../redux/auth-reducer";
import { ProfileType } from "../redux/profile-reducer";
import { UserType } from "../redux/users-reducer";
import { client } from "./client";

type CommonResponseType1<T = {}> = {
  resultCode: number;
  messages: string[];
  fieldsErrors: string[];
  data: T;
};

type CommonResponseType2<T> = {
  items: T[];
  totalCount: number;
  error: null | string;
};

export const api = {
  users: {
    getUsers: (pageSize: number, currentPage: number) =>
      client
        .get<CommonResponseType2<UserType>>(
          `users?count=${pageSize}&page=${currentPage}`
        )
        .then((response) => response.data),
  },
  follow: {
    followUser: (userId: number) =>
      client
        .post<CommonResponseType1>(`follow/${userId}`)
        .then((response) => response.data),
    unfollowUser: (userId: number) =>
      client
        .delete<CommonResponseType1>(`follow/${userId}`)
        .then((response) => response.data),
  },
  auth: {
    getAuthData: () =>
      client
        .get<CommonResponseType1<AuthType>>("auth/me")
        .then((response) => response.data),
    login: (email: string, password: string, rememberMe: boolean = false) =>
      client
        .post<CommonResponseType1<{ userId: number }>>("auth/login", {
          email,
          password,
          rememberMe,
        })
        .then((response) => response.data),
    logout: () =>
      client
        .delete<CommonResponseType1>("auth/login")
        .then((response) => response.data),
  },
  profile: {
    getProfile: (userId: number) =>
      client
        .get<ProfileType>(`profile/${userId}`)
        .then((response) => response.data),
    getStatus: (userId: number) =>
      client
        .get<string>(`profile/status/${userId}`)
        .then((response) => response.data),
    setStatus: (status: string) =>
      client
        .put<CommonResponseType1>(`profile/status`, { status })
        .then((response) => response.data),
  },
};
