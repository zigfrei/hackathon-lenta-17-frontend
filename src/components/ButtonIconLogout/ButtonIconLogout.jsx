import {
  useCallback, useMemo, useState, useRef, Children,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './ButtonIconLogout.module.scss';
import IconLogoutLarge from '../../images/IconLogoutLarge.svg?react';

export const ButtonIconLogout = ({
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(style.button, {}, [])}
        type={'button'} >
        <div className={style.iconWrapper}>
          <IconLogoutLarge />
        </div>
      </button>
    </>
  );
};
