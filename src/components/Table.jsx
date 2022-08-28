import React from "react";

import Button from "./Button";
import Pagination from "./Pagination";

const tableData = {
    name: "Grand Theft Auto",
    genre: "Ação, Aventura",
    platform: "Pc, Xbox, Playstation 5",
    metacritic: "91",
    time: "72h",
};

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61,
];

const Table = () => {
    return (
        <div className="w-full drop-shadow-lg mt-5 h-[50%] bg-white rounded py-4 flex flex-col">
            <div className="flex justify-between items-center px-5">
                <p className="text-gray-600 text-lg font-semibold mb-3">
                    Todos os jogos
                </p>
                <div className="flex justify-between">
                    <Button color="bg-[#71357C]" text="Jogos" />
                    <Button color="bg-[#458B90]" text="Gêneros" />
                    <Button color="bg-[#FD7E50]" text="Plataformas" />
                </div>
            </div>

            <div style={{ overflowY: "auto", height: "70%" }}>
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Plataforma</th>
                            <th>Metacritc</th>
                            <th>Tempo de Jogo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nums.map((num) => (
                            <tr key={num}>
                                <td>Grand Theft Auto</td>
                                <td className="text-blue-600">
                                    Ação, Aventura
                                </td>
                                <td className="text-red-600">
                                    Pc, Xbox, Playstation 5
                                </td>
                                <td className="text-green-600">91</td>
                                <td className="text-amber-500">72h</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    );
};

export default Table;
