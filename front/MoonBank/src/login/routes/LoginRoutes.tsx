import { Route, Routes } from 'react-router';

import { Login } from '../screens';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
};

export default LoginRoutes;
