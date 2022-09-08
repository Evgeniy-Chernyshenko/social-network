import { api } from "../api/api";
import { ProfileType } from "./profile-reducer";
import { AppThunk, InferActionTypes } from "./redux-store";

export type AuthType = {
  id: null | number;
  login: null | string;
  email: null | string;
};

type StateType = {
  authData: AuthType;
  profile: null | ProfileType;
};

export type AuthActionTypes = InferActionTypes<typeof authActions>;

const initialState: StateType = {
  authData: { id: null, login: null, email: null },
  profile: null,
};

export function authReducer(
  state: StateType = initialState,
  action: AuthActionTypes
): StateType {
  switch (action.type) {
    case "SET_AUTH": {
      return { ...state, authData: action.payload };
    }

    case "SET_AUTH_PROFILE": {
      return { ...state, profile: action.payload };
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
  setProfile: (payload: ProfileType) => ({
    type: "SET_AUTH_PROFILE" as const,
    payload,
  }),
};

export const authThunks = {
  setAuthAndProfile: (): AppThunk => async (dispatch) => {
    const authData = await api.auth.getAuthData();

    if (authData.resultCode !== 0) {
      return;
    }

    dispatch(authActions.setAuth(authData.data));

    const userId = authData.data.id;

    if (!userId) {
      return;
    }

    const profile = await api.profile.getProfile(userId);

    if (!profile) {
      return;
    }

    dispatch(authActions.setProfile(profile));
  },
};
