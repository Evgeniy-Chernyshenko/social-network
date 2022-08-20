import { actions } from "../../redux/profile-reducer";
import { StoreContext } from "../../StoreContext";
import { Profile } from "./Profile";

export function ProfileContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();

        const updateNewPostTexCallback = (newPostText: string) => {
          store.dispatch(actions.updateNewPostTextAC(newPostText));
        };

        const addPostCallback = () => {
          store.dispatch(actions.addPostAC());
        };

        return (
          <Profile
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostTexCallback={updateNewPostTexCallback}
            addPostCallback={addPostCallback}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
