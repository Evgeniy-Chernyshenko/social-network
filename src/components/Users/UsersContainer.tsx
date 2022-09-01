import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { usersActions } from "../../redux/users-reducer";
import { Users } from "./Users";
import { UserType } from "../../redux/users-reducer";
import { Preloader } from "../common/Preloader/Preloader";

type MapStateToPropsReturnType = {
  users: AppStateType["usersPage"]["users"];
  totalCount: AppStateType["usersPage"]["totalCount"];
  currentPage: AppStateType["usersPage"]["currentPage"];
  pageSize: AppStateType["usersPage"]["pageSize"];
  isLoading: AppStateType["usersPage"]["isLoading"];
};
type MapDispatchToPropsReturnType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: AppStateType["usersPage"]["users"]) => void;
  setTotalCount: (totalCount: number) => void;
  setCurrentPage: (page: number) => void;
  setIsLoading: (isLoading: boolean) => void;
};

type UsersAPIResponseType = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};

class UsersAPIContainer extends Component<
  MapStateToPropsReturnType & MapDispatchToPropsReturnType
> {
  componentDidMount() {
    this.props.setIsLoading(true);

    axios
      .get<UsersAPIResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setIsLoading(false);
      });
  }

  onChangePage = (page: number) => {
    this.props.setIsLoading(true);
    axios
      .get<UsersAPIResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setCurrentPage(page);
        this.props.setIsLoading(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isLoading && <Preloader />}
        {!this.props.isLoading && (
          <Users
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            unfollow={this.props.unfollow}
            users={this.props.users}
            onChangePage={this.onChangePage}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsReturnType => ({
  users: state.usersPage.users,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  pageSize: state.usersPage.pageSize,
  isLoading: state.usersPage.isLoading,
});

export const UsersContainer = connect(
  mapStateToProps,
  usersActions
)(UsersAPIContainer);
