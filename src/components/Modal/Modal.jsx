import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import style from './Modal.module.scss';
import Charts from '../Charts/Charts';
import { CloseChartButton } from '../CloseChartButton/CloseChartButton';
// без проверки на null
const modalRoot = document.getElementById('react-modals');

export const Modal = (props) => {
  const escButtonClose = (e) => {
    if (e.key === 'Escape') {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escButtonClose);
    return () => {
      document.removeEventListener('keydown', escButtonClose);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={style.wrapper}>
        <div className={style.popup}>
          <div className={style.header}>
            <div>
              <h2 className={style.title}>Прогноз по ТК123/.../Булочка с персиком и сливочным кремом{props.title}</h2>
            </div>
            <div>
              <h3 className={style.subtitle}>Период: 01/10/2023–14/10/2023{props.subtitle}</h3>
            </div>
          </div>
          <div className={style.close}>
            <CloseChartButton onClick={props.onClose} />
          </div>
          <Charts />
        </div>
        <ModalOverlay onClose={props.onClose} />
      </div>
    </>,
    modalRoot,
  );
};
