import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Card from "./Card";
import Table from "./Table";

import { useGameContext } from "../providers/gameProvider";

const MainContent = () => {
    const [search, setSearch] = useState("");
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

    return (
        <main className="w-full lg:w-[90%] lg:h-screen flex flex-col items-center justify-center">
            <div className="w-full h-[90%] flex flex-col px-5 md:px-10">
                <div className="flex flex-col w-full h-full">
                    <div className="w-full flex items-center justify-center md:justify-between flex-col md:flex-row">
                        <div className="w-full">
                            <h1 className="text-xl font-bold md:text-left text-center 2xl:text-2xl">
                                Game API
                            </h1>
                            <p className="text-slate-500 md:text-left text-center 2xl:text-lg">
                                Encontre informações sobre seus jogos favoritos.
                            </p>
                        </div>
                        <div className="w-full flex items-center mt-3 md:m-0">
                            <input
                                type="text"
                                value={search}
                                placeholder="Filtrar por nome, gênero, plataforma, nota ou tempo de jogo..."
                                className="bg-gray-200 w-full md:w-[480px] px-5 h-[40px] border-1 border-solid border-slate-500 rounded-l-md outline-none"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="hover:brightness-95 w-[40px] h-[40px] bg-[#F5F5F5] rounded-r-md flex items-center justify-center">
                                <BiSearchAlt2
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "#737373",
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full h-full justify-evenly items-center flex-col md:flex-row">
                        <div className="mr-8 w-full lg:w-[380px] xl:w-[520px] 2xl:w-[570px] h-full hidden md:block">
                            <h3 className="text-gray-600 text-lg lg:text-xl 2xl:text-2xl font-bold mb-1 mt-5 md:mt-3 md:text-left text-center">
                                Top 3 Games na tabela (Metacritic)
                            </h3>
                            <div className="flex flex-col w-full m-3 items-center h-full">
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
