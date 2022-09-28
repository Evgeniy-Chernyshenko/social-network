import { AppStateType } from "./redux-store";
import { createSelector } from "reselect";

const getUsers = (state: AppStateType) => state.usersPage.users;

export const selectors = {
  getUsers: createSelector(getUsers, (users) => {
    return users.filter((v) => true);
  }),
  getUsersTotalCount: (state: AppStateType) => state.usersPage.totalCount,
  getUsersPageSize: (state: AppStateType) => state.usersPage.pageSize,
  getUsersIsLoading: (state: AppStateType) => state.usersPage.isLoading,
  getUsersFetchingInProgress: (state: AppStateType) =>
    state.usersPage.fetchingInProgress,
};
