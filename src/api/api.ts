import { AuthType } from "../redux/auth-reducer";
import { ProfileType } from "../redux/profile-reducer";
import { UserType } from "../redux/users-reducer";
import { client } from "./client";

type CommonResponseType1<T> = {
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

type UsersAPIResponseType = CommonResponseType2<UserType>;

type FollowPostDeleteAPIResponseType = CommonResponseType1<{}>;

type AuthAPIResponseType = CommonResponseType1<AuthType>;

type ProfileAPIResponseType = ProfileType;

export const api = {
  users: {
    getUsers: (pageSize: number, currentPage: number) =>
      client
        .get<UsersAPIResponseType>(
          `users?count=${pageSize}&page=${currentPage}`
        )
        .then((response) => response.data),
  },
  follow: {
    followUser: (userId: number) =>
      client
        .post<FollowPostDeleteAPIResponseType>(`follow/${userId}`)
        .then((response) => response.data),
    unfollowUser: (userId: number) =>
      client
        .delete<FollowPostDeleteAPIResponseType>(`follow/${userId}`)
        .then((response) => response.data),
  },
  auth: {
    getAuthData: () =>
      client
        .get<AuthAPIResponseType>("auth/me")
        .then((response) => response.data),
  },
  profile: {
    getProfile: (userId: number) =>
      client
        .get<ProfileAPIResponseType>(`profile/${userId}`)
        .then((response) => response.data),
  },
};
