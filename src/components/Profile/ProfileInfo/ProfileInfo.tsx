import styles from "./ProfileInfo.module.css";

export function ProfileInfo() {
  return (
    <div>
      <img
        className={styles.headImage}
        src="https://c.wallhere.com/photos/dd/ab/landscape_field-15790.jpg!d"
        alt="Image"
      />

      <div className={styles.userInfo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8f-cdfPQtfH1EP3x1V2pMDyLpDMmuzKbg&usqp=CAU"
          alt="Userpic"
        />
        <div>
          <h1>Evgeniy</h1>
          <ul>
            <li>Age: 31</li>
            <li>City: Moscow</li>
            <li>Education: IT-INCUBATOR</li>
            <li>Favorite color: green</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
