import styles from "./UserCard.module.css";

export default function UserCard(props) {
  if (!props.name || !props.avatar) {
    return (
      <div className={styles.wrapper} styles={{ textAlign: "center" }}>
        Please click on generate avatar
      </div>
    );
  }

  if (props.isLoading) {
    return <div className={styles.wrapper}>loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{props.name}</h2>
      <img width={150} height={150} src={props.avatar} />
    </div>
  );
}
