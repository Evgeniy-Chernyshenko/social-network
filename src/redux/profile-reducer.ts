import { InferActionTypes } from "./redux-store";

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof actions>;

const initialState = {
  posts: [
    { id: 1, text: "Post 1", likesCount: 1 },
    { id: 2, text: "Post 1", likesCount: 2 },
    { id: 3, text: "Post 1", likesCount: 3 },
  ],
  newPostText: "",
};

export function profileReducer(
  state: InitialStateType = initialState,
  action: ActionTypes
) {
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

export const actions = {
  updateNewPostTextAC: (text: string) =>
    ({
      type: "UPDATE-NEW-POST-TEXT",
      text,
    } as const),
  addPostAC: () => ({ type: "ADD-POST" } as const),
};
