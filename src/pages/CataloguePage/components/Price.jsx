/* eslint-disable no-unused-vars */
import React from "react";

export default function Price() {
    return(
        
        <div className="text-black">
            <p className="mb-6 font-semibold">Shop by Price</p>
            <div className="flex items-center font-medium">
                <input type="checkbox" id="700" className="w-4 h-4 accent-black checked cursor-pointer"/>
                <label htmlFor="700" className="cursor-pointer ms-2 hover:text-gray-400">700rb</label>                                         
            </div>
            <div className="flex items-center font-medium">
                <input type="checkbox" id="1500" className="w-4 h-4 accent-black checked cursor-pointer"/>
                <label htmlFor="1500" className="ms-2 cursor-pointer hover:text-gray-400">700rb - 1.5jt</label>                        
            </div>
            <div className="flex items-center font-medium">
                <input type="checkbox" id="2000" className="w-4 h-4 accent-black checked cursor-pointer"/>
                <label htmlFor="2000" className="cursor-pointer ms-2 hover:text-gray-400">1.5jt - 2.9jt</label>
            </div>
            <div className="flex items-center font-medium">
                <input type="checkbox" id="3000" className="w-4 h-4 accent-black checked cursor-pointer"/>
                <label htmlFor="3000" className="cursor-pointer ms-2 hover:text-gray-400">{">"} 3jt</label>                                   
            </div>
        </div>
    )
}