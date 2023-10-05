import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Login.module.scss';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <div className={style.main}>
      <Header />
      <AuthForm />
      <Footer isLoggedIn={false} />
    </div>
  );
}

export default Login;
