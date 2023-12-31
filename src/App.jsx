import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchFilter from "./components/SearchFilter";
import CardsSection from "./components/CardsSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourCards from "./pages/YourCards";
function App() {
  const [data, setData] = useState();

  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState("");
  const [cardHolder, setCardHolder] = useState(null);
  const [filter, setFilter] = useState(false);
  console.log(filter)
  const fetchData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/kaushikc005/volopay/data?_page=1",
      {
        params: {
          _page: 1,
          "X-Total-Count": 10,
        },
      }
    );
    setData(await response.json());
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchFilter
                setSearch={setSearch}
                setSearchText={setSearchText}
                setType={setType}
                setCardHolder={setCardHolder}
                setFilter={setFilter}
                search={search}
                searchText={searchText}
              />
              <CardsSection
                data={data}
                search={search}
                searchText={searchText}
                filter={filter}
                type={type}
                cardHolder={cardHolder}
                fetchData={fetchData}
              />
            </>
          }
        />
        <Route path="/:id" element={<YourCards data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
