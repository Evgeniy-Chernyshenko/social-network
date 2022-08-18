import { ActionTypes, DialogsPageType } from "./store";

export function dialogsReducer(state: DialogsPageType, action: ActionTypes) {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT": {
      state.newMessageText = action.text;

      return state;
    }

    case "ADD-MESSAGE": {
      const clearText = state.newMessageText.trim();

      if (clearText) {
        state.messages.push({
          id: Date.now(),
          userPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU",
          userName: "User name 1",
          text: clearText,
        });
        state.newMessageText = "";
      }

      return state;
    }

    default: {
      return state;
    }
  }
}
