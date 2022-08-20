import { StateType } from "../../redux/redux-store";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  posts: StateType["profilePage"]["posts"];
  newPostText: string;
  updateNewPostTexCallback: (newPostText: string) => void;
  addPostCallback: () => void;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo />
      <Posts
        posts={props.posts}
        newPostText={props.newPostText}
        updateNewPostTexCallback={props.updateNewPostTexCallback}
        addPostCallback={props.addPostCallback}
      />
    </>
  );
}
