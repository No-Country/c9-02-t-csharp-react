import { Route, Routes } from "react-router-dom";
import { Login } from "../login/screens";
import { Balance } from "../balance/screens/Balance";

const appRouter = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>} />
     {/* <Route path="balance" element={<Balance/>} /> */}
      </Routes> 
    </>
  )
}

export default appRouter
