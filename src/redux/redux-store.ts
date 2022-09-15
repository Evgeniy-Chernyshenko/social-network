import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthActionTypes, authReducer } from "./auth-reducer";
import { DialogsActionTypes, dialogsReducer } from "./dialogs-reducer";
import { ProfileActionTypes, profileReducer } from "./profile-reducer";
import { UsersActionTypes, usersReducer } from "./users-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { FormAction, reducer as formReducer } from "redux-form";

export type InferActionTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type AppStateType = ReturnType<typeof rootReducer>;

type AppActionsType =
  | UsersActionTypes
  | ProfileActionTypes
  | DialogsActionTypes
  | AuthActionTypes
  | FormAction;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AppActionsType
>;

export type StoreType = typeof store;

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

// @ts-ignore
window.store = store;
