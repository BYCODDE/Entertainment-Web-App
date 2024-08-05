import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        const jsonData = await response.json();
        console.log(jsonData.map((item: string) => item.title));

        setData(jsonData);
        // setIsLoading(true);
      } catch (err) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
