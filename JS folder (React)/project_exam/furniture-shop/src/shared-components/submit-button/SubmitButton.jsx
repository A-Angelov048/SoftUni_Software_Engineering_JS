import styles from "./SubmitButton.module.css";

export default function SubmitButton({
  disabledButton = false,
  clickFunction,
  buttonName = "Submit",
}) {
  return (
    <button
      disabled={disabledButton}
      onClick={clickFunction}
      type="button"
      className={styles["sub-btn"]}
    >
      {buttonName}
    </button>
  );
}
