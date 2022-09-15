import { InferActionTypes } from "./redux-store";

type StateType = typeof initialState;
export type DialogsActionTypes = InferActionTypes<typeof dialogsActions>;

const initialState = {
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
};

export function dialogsReducer(
  state: StateType = initialState,
  action: DialogsActionTypes
): StateType {
  switch (action.type) {
    case "ADD-MESSAGE": {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now(),
            userPic:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
            userName: "User name 1",
            text: action.newMessageText,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
}

export const dialogsActions = {
  addMessageAC: (newMessageText: string) =>
    ({ type: "ADD-MESSAGE", newMessageText } as const),
};
