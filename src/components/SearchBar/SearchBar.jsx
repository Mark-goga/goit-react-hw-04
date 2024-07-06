import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const notify = () => toast.error("the field must be filled");

  function handleSubmit(evn) {
    evn.preventDefault();
    const formEl = evn.currentTarget;

    if (formEl.elements.topic.value.trim() === "") {
      notify();
      return;
    }

    onSearch(formEl.elements.topic.value.trim());
    formEl.reset();
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="topic"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster /> {/* Додайте компонент Toaster тут */}
    </header>
  );
}
