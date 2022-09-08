import { AppStateType } from "../../../redux/redux-store";
import { Preloader } from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import mockUserpic from "../../../assets/images/mock-userpic.jpg";

type PropsType = {
  profile: AppStateType["profilePage"]["profile"];
};

export function ProfileInfo(props: PropsType) {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = Object.entries(props.profile.contacts).filter(
    ([, contactValue]) => contactValue
  );

  console.log(contacts);

  return (
    <div>
      <img
        className={styles.headImage}
        src="https://c.wallhere.com/photos/dd/ab/landscape_field-15790.jpg!d"
        alt="Best"
      />

      <div className={styles.userInfo}>
        <img src={props.profile.photos.small || mockUserpic} alt="Userpic" />
        <div>
          <h1>{props.profile.fullName}</h1>
          <ul>
            <li>
              <b>About me:</b> {props.profile.aboutMe}
            </li>
            {!!contacts.length &&
              contacts.map(([contactName, contactValue]) => (
                <li key={contactName}>
                  <>
                    <b>{contactName}</b>: {contactValue}
                  </>
                </li>
              ))}
            <li>
              <b>Looking for a job</b>:{" "}
              {props.profile.lookingForAJob ? "yes" : "no"}
            </li>
            <li>
              <b>Looking for a job description</b>:{" "}
              {props.profile.lookingForAJobDescription}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
