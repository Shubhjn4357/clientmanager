import {lazy,Suspense} from "react";
import {Routes,Route} from "react-router-dom";
const CreateProfile=lazy(()=> import("./clientmaster/CreateProfile"));
const PaymentSetup=lazy(()=> import("./clientmaster/PaymentSetup"));
const ThemeSetup=lazy(()=> import("./clientmaster/ThemeSetup"));
const ModuleSetup=lazy(()=> import("./clientmaster/ModuleSetup"));
const SuccessPage=lazy(()=> import("./clientmaster/SuccessPage"));
const ClientSetupRoute=()=>{
  return (<Routes>
    <Route path="/" index element={
    <Suspense fallback="loading...">
      <CreateProfile/>
    </Suspense>}/>
    <Route path="payment" index element={
    <Suspense fallback="loading...">
      <PaymentSetup/>
    </Suspense>}/>
    <Route path="theme" index element={
    <Suspense fallback="loading...">
      <ThemeSetup/>
    </Suspense>}/>
    <Route path="module" index element={
    <Suspense fallback="loading...">
      <ModuleSetup />
    </Suspense>}/>
    <Route path="success" index element={
    <Suspense fallback="loading...">
      <SuccessPage/>
    </Suspense>}/>
 </Routes>)
}
export default ClientSetupRoute;