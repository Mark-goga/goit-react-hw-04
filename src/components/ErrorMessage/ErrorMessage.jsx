import css from './ErrorMessage.css'
export default function ErrorMessage() {
  return (
    <div>
      <p className={css.text}>Pleas reload this page</p>
    </div>
  );
}