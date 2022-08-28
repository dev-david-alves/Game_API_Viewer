import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Card from "./Card";
import Table from "./Table";

const cards = [
    {
        id: 1,
        data: {
            title: "Grand Theft Auto V",
            platforms: ["PC", "Xbox", "Playstation 5"],
            genres: ["Ação", "Aventura", "Mundo Aberto"],
        },
        color: "bg-[#71357C]",
    },
    {
        id: 2,
        data: {
            title: "Teste Theft Auto V",
            platforms: ["PC", "Xbox", "Playstation 5"],
            genres: ["Ação", "Aventura", "Mundo Aberto"],
        },
        color: "bg-[#458B90]",
    },
    {
        id: 3,
        data: {
            title: "Grand Theft Auto V",
            platforms: ["PC", "Xbox", "Playstation 5"],
            genres: ["Ação", "Aventura", "Mundo Aberto"],
        },
        color: "bg-[#FD7E50]",
    },
];

const MainContent = () => {
    const [search, setSearch] = useState("");
    const handleSearchClick = (e) => {
        setSearch("");
    };

    return (
        <main className="w-[90%] h-screen flex flex-col items-center justify-center">
            <div className="w-full h-[90%] flex flex-col px-10">
                <div className="flex flex-col w-full h-[50%]">
                    <div className="w-full flex items-center justify-between">
                        <div>
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
                                className="bg-gray-200 w-[200px] px-5 h-[40px] border-1 border-solid border-slate-500 rounded-l-md outline-none"
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
                    <div className="mt-2">
                        <h3 className="text-gray-600 text-lg font-semibold mb-3">
                            Melhores games segundo a crítica
                        </h3>
                        <div className="flex justify-between items-center">
                            {cards.map((card) => (
                                <Card
                                    key={card.id}
                                    data={card.data}
                                    color={card.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Table />
            </div>
        </main>
    );
};

export default MainContent;
