import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../login/screens';
import { Balance, Services, Deposit, Rewards } from '../operations/screens';
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
        <Route path='balance' element={<Balance />} /> 
        <Route path='services' element={<Services />} /> 
        <Route path='deposit' element={<Deposit />} /> 
        <Route path='rewards' element={<Rewards />} /> 
        <Route path='/login' element={<Navigate to={'/'} replace={true} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
