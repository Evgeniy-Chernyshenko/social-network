import { api } from "../api/api";
import { AppThunk, InferActionTypes } from "./redux-store";

type StateType = typeof initialState;
export type UsersActionTypes = InferActionTypes<typeof usersActions>;

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: null | string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  followed: boolean;
};

const initialState = {
  users: [] as UserType[],
  totalCount: 0,
  pageSize: 10,
  isLoading: true,
  fetchingInProgress: [] as number[],
};

export const usersReducer = (
  state: StateType = initialState,
  action: UsersActionTypes
): StateType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      };
    }

    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };
    }

    case "SET_USERS": {
      return { ...state, users: action.users };
    }

    case "SET_TOTAL_COUNT": {
      return { ...state, totalCount: action.totalCount };
    }

    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }

    case "SET_FETCHING_IN_PROGRESSS": {
      return {
        ...state,
        fetchingInProgress: action.inProgress
          ? [...state.fetchingInProgress, action.userId]
          : state.fetchingInProgress.filter((v) => v !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const usersActions = {
  follow: (userId: number) => ({ type: "FOLLOW" as const, userId }),
  unfollow: (userId: number) => ({ type: "UNFOLLOW" as const, userId }),
  setUsers: (users: UserType[]) => ({ type: "SET_USERS" as const, users }),
  setTotalCount: (totalCount: number) => ({
    type: "SET_TOTAL_COUNT" as const,
    totalCount,
  }),
  setCurrentPage: (currentPage: number) => ({
    type: "SET_CURRENT_PAGE" as const,
    currentPage,
  }),
  setIsLoading: (isLoading: boolean) => ({
    type: "SET_IS_LOADING" as const,
    isLoading,
  }),
  setFetchingInProgress: (userId: number, inProgress: boolean) => ({
    type: "SET_FETCHING_IN_PROGRESSS" as const,
    userId,
    inProgress,
  }),
};

export const usersThunks = {
  getUsers:
    (pageNumber = 1, pageSize = 10): AppThunk =>
    (dispatch) => {
      dispatch(usersActions.setCurrentPage(pageNumber));
      dispatch(usersActions.setIsLoading(true));

      api.users.getUsers(pageSize, pageNumber).then((data) => {
        dispatch(usersActions.setUsers(data.items));
        dispatch(usersActions.setTotalCount(data.totalCount));
        dispatch(usersActions.setIsLoading(false));
      });
    },
  followUser:
    (userId: number): AppThunk =>
    async (dispatch) => {
      dispatch(usersActions.setFetchingInProgress(userId, true));

      const responseData = await api.follow.followUser(userId);
      if (responseData.resultCode === 0) {
        dispatch(usersActions.follow(userId));
      }

      dispatch(usersActions.setFetchingInProgress(userId, false));
    },
  unfollowUser:
    (userId: number): AppThunk =>
    async (dispatch) => {
      dispatch(usersActions.setFetchingInProgress(userId, true));

      const responseData = await api.follow.unfollowUser(userId);
      if (responseData.resultCode === 0) {
        dispatch(usersActions.unfollow(userId));
      }

      dispatch(usersActions.setFetchingInProgress(userId, false));
    },
};
