import { classNames } from '../../helpers/classNames';
import style from './ButtonIcon.module.scss';

export const ButtonIcon = ({
  onClick,
  children,

}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(style.button, {}, [])}
        type={'button'} >
        <div className={style.iconWrapper}>{children}</div>
      </button>
    </>
  );
};
