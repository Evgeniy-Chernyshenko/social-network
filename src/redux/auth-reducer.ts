import { api } from "../api/api";
import { AppThunk, InferActionTypes } from "./redux-store";

export type AuthType = {
  id: null | number;
  login: null | string;
  email: null | string;
};

type StateType = {
  authData: AuthType;
};

export type AuthActionTypes = InferActionTypes<typeof authActions>;

const initialState: StateType = {
  authData: { id: null, login: null, email: null },
};

export function authReducer(
  state: StateType = initialState,
  action: AuthActionTypes
): StateType {
  switch (action.type) {
    case "SET_AUTH": {
      return { ...state, authData: action.payload };
    }

    default: {
      return state;
    }
  }
}

export const authActions = {
  setAuth: (payload: AuthType) => ({
    type: "SET_AUTH" as const,
    payload,
  }),
};

export const authThunks = {
  setAuth: (): AppThunk => async (dispatch) => {
    const authData = await api.auth.getAuthData();

    if (authData.resultCode !== 0) {
      return;
    }

    dispatch(authActions.setAuth(authData.data));
  },
  login:
    (email: string, password: string, rememberMe: boolean): AppThunk =>
    async (dispatch) => {
      const authData = await api.auth.login(email, password, rememberMe);

      if (authData.resultCode !== 0) {
        return;
      }

      dispatch(
        authActions.setAuth({
          id: authData.data.userId,
          email: null,
          login: null,
        })
      );
    },
};
