import { renderEntireTree } from "../render";

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
};

export type DialogsPageType = {
  users: UserType[];
  messages: MessageType[];
};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export const rootState = {
  profilePage: {
    posts: [
      { id: 1, text: "Post 1", likesCount: 1 },
      { id: 2, text: "Post 1", likesCount: 2 },
      { id: 3, text: "Post 1", likesCount: 3 },
    ],
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
};

export type AddPostType = (text: string) => void;

export const addPost: AddPostType = (text) => {
  rootState.profilePage.posts.push({ id: Date.now(), text, likesCount: 0 });

  renderEntireTree(rootState, addPost);
};
