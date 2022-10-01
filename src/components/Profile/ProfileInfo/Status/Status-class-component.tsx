import { ChangeEvent, Component, KeyboardEvent } from "react";
import styles from "./Status.module.css";

type PropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  statusText: null | string;
  setStatus: (status: string) => void;
};

export class Status extends Component<PropsType> {
  state = {
    status: this.props.statusText,
    isEditMode: false,
  };

  componentDidUpdate(prevProps: PropsType, prevState: typeof this.state) {
    console.log("componentDidUpdate");

    if (prevProps.statusText !== this.props.statusText) {
      console.log("prevProps.statusText !== this.props.statusText");

      this.setState({ status: this.props.statusText });
    }
  }

  toggleEditMode = () => {
    if (this.state.isEditMode === true) {
      this.props.setStatus(this.state.status || "");
    }

    this.setState({ isEditMode: !this.state.isEditMode });
  };

  onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  onStatusKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && this.toggleEditMode();
  };

  render() {
    console.log("render");

    const className = [
      styles.container,
      ...(this.props.className ? [this.props.className] : []),
    ].join(" ");

    return (
      <div className={className}>
        {!this.state.isEditMode && (
          <span onDoubleClick={this.toggleEditMode}>
            {this.props.statusText || "-----"}
          </span>
        )}
        {this.state.isEditMode && (
          <input
            onBlur={this.toggleEditMode}
            onChange={this.onStatusChangeHandler}
            onKeyPress={this.onStatusKeyPressHandler}
            autoFocus
            type="text"
            value={this.state.status || ""}
          />
        )}
      </div>
    );
  }
}
