import React, { useState, useEffect } from "react";

const Pagination = ({ currentGames, setCurrentShownGames }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(9);

    let indexOfLastGame = currentPage * gamesPerPage;
    let indexOfFirstGame = indexOfLastGame - gamesPerPage;

    useEffect(() => {
        indexOfLastGame = currentPage * gamesPerPage;
        indexOfFirstGame = indexOfLastGame - gamesPerPage;

        setCurrentShownGames(
            [...currentGames].slice(indexOfFirstGame, indexOfLastGame)
        );
    }, [currentPage, currentGames]);

    useEffect(() => {
        setCurrentPage(1);
    }, [currentGames]);

    const btnStyle =
        "bg-white border-2 hover:border-none text-slate-400 hover:bg-black hover:text-white text-sm font-semibold w-[35px] h-[35px] rounded";

    const paginationStyle =
        Math.ceil(currentGames.length / gamesPerPage) > 1
            ? "flex items-center mx-auto my-auto"
            : "hidden";

    return (
        <div className={paginationStyle}>
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
                        currentPage ===
                        Math.ceil(currentGames.length / gamesPerPage)
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
                    setCurrentPage(
                        Math.ceil(currentGames.length / gamesPerPage)
                    )
                }
            >
                {Math.ceil(currentGames.length / gamesPerPage)}
            </button>
        </div>
    );
};

export default Pagination;
