import { Posts } from "./Posts/Posts";
import { ProfilePropsType } from "./ProfileContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export function Profile(props: ProfilePropsType) {
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
