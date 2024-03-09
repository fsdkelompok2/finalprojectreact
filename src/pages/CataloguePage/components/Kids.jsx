/* eslint-disable no-unused-vars */
import React from "react";

export default function Kids() {
    return(
        <div className="text-black">
            <p className="mb-6 font-semibold">Kids</p>
            <div className="lbl-input">
                <input type="checkbox" id="boys" className="w-4 h-4 bg-white accent-black checked cursor-pointer" />
                <label htmlFor="boys" className="cursor-pointer hover:text-gray-400 ms-2 font-medium">Boys</label>
            </div>
            <div>
                <input type="checkbox" id="girl" className="w-4 h-4 bg-white accent-black checked cursor-pointer" />
                <label htmlFor="girl" className="cursor-pointer hover:text-gray-400 ms-2 font-medium">Girls</label>
            </div>
        </div>
        
    )
}