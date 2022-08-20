import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

export type InferActionTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type StateType = ReturnType<typeof rootReducer>;

export type StoreType = typeof store;

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
});
export const store = createStore(rootReducer);

const state = store.getState();
// @ts-ignore
window.state = state;
