import React from "react";
import { Filter } from "../../../Filter/filter";
import "./header.css";

export const Header = ({ onFilterChange }) => {
  const now = new Date();
  const dateFormated = new Intl.DateTimeFormat("cs-CZ", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

  return (
    <div className="App-header">
      <h1>Týdenní menu</h1>
      <div className="date">{dateFormated}</div>
      <Filter onFilterChange={onFilterChange} />
    </div>
  );
};
