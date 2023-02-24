import { Balance } from './operations/screens/Balance';
import { Login } from './login/screens';
import { Services } from './screens';
import { getAccountsList } from './APIS/getRequest';

const App = () => {
 console.log( getAccountsList())
  return (
    <>
      {/* <Login /> */}
      {/* <Balance/>   */}
      <Services />
    </>
  );
};

export default App;
