import React from "react";
import { FaFire } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

import HSBar from "react-horizontal-stacked-bar-chart";
const Cards = ({ item }) => {
  return (
    <section className="flex flex-col bg-white shadow-lg w-fit m-4 p-4 max-w-lg relative z-0">
      <section className="flex gap-4 justify-between">
        <div>
          <h1 className="text-xl font-semibold">{item.budget_name}</h1>
          <p className="flex items-center text-gray-400">
            {item.name} <GoDotFill /> Budget
          </p>
        </div>
        <div>
          {item.card_type === "burner" ? (
            <FaFire className="text-orange-500 p-4 text-5xl bg-pink-200 rounded-full" />
          ) : (
            <BsRepeat className="text-orange-500 p-4 text-5xl bg-pink-200 rounded-full" />
          )}
        </div>
      </section>
      <section className="flex items-start justify-start gap-2 my-2">
        <div>
          <h1 className="text-lg text-gray-400">Amount</h1>
          <p className="font-semibold">
            {item.available_to_spend.value + item.spent.value} SGD
          </p>
        </div>

        <div>
          <h1 className="text-lg text-gray-400">Frequency</h1>
          <p className="font-semibold">Monthly</p>
        </div>

        <div>
          <h1 className="text-lg text-gray-400">Expiry</h1>
          <p className="font-semibold">{item.expiry}</p>
        </div>
      </section>

      <section>
        <HSBar
          height="10px"
          className="rounded-full"
          data={[
            { value: item.spent.value, 
              color: "rgba(0,153,75)" },
            {
              value: item.available_to_spend.value,
              
              color: "rgba(255,0,99)",
            },
          ]}
        />

        <div className="flex justify-between">
          <p className="flex items-center text-gray-400">
            <GoDotFill className="text-green-700" />
            Spent
          </p>
          <p className="font-semibold">{item.spent.value} SGD</p>
        </div>

        <div className="flex justify-between">
          <p className="flex items-center text-gray-400">
            <GoDotFill className="text-pink-600" />
            Available
          </p>
          <p className="font-semibold">{item.available_to_spend.value} SGD</p>
        </div>
      </section>
    </section>
  );
};

export default Cards;
