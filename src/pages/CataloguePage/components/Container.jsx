/* eslint-disable no-unused-vars */
import React from "react";
import Leftbar from "./Leftbar";
import Display from "./Display";

export default function Container() {
    return (        
        <div className="lg:relative mt-5 lg:mt-0 lg:mr-20 lg:ml-20 lg:w-auto lg:bg-white lg:flex lg:mb-8 mb-10">
            <Leftbar />
            <Display />
        </div>      

    )
}