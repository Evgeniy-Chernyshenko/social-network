import styles from "./Users.module.css";
import mockUserpic from "../../assets/images/mock-userpic.jpg";
import { Pagination } from "../common/Pagination/Pagination";
import { AppStateType } from "../../redux/redux-store";
import { NavLink } from "react-router-dom";

type PropsType = {
  users: AppStateType["usersPage"]["users"];
  totalCount: AppStateType["usersPage"]["totalCount"];
  currentPage: AppStateType["usersPage"]["currentPage"];
  pageSize: AppStateType["usersPage"]["pageSize"];
  fetchingInProgress: AppStateType["usersPage"]["fetchingInProgress"];
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
  onChangePage: (page: number) => void;
};

export function Users(props: PropsType) {
  return (
    <>
      <h2 className={styles.pageTitle}>Users</h2>
      <Pagination
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        paginationMaxSize={5}
        totalCount={props.totalCount}
        className={styles.paginationTop}
        onChangePage={props.onChangePage}
      />
      <ul className={styles.listContainer}>
        {props.users.map((u) => (
          <li key={u.id} className={styles.listItem}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small || mockUserpic}
                  alt={u.name}
                  className={styles.userpic}
                />
              </NavLink>
              {u.followed ? (
                <button
                  disabled={props.fetchingInProgress.some((v) => v === u.id)}
                  onClick={() => {
                    props.unfollowUser(u.id);
                  }}
                  className={styles.followUnfollowButton}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.fetchingInProgress.some((v) => v === u.id)}
                  onClick={() => {
                    props.followUser(u.id);
                  }}
                  className={styles.followUnfollowButton}
                >
                  follow
                </button>
              )}
            </div>
            <div>
              <div className={styles.userInfo}>
                <NavLink to={`/profile/${u.id}`}>
                  <div className={styles.userName}>{u.name}</div>
                </NavLink>
                <div className={styles.userStatus}>{u.status}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        paginationMaxSize={5}
        totalCount={props.totalCount}
        className={styles.paginationBottom}
        onChangePage={props.onChangePage}
      />
    </>
  );
}
