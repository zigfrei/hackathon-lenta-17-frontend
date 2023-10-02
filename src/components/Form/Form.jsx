import React, { useState } from 'react';
import style from './Form.module.scss';

function Form() {

    // const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(true);

    return (
        <section className={style.form}>
            <form className={style.form__container}>
                <h1 className={style.form__title}>
                    Вход
                </h1>
                <fieldset className={style.form__fieldset}>
                    <label className={style.form__label}>
                        {/* <h2 className={style.form__text}>E-mail</h2> */}
                        <input
                            className={style.form__input}
                            type='text'
                            name='email'
                            id='email'
                            placeholder='Рабочий e-mail'
                        />
                    </label>
                    <span className={style.form__error}></span>
                    <label className={style.form__label}>
                        {/* <h2 className={style.form__text}>Пароль</h2> */}
                        <input
                            // value={password}
                            className={style.form__input}
                            type={
                                visible ? 
                                "text" : 
                                "password"
                            }
                            name='password'
                            id='password'
                            placeholder='Пароль'
                        />
                        <i
                            onClick={() => setVisible(!visible)}
                            className={
                                visible ?
                                style.form__eye_close :
                                style.form__eye_open
                            }
                            id='togglePassword'
                        />
                    </label>
                    <span className={style.form__error}></span>
                </fieldset>
                <button className={style.form__button} type='submit' id='submit'>
                    Войти
                </button>
            </form>
        </section>

    );
}

export default Form;