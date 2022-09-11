import { Component, ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { usersActions, usersThunks } from "../../redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIContainer extends Component<ConnectedProps<typeof connector>> {
  componentDidMount() {
    this.props.getUsers();
  }

  onChangePage = (page: number) => {
    this.props.getUsers(page);
  };

  render() {
    return (
      <>
        {this.props.isLoading && <Preloader />}
        {!this.props.isLoading && (
          <Users
            currentPage={this.props.currentPage}
            followUser={this.props.followUser}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            unfollowUser={this.props.unfollowUser}
            users={this.props.users}
            onChangePage={this.onChangePage}
            fetchingInProgress={this.props.fetchingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): AppStateType["usersPage"] => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  isLoading: state.usersPage.isLoading,
  fetchingInProgress: state.usersPage.fetchingInProgress,
});

const connector = connect(mapStateToProps, {
  ...usersActions,
  ...usersThunks,
});

export const UsersContainer = compose<ComponentType>(
  connector,
  withAuthRedirect
)(UsersAPIContainer);
