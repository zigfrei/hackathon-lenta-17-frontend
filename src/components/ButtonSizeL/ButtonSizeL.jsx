import {
  useCallback, useState, useRef, Children,
} from 'react';
import { classNames } from '../../helpers/classNames';
import style from './ButtonSizeL.module.scss';
// import DownloadIcon from '../../images/IconDownloadLarge.svg?react';

export const ButtonSizeL = ({
  disabled,
  type,
  // placeholder,
  // isAuthButton,
  // icon,
  children,
  // isValid,
  // handleChange,
  // values,
  // setValues,
  // ...props
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isPlaceholder, setIsPlaceholder] = useState("Button")

  const onClickFunc = () => {
    setIsLoading(!isLoading);

    isPlaceholder === "Button" ?
      setIsPlaceholder("") :
      setIsPlaceholder("Button");
  }

  return (
    <>
      <button
        disabled={disabled || false}
        className={classNames(style.button, {}, [])}
        type={type || 'button'}
        onClick={onClickFunc}
      >
        {isPlaceholder}
        <div className={
          isLoading ?
            style.iconWrapper_loading :
            style.iconWrapper
        }>
          {children}
        </div>
      </button>
    </>
  );
};
