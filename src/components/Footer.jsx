import styles from "./footer.module.css";
export default function Footer({ completedTodo, totalTodo }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodo}</span>
      <span className={styles.item}>Total Todos: {totalTodo}</span>
    </div>
  );
}
