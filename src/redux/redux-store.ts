import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { AuthActionTypes, authReducer } from "./auth-reducer";
import { DialogsActionTypes, dialogsReducer } from "./dialogs-reducer";
import { ProfileActionTypes, profileReducer } from "./profile-reducer";
import { UsersActionTypes, usersReducer } from "./users-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { FormAction, reducer as formReducer } from "redux-form";
import { AppActionTypes, appReducer } from "./app-reducer";

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
  | FormAction
  | AppActionTypes;

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
  app: appReducer,
});

// export const store = legacy_createStore(
//   rootReducer,
//   applyMiddleware(thunkMiddleware)
// );

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.store = store;
