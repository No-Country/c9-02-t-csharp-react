import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from '../login/screens';
import {
  Balance,
  Services,
  Deposit,
  Rewards,
  TransactionHistory,
  Send,
  About,
  AboutTerms,
  AboutSecurity,
  Page404,
} from '../operations/screens';
import { Profile } from '../Principal/screens';
import { MoonHeader } from '../shared/components/MoonHeader';
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
        <Route path='/login' element={<Navigate to={'/'} replace={true} />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRouter;
