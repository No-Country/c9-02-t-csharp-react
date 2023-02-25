import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../login/screens';
import { Balance } from '../operations/screens';
import { MoonHeader } from '../shared/components/MoonHeader';
import { NavBar } from '../shared/components/NavBar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { LoginSlice } from '../store/features/loginSlice';

const AppRouter = () => {
  const User = useAppSelector((state) => state.login);

  return (
    <>
      {/* SHARED COMPONENTS IN ALL ROUTES */}
      <MoonHeader isLogged={User.success} labelTitle='MoonBank' />
      <NavBar
        headerHeight='55px'
        name=''
        surname=''
        userImgURL='https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg'
        credits={0}></NavBar>

      {/* ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Navigate to={'/'} replace={true} />} />
        {<Route path='balance' element={<Balance />} /> /**/}
      </Routes>
    </>
  );
};

export default AppRouter;
