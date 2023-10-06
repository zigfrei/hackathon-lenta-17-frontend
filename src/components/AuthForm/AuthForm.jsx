import { NavLink } from 'react-router-dom';
import { useCallback, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './AuthForm.module.scss';
import { InputField } from '../InputField/InputField';
import { ButtonSizeL } from '../ButtonSizeL/ButtonSizeL';
import useFormValidation from '../../helpers/useFormValidation';
import DownloadIcon from '../../images/IconDownloadLarge.svg?react';
import { loginUser } from '../../services/slices/authSlice';

function AuthForm() {
  const {
    errors,
    isValid,
    setValues,
    setErrors,
    handleSecondPasswordChange,
    setIsValid,
    handleChange,
    handleBlur,
    handleChangeInRealTime,
    resetForm,
    values,
  } = useFormValidation();

  const { isLoading, registerSucces, registerError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    // Here would be hash function for password if backend have registration
    const sendData = {
      email: values.email,
      password: values.password,
    };

    console.log(sendData);
    dispatch(loginUser(sendData));
  };

  return (
    <section className={style.mainFormWrapper}>
      <form className={style.main}>
        <h2 className={style.title}>Вход</h2>
        <div className={style.inputWrapper}>
          <InputField
            setErrors={setErrors}
            setIsValid={setIsValid}
            label={'E-mail'}
            type='email'
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
            placeholder={'petya@lenta.ru'}
            setValues={setValues}
          />
          <InputField
            setErrors={setErrors}
            setIsValid={setIsValid}
            label={'Пароль'}
            type='password'
            errors={errors}
            isValid={isValid}
            handleChange={handleChange}
            values={values}
            placeholder={'Пароль'}
            setValues={setValues}
          />
        </div>
        <div className={style.buttonWrapper}>
          <ButtonSizeL
            loader={true}
            disabled={!isValid}
            onClick={(e) => sendData(e)}
            placeholder={'Войти'}
          >
            {/* <DownloadIcon/> */}
          </ButtonSizeL>
        </div>
      </form>
    </section>
  );
}
export default AuthForm;
