import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Login.module.scss';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <div className={style.main}>
      {/* <h2 className={style.title}>Вход</h2>
      <h2 className={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nisi
        autem laudantium voluptatum voluptas labore minus laboriosam minima
        dolor quam officia quisquam nam enim, perferendis id iusto ipsum
        praesentium tempora.
      </h2> */}
      <Header
        isLoggedIn={false}
      />
      <Form />
      <Footer
        isLoggedIn={false}
      />
    </div>
  );
}

export default Login;
