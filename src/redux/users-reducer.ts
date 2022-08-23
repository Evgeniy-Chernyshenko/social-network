import { InferActionTypes } from "./redux-store";

type StateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actions>;

type UserType = {
  id: number;
  name: string;
  userPic: string;
  statusText: string;
  country: string;
  city: string;
  isFollowed: boolean;
};

const initialState = {
  users: [] as UserType[],
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
          u.id === action.userId ? { ...u, isFollowed: true } : u
        ),
      };
    }

    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, isFollowed: false } : u
        ),
      };
    }

    case "SET_USERS": {
      debugger;
      return { ...state, users: action.users };
    }

    default:
      return state;
  }
};

export const actions = {
  follow: (userId: number) => ({ type: "FOLLOW" as const, userId }),
  unfollow: (userId: number) => ({ type: "UNFOLLOW" as const, userId }),
  setUsers: (users: UserType[]) => ({ type: "SET_USERS" as const, users }),
};
