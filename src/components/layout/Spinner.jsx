import style from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={style.loadingSpinnerContainer}>
      <div className={style.loadingSpinner}></div>
    </div>
  );
}

export default Spinner;
