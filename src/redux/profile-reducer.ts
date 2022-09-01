import { InferActionTypes } from "./redux-store";

type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type ProfileType = {
  aboutMe: string;
  contacts: { [key: string]: null | string }[];
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: null | string;
    large: null | string;
  };
};

type StateType = {
  posts: PostType[];
  newPostText: string;
  profile: null | ProfileType;
};
type ActionTypes = InferActionTypes<typeof profileActions>;

const initialState: StateType = {
  posts: [
    { id: 1, text: "Post 1", likesCount: 1 },
    { id: 2, text: "Post 1", likesCount: 2 },
    { id: 3, text: "Post 1", likesCount: 3 },
  ],
  newPostText: "",
  profile: null,
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

    case "SET_PROFILE": {
      return { ...state, profile: action.profile };
    }

    default: {
      return state;
    }
  }
}

export const profileActions = {
  updateNewPostText: (text: string) => ({
    type: "UPDATE-NEW-POST-TEXT" as const,
    text,
  }),
  addPost: () => ({ type: "ADD-POST" as const }),
  setProfile: (profile: ProfileType) => ({
    type: "SET_PROFILE" as const,
    profile,
  }),
};
