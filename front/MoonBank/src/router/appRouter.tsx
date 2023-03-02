import {
  About,
  AboutSecurity,
  AboutTerms,
  Balance,
  Deposit,
  Page404,
  Rewards,
  Send,
  Services,
  TransactionHistory,
} from '../operations/screens';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../screens';
import { Login } from '../login/screens';
import { MoonHeader } from '../shared/components/MoonHeader';
import { Profile } from '../Principal/screens';
import { useAppSelector } from '../store/hooks';

const AppRouter = () => {
  const { success } = useAppSelector((state) => state.login);

  return (
    <>
      {/* SHARED COMPONENTS IN ALL ROUTES */}
      <MoonHeader isLogged={success} labelTitle='MoonBank' />

      {/* ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='terms-conditions' element={<AboutTerms />} />
        <Route path='security-policies' element={<AboutSecurity />} />
        <Route path='balance' element={<Balance />} />
        <Route path='services' element={<Services />} />
        <Route path='deposit' element={<Deposit />} />
        <Route path='rewards' element={<Rewards />} />
        <Route path='activity' element={<TransactionHistory />} />
        <Route path='profile' element={<Profile />} />
        <Route path='send' element={<Send />} />
        <Route path='home' element={<HomePage />} />
        <Route path='/login' element={<Navigate to={'/'} replace={true} />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
