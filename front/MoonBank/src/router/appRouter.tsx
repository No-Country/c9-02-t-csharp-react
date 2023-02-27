import { Balance, Services } from '../operations/screens';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from '../login/screens';
import { MoonHeader } from '../shared/components/MoonHeader';
import { useAppSelector } from '../store/hooks';

const AppRouter = () => {
  const User = useAppSelector((state) => state.login);

  return (
    <>
      {/* SHARED COMPONENTS IN ALL ROUTES */}
      <MoonHeader isLogged={true} labelTitle='MoonBank' />

      {/* ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Navigate to={'/'} replace={true} />} />
        <Route path='/services' element={<Services />} />
        {<Route path='balance' element={<Balance />} /> /**/}
      </Routes>
    </>
  );
};

export default AppRouter;
