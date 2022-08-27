import React from "react";

import SideBar from "./SideBar";
import MainContent from "./MainContent";

const MainSection = () => {
    return (
        <div className="w-[80%] flex bg-white rounded-r-3xl drop-shadow-lg rounded-b-none">
            <SideBar />
            <MainContent />
        </div>
    );
};

export default MainSection;
