import React from "react";

import SideBar from "./SideBar";
import MainContent from "./MainContent";

const MainSection = () => {
    return (
        <div className="w-full flex bg-white drop-shadow-lg rounded-b-none">
            <SideBar />
            <MainContent />
        </div>
    );
};

export default MainSection;
