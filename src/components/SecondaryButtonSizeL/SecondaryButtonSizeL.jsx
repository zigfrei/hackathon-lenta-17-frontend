import {
    useCallback, useState, useRef, Children,
  } from 'react';
  import { classNames } from '../../helpers/classNames';
  import style from './SecondaryButtonSizeL.module.scss';
  
  export const SecondaryButtonSizeL = ({
    disabled,
    type,
    children,
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
          className={
            isLoading ?
              style.button_loading :
              style.button
          }
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
  