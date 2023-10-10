/* eslint-disable no-nested-ternary */
/* eslint-disable no-useless-escape */
import { useCallback, useState, useRef } from 'react';
import { classNames } from '../../helpers/classNames';
import style from './InputField.module.scss';

export const InputField = ({
  label,
  setIsValid,
  disabled,
  type,
  placeholder,
  errors,
  isValid,
  handleChange,
  values,
  setValues,
  setErrors,
  ...props
}) => {
  const inputSettings = {
    email: {
      type: 'email',
      name: 'email',
      placeholder: 'E-MAIL*',
      pattern:
        '([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}',
      errorText: 'Введите корректный e-mail',
      maxLength: '64',
      minLength: '2',
    },
    name: {
      type: 'text',
      name: 'name',
      placeholder: 'ИМЯ',
      errorText: 'Имя должно быть не менее 2-x символов',
      maxLength: '25',
      minLength: '2',
    },

    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Пароль',
      errorText: 'Пароль должен быть не менее 8 символов',
      maxLength: '20',
      minLength: '8',
    },
  };

  const inputRef = useRef(null);

  const [visible, setVisible] = useState(false);

  const resetClick = () => {
    inputRef.current.value = '';
    setValues({ ...values, [inputRef.current.name]: '' });
    setIsValid(false);
    setErrors({ ...errors, [inputSettings[type].name]: false });
  };

  return (
    <div className={style.inputWrapper}>
      <input
        disabled={disabled || false}
        value={values[inputSettings[type].name] || ''}
        onChange={handleChange}
        type={
          inputSettings[type].type === 'password'
            ? visible
              ? 'text'
              : 'password'
            : inputSettings[type].type
        }
        id={inputSettings[type].type}
        name={inputSettings[type].name}
        maxLength={inputSettings[type].maxLength || ''}
        minLength={inputSettings[type].minLength || ''}
        placeholder={placeholder || inputSettings[type].placeholder}
        required
        ref={inputRef}
        pattern={inputSettings[type].pattern || null}
        className={classNames(style.input, {}, [
          errors[inputSettings[type].name] ? style.invalid : '',
        ])}
      />{' '}
      <label htmlFor={type} className={style.label}>
        {label || 'Label'}
      </label>
      {values[inputSettings[type].name] && (
        <button
          onClick={resetClick}
          type='button'
          className={classNames(style.resetButton, {}, [
            type === 'password' ? style.resetButtonPassword : '',
          ])}
        />
      )}
      {disabled
        ? ''
        : inputSettings[type].type === 'password' && (
          <button
            type='button'
            onClick={() => setVisible(!visible)}
            className={classNames(style.showPasswordButton, {}, [
              visible ? style.showPassword : style.hidePassword,
            ])}
          />
        )}
      <span className={style.error}>
        {errors[inputSettings[type].name]
          ? `${inputSettings[type].errorText}`
          : ''}
      </span>
    </div>
  );
};
