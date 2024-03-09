/* eslint-disable no-unused-vars */
import React from "react";
import ShoesList from "./ShoesList";
import DropdownSort from "./DropdownSort";


export default function Header () {
    return (
    <header className="sticky top-0 left-0 right-0 z-20 w-auto lg:px-5 bg-white text-black h-24 flex flex-col lg:mt-0 lg:mr-20 lg:ml-20 lg:h-20 lg:sticky lg:top-0 lg:right-0 lg:left-0 lg:w-auto lg:flex lg:flex-row lg:justify-between items-baseline">
        <div className="">
            <h1 className="font-semibold text-3xl lg:mt-3 lg:mx-0 mt-3 lg:px-0 px-3">Men{"'"}s Shoes</h1>
            <div className="lg:hidden lg:h-0 md:hidden md:h-0 m-auto sm:visible fixed ">
                <div className="mt-3 w-screen overflow-hidden bg-white">
                    <ul className="h-14 flex overflow-x-scroll font-normal space-x-3 px-3 text-md ">
                        <ShoesList />
                    </ul>
                </div>                                  
            </div>
        </div>        
        <div>
            <nav className="flex justify-between mt-2 mx-3 lg:mx-0 lg:mt-3 cursor-pointer invisible md:visible lg:visible">
                <DropdownSort />
            </nav>
        </div>            
    </header>
    )

}