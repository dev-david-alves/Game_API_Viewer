import React, { useState } from "react";

const Pagination = () => {
    const btnStyle =
        "bg-white border-2 hover:border-none text-slate-400 hover:bg-black hover:text-white text-sm font-semibold w-[35px] h-[35px] rounded";

    return (
        <div className="flex items-center mx-auto my-auto">
            <button className={btnStyle}>1</button>
            <button className={btnStyle}>{"<"}</button>
            <div className="mx-10">
                <p className="text-md text-gray-700 font-semibold inline mr-2">
                    Página atual:
                </p>
                <p className="text-md font-bold inline">94</p>
            </div>
            <button className={btnStyle}>1000</button>
            <button className={btnStyle}>{">"}</button>
        </div>
    );
};

export default Pagination;
