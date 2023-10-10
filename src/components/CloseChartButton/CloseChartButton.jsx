import {
  useCallback, useMemo, useState, useRef, Children,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './CloseChartButton.module.scss';
import IconRemoveLarge from '../../images/IconRemoveLarge.svg?react';

export const CloseChartButton = ({
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(style.button, {}, [])}
        type={'button'} >
        <div className={style.iconWrapper}>
          <IconRemoveLarge />
        </div>
      </button>
    </>
  );
};
