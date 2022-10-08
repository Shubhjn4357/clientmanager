import {lazy,Suspense} from "react";
import {Routes,Route} from "react-router-dom";
const ClientList=lazy(()=> import("./clientmaster/ClientList"));
const ClientSetup=lazy(()=> import("./clientmaster/ClientSetup"));

const ClientRoute=()=>{
  return (<Routes>
    <Route path="view" index element={
    <Suspense fallback="loading...">
      <ClientList/>
    </Suspense>}/>
    <Route path="add/*" index element={
    <Suspense fallback="loading...">
      <ClientSetup/>
    </Suspense>}/>
  
  </Routes>)
}
export default ClientRoute;