import { InferActionTypes } from "./redux-store";

type StateType = typeof initialState;
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
  state: StateType = initialState,
  action: ActionTypes
): StateType {
  switch (action.type) {
    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.text };
    }

    case "ADD-POST": {
      const clearText = state.newPostText.trim();

      return clearText
        ? {
            ...state,
            posts: [
              ...state.posts,
              {
                id: Date.now(),
                text: clearText,
                likesCount: 0,
              },
            ],
            newPostText: "",
          }
        : state;
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
