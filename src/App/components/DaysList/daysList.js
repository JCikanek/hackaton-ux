import React from "react";
import { Day } from "../Day/day";

export const DaysList = ({ dataJidelnicek }) => {
  console.log(dataJidelnicek);
  const dataJidelnicekPole = [...dataJidelnicek.values()];
  const rectCmpDen = dataJidelnicekPole.map((den) => {
    return (
      <Day
        key={den}
        day={den.sort(
          (a, b) =>
            parseInt(a.cas.match(/\d/g).join("")) -
            parseInt(b.cas.match(/\d/g).join(""))
        )}
      />
    );
  });

  return (
    <div>
      <h1>DayList</h1>
      {rectCmpDen}
    </div>
  );
};
