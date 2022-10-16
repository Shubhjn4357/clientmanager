import {lazy,Suspense} from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import LoadingAnimation from "../feature/LodingAnimation";
import Authenticate from "../auth/Authenticate";
const Dashboard=lazy(()=> import("../clientmaster/dashboard"));
const RouterModule=()=>{
  return (<Routes>
  <Route path="/" element={<Authenticate/>}/>
  <Route path="client/*" element={
  <Suspense fallback={<LoadingAnimation/>}>
    <Dashboard/>
  </Suspense>}/>
  <Route path="client" element={<Navigate to="/client/view"/>}/>
  </Routes>)
}
export default RouterModule;