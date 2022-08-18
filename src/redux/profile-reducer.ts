import { ActionTypes, ProfilePageType } from "./store";

export function profileReducer(state: ProfilePageType, action: ActionTypes) {
  switch (action.type) {
    case "UPDATE-NEW-POST-TEXT": {
      state.newPostText = action.text;

      return state;
    }

    case "ADD-POST": {
      const clearText = state.newPostText.trim();

      if (clearText) {
        state.posts.push({
          id: Date.now(),
          text: clearText,
          likesCount: 0,
        });
        state.newPostText = "";
      }

      return state;
    }

    default: {
      return state;
    }
  }
}
