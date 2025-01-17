import css from './ImageCard.module.css'
export default function ImageCard({ image: { alt_description, urls }, onClickImage }) {
  function handleClick() {
    onClickImage(urls.full);
  }
  return (
    <div className={css.box}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
      />
    </div>
  );
}