import { AppStateType } from "../../redux/redux-store";
import { Posts } from "./Posts/Posts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type PropsType = {
  posts: AppStateType["profilePage"]["posts"];
  profile: AppStateType["profilePage"]["profile"];
  status: AppStateType["profilePage"]["status"];
  addPost: (newPostText: string) => void;
  setStatus: (text: string) => void;
};

export function Profile(props: PropsType) {
  return (
    <>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        setStatus={props.setStatus}
      />
      <Posts posts={props.posts} addPost={props.addPost} />
    </>
  );
}
