import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { AppStateType } from "../../../redux/redux-store";
import { formValidators } from "../../../utils/form-validators";
import { Button } from "../../common/Button/Button";
import { FormControl } from "../../common/FormControl/FormControl";
import { Post } from "./Post/Post";
import styles from "./Posts.module.css";

type FormDataType = {
  newPostText: string;
};

type PropsType = {
  posts: AppStateType["profilePage"]["posts"];
  addPost: (newPostText: string) => void;
};

const PostForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newPostText"
        placeholder="Type text here..."
        component={FormControl}
        componentType="textarea"
        validate={[formValidators.required]}
      ></Field>
      <Button>Add post</Button>
    </form>
  );
};

const ReduxPostForm = reduxForm<FormDataType>({
  form: "post",
})(PostForm);

export function Posts(props: PropsType) {
  const postsElements = props.posts.map((post) => (
    <Post key={post.id} text={post.text} likesCount={post.likesCount} />
  ));

  const onAddPostClickHandler = (formData: FormDataType) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={styles.posts}>
      <h2>My posts</h2>
      <ReduxPostForm onSubmit={onAddPostClickHandler} />

      <ul>{postsElements}</ul>
    </div>
  );
}
