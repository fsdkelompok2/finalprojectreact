/* eslint-disable no-unused-vars */
import React from "react";

const shoesSize = [

    "33.5",
    "34",
    "35",
    "35.5",
    "36",
    "36.5",
    "37.5",
    "38",
    "38.5",
    "39",
    "40",
    "40.5",
    "41",
    "42",
    "42.5",
    "43",
    "44",
    "44.5",
    
];

export default function Size() {
    
    return(
        <>
            <p className="mb-6 font-semibold  text-black">Size</p>
            <div className="grid grid-cols-3 gap-x-2 gap-y-2 pr-5 mb-5 font-medium text-black">
                { shoesSize.map((feet, i) =>
                    <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500" key={i}>
                        {feet}
                    </button>
                ) }               
                
                <button type="button" className="text-lg h-10 col-span-3 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">45</button>
            </div>
        </>
    )
}




// export default function Size() {
//     return(
//         <>
//             <p className="mb-6 font-semibold">Size</p>
//             <div className="grid grid-cols-3 gap-x-2 gap-y-2 pr-5 mb-5">
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">33.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">34</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">35</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">35.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">36</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">36.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">37.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">38</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">38.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">39</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">40</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">40.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">41</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">42</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">42.5</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">43</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">44</button>
//                 <button type="button" className="text-lg h-10 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">44.5</button>
//                 <button type="button" className="text-lg h-10 col-span-3 rounded-md border border-gray-300 hover:border-2 hover:border-gray-500">45</button>
//             </div>
//         </>
//     )
// }