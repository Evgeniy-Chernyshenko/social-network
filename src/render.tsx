import ReactDOM from "react-dom/client";
import App from "./App";
import { AddPostType, RootStateType } from "./redux/state";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const renderEntireTree = (
  rootState: RootStateType,
  addPost: AddPostType
) => {
  root.render(<App state={rootState} addPost={addPost} />);
};
