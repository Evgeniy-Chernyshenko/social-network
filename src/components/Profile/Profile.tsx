import { AddPostType, ProfilePageType } from "../../redux/state";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  state: ProfilePageType;
  addPost: AddPostType;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo />
      <Posts state={props.state.posts} addPost={props.addPost} />
    </>
  );
}
