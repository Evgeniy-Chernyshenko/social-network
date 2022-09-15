import styles from "./Login.module.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { authThunks } from "../../redux/auth-reducer";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import { formValidators } from "../../utils/form-validators";
import { FormControl } from "../common/FormControl/FormControl";

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2 className={styles.pageTitle}>Login</h2>
      <Field
        name="login"
        componentType="input"
        component={FormControl}
        type="text"
        placeholder="Login"
        validate={[formValidators.required]}
      />
      <Field
        name="password"
        componentType="input"
        component={FormControl}
        type="password"
        placeholder="Password"
        validate={[formValidators.required]}
      />
      <Field
        name="rememberMe"
        componentType="input"
        labelText="remember me"
        component={FormControl}
        type="checkbox"
      />
      {props.error && <div className={styles.error}>{props.error}</div>}
      <button>Submit</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);

const LoginWithoutRedux = (props: ConnectedProps<typeof connector>) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  const onFormSubmitHandler = (formData: FormDataType) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };

  return (
    <div className={styles.container}>
      <ReduxLoginForm onSubmit={onFormSubmitHandler} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  isAuth: !!state.auth.authData.id,
});

const connector = connect(mapStateToProps, authThunks);

export const Login = connector(LoginWithoutRedux);
