import { Route, Routes } from 'react-router-dom';
import { Login } from '../login/screens';
import { Balance, Services } from '../operations/screens';
import { MoonHeader } from '../shared/components/MoonHeader';
import { NavBar, NavListElements } from '../shared/components/NavBar';


const AppRouter = () => {
  return (
    <>
      {/* SHARED COMPONENTS IN ALL ROUTES */}
      <MoonHeader isLogged={false} labelTitle='MoonBank' />
      <NavBar
        headerHeight='55px'
        name=''
        surname=''
        userImgURL='https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg'
        credits={0}></NavBar>

      {/* ALL ROUTES */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='balance' element={<Balance />} /> 
        <Route path='services' element={<Services />} /> 
        {/* <Route path='deposit' element={<Deposit />} />  */}
      </Routes>
    </>
  );
};

export default AppRouter;
