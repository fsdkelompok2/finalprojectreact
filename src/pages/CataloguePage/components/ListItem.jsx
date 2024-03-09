/* eslint-disable no-unused-vars */
import React from "react";


const categories = [
    "Lifestyle",
    "Jordan",
    "Running",
    "Basketball",
    "Football",
    "Training",
    "Skateboarding",
    "Golf",
    "Tennis",
    "Athletics",
    "Walking",
];

export default function ListItem() {
    return (
        <>
        { categories.map((list, i) =>
         <p className="cursor-pointer  text-black" key={i}>{list}</p>) }        
        </>
        
    )
}
