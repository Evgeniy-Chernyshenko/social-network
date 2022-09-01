import { InferActionTypes } from "./redux-store";

type StateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof usersActions>;

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
  currentPage: 1,
  pageSize: 10,
  isLoading: true,
};

export const usersReducer = (
  state: StateType = initialState,
  action: ActionTypes
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

    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }

    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.isLoading };
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
};
