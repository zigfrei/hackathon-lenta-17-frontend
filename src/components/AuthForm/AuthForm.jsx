import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './AuthForm.module.scss';
import { InputField } from '../InputField/InputField';
import { ButtonSizeL } from '../ButtonSizeL/ButtonSizeL';
import useFormValidation from '../../helpers/useFormValidation';
import DownloadIcon from '../../images/IconDownloadLarge.svg?react';

function AuthForm() {
  const {
    errors,
    isValid,
    setValues,
    handleSecondPasswordChange,
    setIsValid,
    handleChange,
    handleBlur,
    handleChangeInRealTime,
    resetForm,
    values,
  } = useFormValidation();
  return (
    <form className={style.main}>
      <h2 className={style.title}>Вход</h2>
      <div className={style.inputWrapper}>
        <InputField
          label={'Рабочий e-mail'}
          type='email'
          errors={errors}
          isValid={isValid}
          handleChange={handleChange}
          values={values}
          placeholder={'Placeholder'}
          setValues={setValues}
        />
        <InputField
          label={'Пароль'}
          type='password'
          errors={errors}
          isValid={isValid}
          handleChange={handleChange}
          values={values}
          placeholder={'Placeholder'}
          setValues={setValues}
        />
        <div className={style.buttonWrapper}>
          <ButtonSizeL
            placeholder={"Button"}
          >
          </ButtonSizeL>
        </div>
      </div>
    </form>
  );
}
export default AuthForm;
