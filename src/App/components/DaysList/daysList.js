import React from "react";
import "./daysList.css";
import { Day } from "../Day/day";

export const DaysList = ({ dataJidelnicek, onMealDetail }) => {
  const onDetail = (meal) => {
    console.log("daylist: ", meal);
    onMealDetail(meal);
  };

  console.log(dataJidelnicek);
  const dataJidelnicekPole = [...dataJidelnicek.values()];

  const rectCmpDen = dataJidelnicekPole.map((den, index) => {
    return <Day key={index} day={den} onMealDetail={onDetail} />;
  });
  return <div className="days-list">{rectCmpDen}</div>;
};
