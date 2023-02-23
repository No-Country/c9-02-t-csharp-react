import { Balance } from './balance/screens/Balance';
import { Login } from './login/screens';
import { getAccountsList } from './APIS/getRequest';
const App = () => {
 console.log( getAccountsList())
  return (
    <>
      {/* <Login /> */}
    <Balance/>  
    </>
  );
};

export default App;
