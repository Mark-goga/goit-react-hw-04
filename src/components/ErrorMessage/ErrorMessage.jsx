import css from './ErrorMessage.module.css'
export default function ErrorMessage() {
  return (
    <div>
      <p className={css.text}>Pleas reload this page</p>
    </div>
  );
}