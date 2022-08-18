import { DispatchType, ProfilePageType } from "../../redux/store";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  profilePage: ProfilePageType;
  dispatch: DispatchType;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo />
      <Posts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </>
  );
}
