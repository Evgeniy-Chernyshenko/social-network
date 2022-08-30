import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import { UserType } from "../../redux/users-reducer";
import mockUserpic from "../../assets/images/mock-userpic.jpg";
import { Component } from "react";

type UsersResponseType = {
  items: UserType[];
};

export class Users extends Component<UsersPropsType> {
  componentDidMount() {
    axios
      .get<UsersResponseType>(
        "https://social-network.samuraijs.com/api/1.0/users"
      )
      .then((response) => this.props.setUsers(response.data.items));
  }

  render = () => (
    <div className={styles.container}>
      <h2>Users</h2>

      <ul>
        {this.props.users.map((u) => (
          <li key={u.id}>
            <div>
              <img src={u.photos.small || mockUserpic} alt={u.name} />
              {u.followed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>follow</button>
              )}
            </div>
            <div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{u.name}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </div>
              {/* <div className={styles.userLocation}>
                <div>{u.country}</div>
                <div>{u.city}</div>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
