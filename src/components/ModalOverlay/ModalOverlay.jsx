import style from './ModalOverlay.module.scss';

export const ModalOverlay = ({ onClose }) => {
  return (
    <div className={style.main} onClick={onClose}>
    </div>
  );
};
