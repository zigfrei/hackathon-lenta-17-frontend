import {
  useCallback, useState, useRef, Children,
} from 'react';
import { classNames } from '../../helpers/classNames';
import style from './ButtonSizeL.module.scss';
import DownloadIcon from '../../images/IconDownloadLarge.svg?react';

export const ButtonSizeL = ({
  disabled,
  type,
  placeholder,
  isAuthButton,
  icon,
  children,
  // isValid,
  // handleChange,
  // values,
  // setValues,
  // ...props
}) => {
  return (
    <>
      <button disabled={disabled || false} className={classNames(style.button, {}, [])} type={type || 'button'} >
        {placeholder || 'Button'}
        <div className={style.iconWrapper}>
          {children}
        </div>
      </button>
    </>
  );
};
