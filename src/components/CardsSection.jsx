import React from "react";
import Cards from "./Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const CardsSection = ({
  data,
  search,
  searchText,
  filter,
  type,
  cardHolder,
  fetchData,
}) => {
  let filteredData = [];
  let searchedData = [];
  if (filter) {
    filteredData = data?.filter(
      (item) => item.card_type === type || item.owner_id === cardHolder
    );
  }

  if (search)
    searchedData = data?.filter(
      (item) => item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <InfiniteScroll
      dataLength={data?.length || 24}
      next={fetchData}
      hasMore={true}
      loader={<p>Loading...</p>}
      endMessage={<p >No more data to load.</p>}
    >
      <section className="lg:grid grid-cols-3 justify-center 
      items-center z-0 absolute top-52 lg:right-36">
        {!filter
          ? search
            ? searchedData?.map((item, index) => (
                <Cards item={item} key={index} />
              ))
            : data?.map((item, index) => <Cards item={item} key={index} />)
          : filteredData?.map((item, index) => (
              <Cards item={item} key={index} />
            ))}
      </section>
    </InfiniteScroll>
  );
};

export default CardsSection;
