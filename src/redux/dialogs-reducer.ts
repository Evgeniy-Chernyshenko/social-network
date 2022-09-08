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
  newMessageText: "",
};

export function dialogsReducer(
  state: StateType = initialState,
  action: DialogsActionTypes
): StateType {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT": {
      return { ...state, newMessageText: action.text };
    }

    case "ADD-MESSAGE": {
      const clearText = state.newMessageText.trim();

      return clearText
        ? {
            ...state,
            messages: [
              ...state.messages,
              {
                id: Date.now(),
                userPic:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
                userName: "User name 1",
                text: clearText,
              },
            ],
            newMessageText: "",
          }
        : state;
    }

    default: {
      return state;
    }
  }
}

export const dialogsActions = {
  updateNewMessageTextAC: (text: string) =>
    ({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      text,
    } as const),
  addMessageAC: () => ({ type: "ADD-MESSAGE" } as const),
};
