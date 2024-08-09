import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./pages/Home";
import { createContext, useContext, useEffect, useState } from "react";

export type TrendingItem = {
  title: string;
  year: string;
  category: string;
  rating: string;
  thumbnail: {
    trending: {
      small: string;
      medium: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  isTrending: boolean;
  isBookmarked: boolean;
};

type DataContextType = {
  data: TrendingItem[] | null;
  error: Error | null;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

function App() {
  const [data, setData] = useState<DataContextType["data"]>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Could not fetch the data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, error }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
