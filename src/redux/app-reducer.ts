import { authThunks } from "./auth-reducer";
import { AppThunk, InferActionTypes } from "./redux-store";

type StateType = {
  isInitialized: boolean;
  fake: number;
};

export type AppActionTypes = InferActionTypes<typeof appActions>;

const initialState: StateType = {
  isInitialized: false,
  fake: 0,
};

export function appReducer(
  state: StateType = initialState,
  action: AppActionTypes
): StateType {
  switch (action.type) {
    case "SET_IS_INITIALIZED": {
      return { ...state, ...action.payload };
    }

    case "INCREMENT_FAKE": {
      return { ...state, fake: state.fake + 1 };
    }

    default: {
      return state;
    }
  }
}

export const appActions = {
  setIsInitialized: (isInitialized: boolean) => ({
    type: "SET_IS_INITIALIZED" as const,
    payload: { isInitialized },
  }),
  incrementFake: () => ({
    type: "INCREMENT_FAKE" as const,
  }),
};

export const appThunks = {
  initializeApp: (): AppThunk => async (dispatch) => {
    await dispatch(authThunks.setAuth());
    dispatch(appActions.setIsInitialized(true));
  },
};
