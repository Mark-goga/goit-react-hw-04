import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  function handleSubmit(evn) {
    const formEl = evn.currentTarget;
    evn.preventDefault(); 
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
    </header>
  );
}
