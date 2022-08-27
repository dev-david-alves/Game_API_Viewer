import React from "react";
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
    return (
        <main className="w-[90%] h-screen flex flex-col items-center justify-center">
            <div className="w-full h-[90%] flex flex-col px-10">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Game API</h1>
                        <p className="text-slate-500">
                            Encontre informações sobre seus jogos favoritos.
                        </p>
                    </div>
                    <button className="w-[40px] h-[40px] bg-[#F5F5F5] rounded-md flex items-center justify-center drop-shadow-md">
                        <BiSearchAlt2
                            style={{ fontSize: "1.5rem", color: "#737373" }}
                        />
                    </button>
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
                <Table />
            </div>
        </main>
    );
};

export default MainContent;
