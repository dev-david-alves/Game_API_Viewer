import React, { useEffect, useState } from "react";

import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

import { GameProvider } from "../providers/gameProvider";

import { fetchData, options } from "../utils/fetchData";

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGender, setSelectedGender] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState("");

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(
                `https://rawg-video-games-database.p.rapidapi.com/games`,
                options
            );

            setData(data.results);
        };
        getData();
    }, []);

    useEffect(() => {
        const getGenres = async () => {
            const data = await fetchData(
                `https://rawg-video-games-database.p.rapidapi.com/genres`,
                options
            );

            setGenres(data.results);
        };
        getGenres();
    }, []);

    useEffect(() => {
        const getPlatforms = async () => {
            const data = await fetchData(
                `https://rawg-video-games-database.p.rapidapi.com/platforms`,
                options
            );

            setPlatforms(data.results);
        };
        getPlatforms();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row bg-white overflow-y-scroll xl:overflow-hidden">
            <GameProvider
                data={data}
                setData={setData}
                genres={genres}
                setGenres={setGenres}
                platforms={platforms}
                setPlatforms={setPlatforms}
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
            >
                <SideBar />
                <MainContent />
            </GameProvider>
        </div>
    );
};

export default HomeScreen;
