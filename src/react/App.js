import HomePage from "./homepage";
import AllType from "./type/makeup";
import DailyMakeup from "./type/typeofmakeup/dailymakeup";
import EventMakeup from "./type/typeofmakeup/eventmakeup";
import SoftMakeup from "./type/typeofmakeup/softmakeup";
import WelcomePage from "./welcomepage";
import {  Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<WelcomePage />} />
      <Route path="home" element={<Outlet />}>
        <Route index element={<HomePage />} />
        <Route path="makeup" element={<AllType />}>
            <Route path="softmakeup" element={<SoftMakeup />}></Route>
            <Route path="dailymakeup" element={<DailyMakeup />}></Route>
            <Route path="eventmakeup" element={ <EventMakeup />}></Route>
        </Route>
      </Route>
    </Route>
   
  )
)

function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;