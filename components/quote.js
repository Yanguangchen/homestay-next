import styles from "./quote.module.css";

function Quote() {
  return (
    <div className={styles.containerWrapper}>
      <img src="./Assets/quote.png" className={styles.quoteImage} alt="quote" />
    </div>
  );
}

export default Quote;
