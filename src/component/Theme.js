import React, { useState } from "react";

const Theme = () => {
  const changeColor = (color) => {
    if (color === "--theme") {
      console.log(color);
      document.documentElement.style.setProperty("--chocolate", "#dd7022");
      document.documentElement.style.setProperty("--chocolate2", "#fca86c");
    } else if (color === "--chocolate") {
      console.log(color);
      document.documentElement.style.setProperty("--chocolate", "#adade9");
      document.documentElement.style.setProperty("--chocolate2", "#adade9");
    }
    console.log(color);
  };
  return (
    <div className="theme">
      <button
        type="button"
        onClick={() => {
          changeColor("--theme");
        }}
        className="theme1"
      ></button>
      <button
        className="theme2"
        onClick={() => {
          changeColor("--chocolate");
        }}
      ></button>
    </div>
  );
};

export default Theme;
