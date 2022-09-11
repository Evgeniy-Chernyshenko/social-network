import { api } from "../api/api";
import { AppThunk, InferActionTypes } from "./redux-store";

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
  status: null | string;
};

export type ProfileActionTypes = InferActionTypes<typeof profileActions>;

const initialState: StateType = {
  posts: [
    { id: 1, text: "Post 1", likesCount: 1 },
    { id: 2, text: "Post 1", likesCount: 2 },
    { id: 3, text: "Post 1", likesCount: 3 },
  ],
  newPostText: "",
  profile: null,
  status: null,
};

export function profileReducer(
  state: StateType = initialState,
  action: ProfileActionTypes
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

    case "SET_STATUS": {
      return { ...state, status: action.status };
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
  setStatus: (status: string) => ({
    type: "SET_STATUS" as const,
    status,
  }),
};

export const profileThunks = {
  setUserProfile:
    (userId: number): AppThunk =>
    async (dispatch) =>
      dispatch(profileActions.setProfile(await api.profile.getProfile(userId))),
  getUserStatus:
    (userId: number): AppThunk =>
    async (dispatch) =>
      dispatch(profileActions.setStatus(await api.profile.getStatus(userId))),
  setStatus:
    (status: string): AppThunk =>
    async (dispatch) => {
      const responseData = await api.profile.setStatus(status);

      responseData.resultCode === 0 &&
        dispatch(profileActions.setStatus(status));
    },
};
