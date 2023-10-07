import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import style from './App.module.scss';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';
import { ButtonLabel } from '../ButtonLabel/ButtonLabel';

function App() {
  return (
    <div className={style.app}>
      {/* <Header /> */}
      {/* <main className={style.main}> */}
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/' element={<ButtonLabel />} /> */}
        <Route path='/main' element={<Main />} />
      </Routes>
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
