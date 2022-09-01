import { AppStateType } from "../../redux/redux-store";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  posts: AppStateType["profilePage"]["posts"];
  newPostText: AppStateType["profilePage"]["newPostText"];
  profile: AppStateType["profilePage"]["profile"];
  updateNewPostText: (text: string) => void;
  addPost: () => void;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo profile={props.profile} />
      <Posts
        posts={props.posts}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </>
  );
}
