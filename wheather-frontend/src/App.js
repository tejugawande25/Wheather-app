import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import Records from "./components/records/records";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
  return(<>
   <BrowserRouter>
   <Routes>
    <Route element={<Dashboard />} path="/"></Route>
    <Route element={<Records />} path="/records"></Route>
   </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;