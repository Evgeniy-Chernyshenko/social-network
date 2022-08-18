import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

export type PostType = {
  id: number;
  text: string;
  likesCount: number;
};

export type UserType = {
  id: number;
  name: string;
  userPic: string;
};

export type MessageType = {
  id: number;
  userName: string;
  text: string;
  userPic: string;
};

export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};

export type DialogsPageType = {
  users: UserType[];
  messages: MessageType[];
  newMessageText: string;
};

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export type UpdateNewPostTextType = (text: string) => void;

export type AddPostType = () => void;

type CallbackType = () => void;

type SubscribeType = (callback: CallbackType) => void;

export type DispatchType = (action: ActionTypes) => void;

type StoreType = {
  _state: StateType;
  _callSubscriber: CallbackType;
  getState: () => StateType;
  subscribe: SubscribeType;
  dispatch: DispatchType;
};

export type ActionTypes =
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewMessageTextAC>
  | ReturnType<typeof addMessageAC>;

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Post 1", likesCount: 1 },
        { id: 2, text: "Post 1", likesCount: 2 },
        { id: 3, text: "Post 1", likesCount: 3 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      users: [
        {
          id: 1,
          name: "Stepan",
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
        },
        {
          id: 2,
          name: "Vasa",
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
        },
        {
          id: 3,
          name: "Ira",
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
        },
      ],
      messages: [
        {
          id: 1,
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
          userName: "User name 1",
          text: "Message text 1",
        },
        {
          id: 2,
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
          userName: "User name 2",
          text: "Message text 2",
        },
        {
          id: 3,
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
          userName: "User name 3",
          text: "Message text 3",
        },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber: () => {},
  subscribe(callback) {
    this._callSubscriber = callback;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber();
  },
};

export const updateNewPostTextAC = (text: string) =>
  ({
    type: "UPDATE-NEW-POST-TEXT",
    text,
  } as const);
export const addPostAC = () => ({ type: "ADD-POST" } as const);
export const updateNewMessageTextAC = (text: string) =>
  ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    text,
  } as const);
export const addMessageAC = () => ({ type: "ADD-MESSAGE" } as const);

declare const window: any;
window.state = store._state;
