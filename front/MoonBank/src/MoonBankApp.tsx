import { Balance } from './operations/screens/Balance';
import { Login } from './login/screens';
import Deposit from './operations/screens/Deposit';
import { getAccountsList } from './APIS/getRequest';

const App = () => {
 console.log( getAccountsList())
  return (
    <>
      {/* <Login /> */}
      {/* <Balance/>   */}
      {/* <Services /> */}
      <Deposit/>
    </>
  );
};

export default App;
