import React, {useState} from "react";
import "./daysList.css";
import { Day } from "../Day/day";
import {AddMeal} from "../AddMeal/addMeal"


export const DaysList = ({ dataJidelnicek, onMealDetail, onAddData }) => {
  const [showNewMeal, setShowNewMeal] = useState(false);
  
  const onDetail = (meal) => {
    console.log("daylist: ", meal);
    onMealDetail(meal);
  };

  const addMealHandler = (day) => {
       setShowNewMeal(true);
  }


  

  console.log(dataJidelnicek);
  const dataJidelnicekPole = [...dataJidelnicek.values()];

  const rectCmpDen = dataJidelnicekPole.map((den, index) => {
    return <Day key={index} day={den} onMealDetail={onDetail} onAddMeal={addMealHandler} onAddData={onAddData}/>;
  });
  return <div className="days-list">
       {rectCmpDen} 
       {showNewMeal && <AddMeal />}</div>;
 
};
