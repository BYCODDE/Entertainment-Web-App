import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
