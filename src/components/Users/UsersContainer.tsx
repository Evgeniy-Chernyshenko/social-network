import { Component, ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { usersActions, usersThunks } from "../../redux/users-reducer";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { selectors } from "../../redux/selectors";
import { compose } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

class UsersAPIContainer extends Component<
  ConnectedProps<typeof connector> & RouteComponentProps<{ page: string }>
> {
  componentDidMount() {
    this.props.getUsers(+this.props.match.params.page || 1);
  }

  onChangePage = (page: number) => {
    this.props.history.push(`/users/${page}`);
    this.props.getUsers(page);
  };

  render() {
    return (
      <>
        {this.props.isLoading && <Preloader />}
        {!this.props.isLoading && (
          <Users
            currentPage={+this.props.match.params.page || 1}
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

const mapStateToProps = (state: AppStateType): AppStateType["usersPage"] => {
  console.log("UsersContainer mapStateToProps");

  return {
    users: selectors.getUsers(state),
    totalCount: selectors.getUsersTotalCount(state),
    pageSize: selectors.getUsersPageSize(state),
    isLoading: selectors.getUsersIsLoading(state),
    fetchingInProgress: selectors.getUsersFetchingInProgress(state),
  };
};

const connector = connect(mapStateToProps, {
  ...usersActions,
  ...usersThunks,
});

export const UsersContainer = compose<ComponentType>(
  connector,
  withRouter
)(UsersAPIContainer);
