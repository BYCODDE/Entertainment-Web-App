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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  home: boolean;
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
  movie: boolean;
  setMovie: React.Dispatch<React.SetStateAction<boolean>>;
  tv: boolean;
  setTv: React.Dispatch<React.SetStateAction<boolean>>;
  marked: boolean;
  setMarked: React.Dispatch<React.SetStateAction<boolean>>;
  setData : React.Dispatch<React.SetStateAction<TrendingItem[] | null>>
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

  // data?.map((item) => {

  //   // if (item.isTrending) {
  //     // item.isBookmarked = false;
  //     // console.log(item.isBookmarked);

  //   // }
  // });


  const [error, setError] = useState<Error | null>(null);
  const [search, setSearch] = useState("");
  const [home, setHome] = useState(true);
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);
  const [marked, setMarked] = useState(false);
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
    <DataContext.Provider
      value={{
        data,
        error,
        search,
        setSearch,
        home,
        setHome,
        movie,
        setMovie,
        tv,
        setTv,
        marked,
        setMarked,
        setData
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
