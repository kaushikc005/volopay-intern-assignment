import React, { useState } from "react";
import { BsSearch, BsFilter } from "react-icons/bs";
const SearchFilter = ({setSearch,setSearchText,setType, setCardHolder, setFilter ,search,searchText}) => {

  const [showFilter, setShowFilter] = useState(false);
  const [cardtype, setCardType] = useState(null);
  const [holder, setHolder] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setType(cardtype);
    setCardHolder(holder);
    setFilter(true);
  };
  return (
    <section className="w-screen flex justify-end p-4 bg-white relative ">
      <form
        className="w-96 flex flex-col gap-8 m-4 justify-center items-center
       bg-white shadow-lg p-4 z-10"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center gap-4">
        <div>
              <input
                type="text"
                placeholder="Enter card name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={`bg-white outline-none ${search ? "block" : "hidden"}`}
              />
            </div>
          <BsSearch
            className="text-2xl cursor-pointer"
            onClick={() => setSearch((prev) => !prev)}
          />
          <article
            className="flex bg-gray-300 p-2 rounded-md cursor-pointer"
            onClick={(e) => setShowFilter((prev) => !prev)}
          >
            
            <BsFilter className="text-2xl cursor-pointer" />
            <h1>Filter</h1>
          </article>
        </div>

        <aside className={` ${showFilter ? "block" : "hidden"} z-10 `}>
          <h1 className="text-left m-4 font-semibold">Filters</h1>
          <hr />
          <h1>Type</h1>
          <label htmlFor="subscription" className="m-8">
            <input
              type="radio"
              name="type"
              onClick={() => setCardType("subscription")}
            />
            &nbsp; Subscription
          </label>

          <label htmlFor="burner" className="m-8">
            <input
              type="radio"
              name="type"
              onClick={() => setCardType("burner")}
            />
            &nbsp; Burner
          </label>
          <hr />
          <h1 className="m-2">Cardholder</h1>
          <select
            className="bg-gray-300 px-4 py-2 m-4"
            onChange={(e) => setHolder(e.target.value)}
          >
            <option>Select Cardholder</option>
            <option value="1">Mixmax</option>
            <option value="2">Quickbooks</option>
            <option value="3">Member 3</option>
          </select>

          <nav className="flex gap-12 justify-center items-center m-8">
            <button
              type="submit"
              className="p-2 px-4 bg-pink-600 text-white rounded-md"
              onSubmit={handleSubmit}
            >
              Apply
            </button>
            <button type="reset" className="p-2 px-4 bg-gray-300  rounded-md">
              Clear
            </button>
          </nav>
        </aside>
      </form>
    </section>
  );
};

export default SearchFilter;
