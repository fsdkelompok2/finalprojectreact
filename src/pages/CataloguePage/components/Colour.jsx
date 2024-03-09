/* eslint-disable no-unused-vars */
import React from "react";

export default function Colour() {
    return(
        
        <div className=" text-black">
            <p className="mb-6 font-semibold">Colour</p>
                <div className="grid grid-cols-3 pr-4">
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-black"></button>
                        <p className="text-sm font-normal mt-1">Black</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-blue-500"></button>
                        <p className="text-sm font-normal mt-1">Blue</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-yellow-700"></button>
                        <p className="text-sm font-normal mt-1">Brown</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 pr-4 mt-5">
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-lime-500"></button>
                        <p className="text-sm font-normal mt-1">Green</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-gray-400"></button>
                        <p className="text-sm font-normal mt-1">Grey</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-orange-500"></button>
                        <p className="text-sm font-normal mt-1">Orange</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 pr-4 mt-5">
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-pink-500"></button>
                        <p className="text-sm font-normal mt-1">Pink</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-purple-700"></button>
                        <p className="text-sm font-normal mt-1">Purple</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button type="button" className="h-8 w-8 rounded-full bg-slate-100"></button>
                        <p className="text-sm font-normal mt-1">White</p>
                    </div>
                </div>
        </div>
            
        
    )
}