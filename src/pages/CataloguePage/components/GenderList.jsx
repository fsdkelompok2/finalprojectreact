/* eslint-disable no-unused-vars */
import React from "react";

export default function GenderList() {
    return(
        <>
        <div>
            <p className="mb-6 font-semibold  text-black">Gender</p>
            <div className="font-normal">
                <input type="checkbox" id="men" className="w-4 h-4 accent-black checked cursor-pointer" />
                <label htmlFor="men" className="cursor-pointer hover:text-gray-400 ms-2 font-medium text-black">Men</label>
            </div>
            <div className="font-normal">
                <input type="checkbox" id="woman" className="w-4 h-4 accent-black checked cursor-pointer" />
                <label htmlFor="woman" className="cursor-pointer hover:text-gray-400 ms-2 font-medium text-black">Women</label>
            </div>
            <div className="font-normal">
                <input type="checkbox" id="unisex" className="w-4 h-4 accent-black checked cursor-pointer" />
                <label htmlFor="unisex" className="cursor-pointer hover:text-gray-400 ms-2 font-medium text-black">Unisex</label>
            </div>
        </div>
        
        </>
        
    )
}