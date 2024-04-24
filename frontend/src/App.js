import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoutes from "./features/privateRoutes";
import PublicRoutes from "./features/publicRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/*" />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
