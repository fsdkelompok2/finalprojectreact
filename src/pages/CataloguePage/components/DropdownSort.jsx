import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function DropdownSort() {
    const [isClick, setIsClick] = useState(false);
    return (
       <>
        <button onClick={() => setIsClick((prev) => !prev)} className="bg-white text-xl flex items-center lg:ml-0 lg:mr-0 font-medium">
            <span>Sort By</span>
            <div className="ml-2">
                {!isClick ? (
                    <FiChevronDown />
                ) : (
                  <FiChevronUp />  
                )}                
            </div>                    
        </button>

        {isClick && (
            <div className="absolute rounded-md shadow-md text-left top-24 left-0 bg-white w-56 h-auto lg:top-14 lg:right-5 lg:left-auto lg:mb-16 lg:text-md lg:leading-relaxed lg:text-right px-3 py-2 font-medium">
                <p className="lg:hidden lg:h-0 md:visible hover:text-gray-400">Category</p>
                <p className="hover:text-gray-400">Featured</p>
                <p className="hover:text-gray-400">Newest</p>
                <p className="hover:text-gray-400">Price: High-Low</p>
                <p className="hover:text-gray-400">Price: Low-High</p>
            </div>
        )}
       </>
    )
}