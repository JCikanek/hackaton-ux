import React from "react";
import { Day } from "../Day/day";

export const DaysList = ({ dataJidelnicek }) => {
  console.log(dataJidelnicek);
  const dataJidelnicekPole = [...dataJidelnicek.values()];
  const rectCmpDen = dataJidelnicekPole.map((den) => (
    <Day key={den} day={den} />
  ));

  return (
    <div>
      <h1>DayList</h1>
      {rectCmpDen}
    </div>
  );
};
