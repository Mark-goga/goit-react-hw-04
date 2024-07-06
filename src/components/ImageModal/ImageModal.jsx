import Modal from "react-modal"
import css from './ImageModal.module.css'
export default function ImageModal({ modalIsOpen, closeModal, imgUrl }) {
  // const customStyles = {
  //   bacgroundColor: '#black',
  // }
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <img className={css.img} src={imgUrl} alt="" />
    </Modal>
  );
}