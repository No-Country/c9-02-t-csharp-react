import { Route, Routes } from "react-router-dom";

import { Balance } from "../operations/screens/Balance";
import { Login } from "../login/screens";

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
