import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounetrs] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((count) => count.id !== id);
    setCounetrs(newCounters);
  };
  const handleReset = () => {
    setCounetrs(initialState);
    console.log("handleReset");
  };
  const handleIncrement = (id, value) => {
    if (value >= 0) {
      setCounetrs((prevState) =>
        prevState.map((count) =>
          count.id === id ? { ...count, value: value + 1 } : count
        )
      );
    }
  };
  const handleDecrement = (id, value) => {
    if (value) {
      setCounetrs((prevState) =>
        prevState.map((count) =>
          count.id === id ? { ...count, value: value - 1 } : count
        )
      );
    }
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        ></Counter>
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        сброс
      </button>
    </>
  );
};

export default CountersList;
