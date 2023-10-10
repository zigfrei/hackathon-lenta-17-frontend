import {
  useCallback, useMemo, useState, useRef, Children,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './ButtonSizeL.module.scss';

export const ButtonSizeL = ({
  onClick,
  disabled,
  type,
  placeholder,
  children,

}) => {
  const { isLoading } = useSelector((state) => state.auth);

  const downloadIconToRender = useMemo(() => {
    return (isLoading ? (
      <span className={style.iconDownloadWrapper}></span>
    ) : null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <button disabled={disabled || false}
        onClick={onClick}
        className={classNames(style.button, {}, [])}
        type={type || 'button'} >
        {isLoading ? '' : placeholder}
        { isLoading ? '' : (<div className={classNames('', {}, [children ? style.iconWrapper : style.noIcon])} >
          {children}
        </div>) }
        {downloadIconToRender}
      </button>
    </>
  );
};
