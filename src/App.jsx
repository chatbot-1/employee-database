import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";
import EmpDetails from "./components/EmpDetails";
import EmpCreate from "./components/EmpCreate";
import EmpEdit from "./components/EmpEdit";

function App() {
  return (
    <>
      <h1>React CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee/>}></Route>
          <Route path="/emp-create" element={<EmpCreate/>}></Route>
          <Route path="/emp-details/:empid" element={<EmpDetails/>}></Route>
          <Route path="/emp-edit/:empid" element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
