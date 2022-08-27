import React, { useEffect } from "react";
import MainSection from "./components/MainSection";
import FilterSection from "./components/FilterSection";
// import { fetchData, options } from "./utils/fetchData";

const App = () => {
    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await fetchData(
    //             "https://rawg-video-games-database.p.rapidapi.com/games",
    //             options
    //         );
    //         console.log(data);
    //     };
    //     getData();
    // }, []);

    return (
        <div className="w-full flex bg-[#FAF5EE]">
            <MainSection />
            <FilterSection />
        </div>
    );
};

export default App;
