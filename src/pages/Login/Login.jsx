import { classNames } from '../../helpers/classNames';
import style from './Login.module.scss';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <div className={style.page}>
      <Header />
      <main className={style.main}>
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
