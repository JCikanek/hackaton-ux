import React from "react";
import "./header.css";

export const Header = () => {
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
    </div>
  );
};
