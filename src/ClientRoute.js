import {lazy,Suspense} from "react";
import {Routes,Route} from "react-router-dom";
import LoadingAnimation from "./feature/LodingAnimation";

const ClientList=lazy(()=> import("./clientmaster/ClientList"));
const ClientSetup=lazy(()=> import("./clientmaster/ClientSetup"));

const ClientRoute=()=>{
  return (<Routes>
    <Route path="view" index element={
    <Suspense fallback={<LoadingAnimation/>}>
      <ClientList/>
    </Suspense>}/>
    <Route path="add/*" element={
    <Suspense fallback={<LoadingAnimation/>}>
      <ClientSetup/>
    </Suspense>}/>
  
  </Routes>)
}
export default ClientRoute;