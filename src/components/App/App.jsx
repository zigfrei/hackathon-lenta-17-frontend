import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import style from './App.module.scss';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import FirstRoute from '../../pages/FirstRoute/FirstRoute';
import SecondRoute from '../../pages/SecondRoute/SecondRoute';
import ThirdRoute from '../../pages/ThirdRoute/ThirdRoute';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/firstroute' element={<FirstRoute />} />
          <Route path='/secondroute' element={<SecondRoute />} />
          <Route path='/thirdroute' element={<ThirdRoute />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
