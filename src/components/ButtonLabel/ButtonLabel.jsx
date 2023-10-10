import {
    useCallback, useState, useRef, Children,
  } from 'react';
  import { classNames } from '../../helpers/classNames';
  import style from './ButtonLabel.module.scss';
  
  export const ButtonLabel = ({ children, placeholder }) => {
  
    return (
      <>
        <button
          className={classNames(style.button, {}, [])}
          type={'button'}
        > {'' || placeholder} {children}
        </button>
      </>
    );
  };
  