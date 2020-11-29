import React from "react";
import "./detail.css";

export const Detail = ({ mealInfo }) => (
  <div className="detail">
    <h2 className="meal-name">{mealInfo.nazev}</h2>
    <div className="ingredience-list">
      {mealInfo.ingredience.map((ing) => (
        <div className="ingredience">{`${ing.nazev} (${ing.mnozstvi} ${ing.jednotka})`}</div>
      ))}
    </div>
  </div>
);
