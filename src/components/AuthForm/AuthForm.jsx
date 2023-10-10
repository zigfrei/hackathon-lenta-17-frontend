import {
  useNavigate,
} from 'react-router-dom';
import { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../helpers/classNames';
import style from './AuthForm.module.scss';
import { InputField } from '../InputField/InputField';
import { ButtonSizeL } from '../ButtonSizeL/ButtonSizeL';
import useFormValidation from '../../helpers/useFormValidation';
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

  const navigate = useNavigate();
  const { loginSucces } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendData = (e) => {
    e.preventDefault();
    // Here would be hash function for password if backend have registration
    const sendData = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(sendData));
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (loginSucces) {
      return navigate('/main');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSucces]);

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
            disabled={!isValid}
            onClick={(e) => sendData(e)}
            placeholder={'Войти'}
          >
          </ButtonSizeL>
        </div>
      </form>
    </section>
  );
}
export default AuthForm;
