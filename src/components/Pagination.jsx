import React, { useState, useEffect } from "react";

import { useGameContext } from "../providers/gameProvider";

const Pagination = ({ setCurrentGames }) => {
    const { data, selectedGenre, selectedPlatform } = useGameContext();

    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(6);

    let indexOfLastGame = currentPage * gamesPerPage;
    let indexOfFirstGame = indexOfLastGame - gamesPerPage;

    useEffect(() => {
        indexOfLastGame = currentPage * gamesPerPage;
        indexOfFirstGame = indexOfLastGame - gamesPerPage;

        setCurrentGames(data.slice(indexOfFirstGame, indexOfLastGame));
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        indexOfLastGame = currentPage * gamesPerPage;
        indexOfFirstGame = indexOfLastGame - gamesPerPage;

        setCurrentGames(data.slice(indexOfFirstGame, indexOfLastGame));
    }, [selectedGenre, selectedPlatform, data]);

    const btnStyle =
        "bg-white border-2 hover:border-none text-slate-400 hover:bg-black hover:text-white text-sm font-semibold w-[35px] h-[35px] rounded";

    return (
        <div className="flex items-center mx-auto my-auto">
            <button
                className={btnStyle}
                onClick={() => setCurrentPage((currentPage) => 1)}
            >
                1
            </button>
            <button
                className={btnStyle}
                onClick={() =>
                    setCurrentPage((currentPage) =>
                        currentPage === 1 ? 1 : currentPage - 1
                    )
                }
            >
                {"<"}
            </button>
            <div className="mx-10">
                <p className="text-md text-gray-700 font-semibold inline mr-2">
                    Página atual:
                </p>
                <p className="text-md font-bold inline">{currentPage}</p>
            </div>
            <button
                className={btnStyle}
                onClick={() =>
                    setCurrentPage((currentPage) =>
                        currentPage === Math.ceil(data.length / gamesPerPage)
                            ? currentPage
                            : currentPage + 1
                    )
                }
            >
                {">"}
            </button>
            <button
                className={btnStyle}
                onClick={() =>
                    setCurrentPage(Math.ceil(data.length / gamesPerPage))
                }
            >
                {Math.ceil(data.length / gamesPerPage)}
            </button>
        </div>
    );
};

export default Pagination;
