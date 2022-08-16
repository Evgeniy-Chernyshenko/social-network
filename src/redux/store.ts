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
};

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export type UpdateNewPostTextType = (text: string) => void;

export type AddPostType = () => void;

type CallbackType = () => void;

type SubscribeType = (callback: CallbackType) => void;

type StoreType = {
  _state: StateType;
  getState: () => StateType;
  subscribe: SubscribeType;
  addPost: AddPostType;
  updateNewPostText: UpdateNewPostTextType;
  _onChange: CallbackType;
};

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
    },
  },
  addPost() {
    const clearText = this._state.profilePage.newPostText.trim();

    if (clearText) {
      this._state.profilePage.posts.push({
        id: Date.now(),
        text: clearText,
        likesCount: 0,
      });

      console.log(this._state.profilePage.posts);

      this._state.profilePage.newPostText = "";

      this._onChange();
    }
  },
  updateNewPostText(text: string) {
    this._state.profilePage.newPostText = text;

    this._onChange();
  },
  _onChange: () => {},
  subscribe(callback) {
    this._onChange = callback;
  },
  getState() {
    return this._state;
  },
};

declare const window: any;
window.state = store._state;
