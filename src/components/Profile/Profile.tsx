import {
  AddPostType,
  ProfilePageType,
  UpdateNewPostTextType,
} from "../../redux/store";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profilePage: ProfilePageType;
  addPost: AddPostType;
  updateNewPostText: UpdateNewPostTextType;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo />
      <Posts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </>
  );
}
