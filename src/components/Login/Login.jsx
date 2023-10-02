import { NavLink } from 'react-router-dom';
import { classNames } from '../../helpers/classNames';
import style from './Login.module.scss';

function Login() {
  return (
    <div className={style.main}>
      <h2 className={style.title}>Вход</h2>
      <h2 className={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi nisi
        autem laudantium voluptatum voluptas labore minus laboriosam minima
        dolor quam officia quisquam nam enim, perferendis id iusto ipsum
        praesentium tempora.
      </h2>
    </div>
  );
}

export default Login;
