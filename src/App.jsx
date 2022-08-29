import React, { useEffect, useState } from "react";
import MainSection from "./components/MainSection";
import { GameProvider } from "./providers/gameProvider";

import { fetchData, options } from "./utils/fetchData";

const App = () => {
    const [category, setCategory] = useState("games");
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

            if (selectedPlatform !== "" && selectedGender !== "") {
                let filteredData = data.results.filter((game) =>
                    game.platforms
                        .map((platform) => platform.platform.name)
                        .includes(selectedPlatform)
                );

                filteredData = filteredData.filter((game) =>
                    game.genres
                        .map((genre) => genre.name)
                        .includes(selectedGender)
                );

                setData(filteredData);
            } else {
                if (selectedPlatform !== "") {
                    const filteredData = data.results.filter((game) =>
                        game.platforms
                            .map((platform) => platform.platform.name)
                            .includes(selectedPlatform)
                    );
                    setData(filteredData);
                } else if (selectedGender !== "") {
                    const filteredData = data.results.filter((game) =>
                        game.genres
                            .map((genre) => genre.name)
                            .includes(selectedGender)
                    );
                    setData(filteredData);
                } else {
                    setData(data.results);
                }
            }
        };
        getData();
    }, [selectedGender, selectedPlatform]);

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
        <div className="w-screen h-screen flex bg-[#FAF5EE]">
            <GameProvider
                data={data}
                setData={setData}
                category={category}
                setCategory={setCategory}
                genres={genres}
                setGenres={setGenres}
                platforms={platforms}
                setPlatforms={setPlatforms}
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                selectedPlatform={selectedPlatform}
                setSelectedPlatform={setSelectedPlatform}
            >
                <MainSection />
            </GameProvider>
        </div>
    );
};

export default App;
