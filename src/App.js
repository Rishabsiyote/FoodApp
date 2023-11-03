import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Login from "./component/Login";
import Screen2 from "./component/Screen 2/Screen2";
import Screen1 from "./component/Screen1";
import Screen3 from "./component/Screen3";
import Layout from "./Layout";
import RegisterNow from "./component/RegisterNow";
import { useStateContext } from "./component/StateContext";
import { Children, useContext } from "react";

function App() {
  const context = useContext(useStateContext);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Screen1 />} />
        <Route path="/menu" element={<Screen2 />} />
        <Route path="/checkout" element={<Screen3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registernow" element={<RegisterNow />} />
      </Route>
    </Routes>
  );
}

export default App;
