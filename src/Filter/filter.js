import React, { useState } from "react";
import "./filter.css";

export const Filter = ({ onFilterChange }) => {
  const [filterValues, setFilterValues] = useState({});

  const getInputFrom = (event) => {
    const values = {
      from: event.target.value,
      to: filterValues.to || event.target.value,
    };
    setFilterValues(values);
    onFilterChange(values);
  };
  const getInputTo = (event) => {
    const values = {
      from: filterValues.from || event.target.value,
      to: event.target.value,
    };
    setFilterValues(values);
    onFilterChange(values);
  };
  return (
    <div className="filter">
      <input className="date" type="date" onChange={getInputFrom} />
      <input className="date" type="date" onChange={getInputTo} />
    </div>
  );
};
