import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Card from "./Card";
import Table from "./Table";

import { useGameContext } from "../providers/gameProvider";

const MainContent = () => {
    const [search, setSearch] = useState("");
    const handleSearchClick = (e) => {
        setSearch("");
    };

    const { data } = useGameContext();

    const [cards, setCards] = useState([]);

    const colors = ["bg-[#71357C]", "bg-[#458B90]", "bg-[#FD7E50]"];

    useEffect(() => {
        const handleOrderBy = (orderBy) => {
            const orderedGames = [...data].sort((a, b) => {
                return a[orderBy] < b[orderBy] ? 1 : -1;
            });
            setCards(orderedGames.slice(0, 3));
        };

        handleOrderBy("metacritic");
    }, [data]);

    const handleOrderBy = (orderBy) => {
        const orderedGames = [...currentGames].sort((a, b) => {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        });

        setCurrentGames(orderedGames);
    };

    return (
        <main className="w-[90%] h-screen flex flex-col items-center justify-center">
            <div className="w-full h-[90%] flex flex-col px-10">
                <div className="flex flex-col w-full h-full">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-full">
                            <h1 className="text-xl font-bold">Game API</h1>
                            <p className="text-slate-500">
                                Encontre informações sobre seus jogos favoritos.
                            </p>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={search}
                                placeholder="Pesquisar"
                                className="bg-gray-200 w-[400px] px-5 h-[40px] border-1 border-solid border-slate-500 rounded-l-md outline-none"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                className="hover:brightness-95 w-[40px] h-[40px] bg-[#F5F5F5] rounded-r-md flex items-center justify-center"
                                onClick={handleSearchClick}
                            >
                                <BiSearchAlt2
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#737373",
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center">
                        <div className="mr-8 w-[430px] h-full">
                            <h3 className="text-gray-600 text-lg font-bold mb-1 mt-2">
                                Top 3 Games na tabela (Metacritic)
                            </h3>
                            <div className="flex flex-col justify-evenly items-center h-full">
                                {cards.map((card, index) => (
                                    <Card
                                        key={index}
                                        data={card}
                                        color={colors[index]}
                                    />
                                ))}
                            </div>
                        </div>
                        <Table search={search} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
