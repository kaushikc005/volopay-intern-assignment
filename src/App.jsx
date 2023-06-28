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

  const options={
    limit
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/kaushikc005/volopay/data"
      );
      setData(await response.json());
    };

    fetchData();
  }, []);
  console.log(cardHolder);
  console.log(type)
  return (
    <Router>
      <Navbar />
      <SearchFilter
      setSearch={setSearch}
      setSearchText={setSearchText}
        setType={setType}
        setCardHolder={setCardHolder}
        setFilter={setFilter}
        search={search}
        searchText={searchText}
      />
      <Routes>
        <Route
          path="/"
          element={
            <CardsSection
              data={data}
              search={search}
              searchText={searchText}
              filter={filter}
              type={type}
              cardHolder={cardHolder}
            />
          }
        />
        <Route path="/:id" element={<YourCards data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
