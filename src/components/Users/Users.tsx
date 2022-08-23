import { UsersPropsType } from "./UsersContainer";
import styles from "./Users.module.css";

export function Users(props: UsersPropsType) {
  !props.users.length &&
    props.setUsers([
      {
        id: 1,
        name: "Dmitriy",
        userPic:
          "https://vokrug.tv/pic/news/d/f/b/8/dfb86cf78688546ab6836cd084cfbc34.jpg",
        statusText: "I'm a Boss",
        country: "Belarus",
        city: "Minsk",
        isFollowed: false,
      },
      {
        id: 2,
        name: "Petr",
        userPic:
          "https://vokrug.tv/pic/news/d/f/b/8/dfb86cf78688546ab6836cd084cfbc34.jpg",
        statusText: "I'm a Boss too",
        country: "Russia",
        city: "Moscow",
        isFollowed: true,
      },
      {
        id: 3,
        name: "Igor",
        userPic:
          "https://vokrug.tv/pic/news/d/f/b/8/dfb86cf78688546ab6836cd084cfbc34.jpg",
        statusText: "I'm a Boss too...",
        country: "Ukraine",
        city: "Kiev",
        isFollowed: false,
      },
    ]);

  return (
    <div className={styles.container}>
      <h2>Users</h2>

      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            <div>
              <img src={u.userPic} alt={u.name} />
              {u.isFollowed ? (
                <button onClick={() => props.unfollow(u.id)}>unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>follow</button>
              )}
            </div>
            <div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{u.name}</div>
                <div className={styles.userStatus}>{u.statusText}</div>
              </div>
              <div className={styles.userLocation}>
                <div>{u.country}</div>
                <div>{u.city}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
