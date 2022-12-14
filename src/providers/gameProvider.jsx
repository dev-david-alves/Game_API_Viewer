import React, { createContext, useContext } from "react";

const GameContext = createContext([]);

export const GameProvider = ({
    children,
    data,
    setData,
    genres,
    setGenres,
    platforms,
    setPlatforms,
    selectedGender,
    setSelectedGender,
    selectedPlatform,
    setSelectedPlatform,
}) => {
    return (
        <GameContext.Provider
            value={{
                data,
                setData,
                genres,
                setGenres,
                platforms,
                setPlatforms,
                selectedGender,
                setSelectedGender,
                selectedPlatform,
                setSelectedPlatform,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => {
    return useContext(GameContext);
};
