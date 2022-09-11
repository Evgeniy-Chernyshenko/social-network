import { ComponentType } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/redux-store";

export const withAuthRedirect = <T,>(Component: ComponentType<T>) => {
  const ComponentWithAuthRedirect = ({
    isAuth,
    dispatch,
    ...restProps
  }: ConnectedProps<typeof connector>) => {
    if (!isAuth) {
      return <Redirect to={"/login"} />;
    }

    return <Component {...(restProps as T)} />;
  };

  const mapStateToProps = (state: AppStateType) => {
    return { isAuth: !!state.auth.authData.id };
  };

  const connector = connect(mapStateToProps);

  return connector(ComponentWithAuthRedirect);
};
