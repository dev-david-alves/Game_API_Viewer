import React, { useState, useEffect } from "react";

import Button from "./Button";
import Pagination from "./Pagination";

import { useGameContext } from "../providers/gameProvider";

const Table = ({ search }) => {
    const {
        data,
        setData,
        category,
        setCategory,
        genres,
        selectedGender,
        setSelectedGender,
        platforms,
        selectedPlatform,
        setSelectedPlatform,
    } = useGameContext();
    const [currentGames, setCurrentGames] = useState(data);

    const handleChangeGender = (selectedGender) => {
        setSelectedGender(selectedGender);
    };

    const handleChangePlatform = (selectedPlatform) => {
        setSelectedPlatform(selectedPlatform);
    };

    const handleOrderBy = (orderBy) => {
        const orderedGames = [...currentGames].sort((a, b) => {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        });

        setCurrentGames(orderedGames);
    };

    useEffect(() => {
        if (search !== "") {
            const filteredGames = [...data].filter((game) => {
                return game.name.toLowerCase().includes(search.toLowerCase());
            });

            setCurrentGames(filteredGames);
        } else {
            setCurrentGames(data);
        }
    }, [search]);

    return (
        <div className="w-full drop-shadow-lg mt-10 h-[450px] border-2 bg-white rounded-2xl py-4 flex flex-col">
            <div className="flex justify-between items-center px-5">
                <p className="text-gray-600 text-lg font-bold mb-3">
                    Todos os jogos
                </p>
                <div className="flex justify-between">
                    <select
                        name="select"
                        className="bg-[#458B90] outline-none hover:brightness-125 py-1 mr-2 text-white rounded-full font-bold px-2 drop-shadow-lg"
                        onChange={(e) => handleChangeGender(e.target.value)}
                    >
                        <option value={""}>Gêneros</option>
                        {genres.map((genre, index) => {
                            return (
                                <option key={index} value={genre.name}>
                                    {genre.name}
                                </option>
                            );
                        })}
                    </select>
                    <select
                        name="select"
                        className="bg-[#FD7E50] outline-none hover:brightness-125 py-1 text-white rounded-full font-bold px-2 drop-shadow-lg"
                        onChange={(e) => handleChangePlatform(e.target.value)}
                    >
                        <option value={""}>Plataformas</option>
                        {platforms.map((platform, index) => {
                            return (
                                <option key={index} value={platform.name}>
                                    {platform.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div style={{ overflowY: "auto", height: "70%" }}>
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                            <th onClick={() => handleOrderBy("name")}>Nome</th>
                            <th onClick={() => handleOrderBy("genres")}>
                                Gênero
                            </th>
                            <th onClick={() => handleOrderBy("platforms")}>
                                Plataforma
                            </th>
                            <th onClick={() => handleOrderBy("metacritic")}>
                                Metacritc
                            </th>
                            <th onClick={() => handleOrderBy("playtime")}>
                                Tempo de Jogo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentGames.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td className="text-blue-600">
                                    {item.genres.map((genre, index) =>
                                        index != item.genres.length - 1
                                            ? `${genre.name}, `
                                            : genre.name
                                    )}
                                </td>
                                <td className="text-red-600">
                                    {item.platforms.map((platform, index) =>
                                        index != item.platforms.length - 1
                                            ? `${platform.platform.name}, `
                                            : platform.platform.name
                                    )}
                                </td>
                                <td className="text-green-600">
                                    {item.metacritic}
                                </td>
                                <td className="text-amber-500">
                                    {item.playtime}h
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination setCurrentGames={setCurrentGames} />
        </div>
    );
};

export default Table;
