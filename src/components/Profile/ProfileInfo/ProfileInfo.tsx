import { AppStateType } from "../../../redux/redux-store";
import { Preloader } from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import mockUserpic from "../../../assets/images/mock-userpic.jpg";
import { Status } from "./Status/Status";

type PropsType = {
  profile: AppStateType["profilePage"]["profile"];
  status: AppStateType["profilePage"]["status"];
  setStatus: (status: string) => void;
};

export function ProfileInfo(props: PropsType) {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = Object.entries(props.profile.contacts).filter(
    ([, contactValue]) => contactValue
  );

  return (
    <div>
      <div className={styles.userInfo}>
        <img src={props.profile.photos.small || mockUserpic} alt="Userpic" />
        <div>
          <h1 className={styles.fullName}>{props.profile.fullName}</h1>
          <Status
            statusText={props.status}
            className={styles.status}
            setStatus={props.setStatus}
          />
          <ul>
            <li>
              <b>About me</b>: {props.profile.aboutMe}
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
