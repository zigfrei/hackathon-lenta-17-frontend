import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './Header.module.scss';
import LogoExtraSmallWhite from '../LogoExtraSmallWhite/LogoExtraSmallWhite';
import { ButtonIconLogout } from '../ButtonIconLogout/ButtonIconLogout';
import { logoutUser } from '../../services/slices/authSlice';

function Header() {
  const { userEmail, logoutSucces } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (logoutSucces) {
      return navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logoutSucces]);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <header className={style.header}>
      <div className={style.header__container_auth}>
        <LogoExtraSmallWhite />
        <h1 className={style.header__title}>
          Система прогнозирования спроса
        </h1>
      </div>
      { userEmail && (<div className={style.header__container_main}>
        <p className={style.emailName}>{userEmail}</p>
        <ButtonIconLogout
          onClick={(e) => logOut(e)}
        />
      </div>)}
    </header>
  );
}

export default Header;
