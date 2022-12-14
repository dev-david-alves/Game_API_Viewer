import React from "react";

const Card = ({ data, color }) => {
    const cardStyles =
        "max-h-[230px] mb-3 hover:brightness-110 w-[200px] lg:w-[240px] rounded-lg py-2 px-4 drop-shadow-lg " +
        color;

    return (
        <div className={cardStyles}>
            <h4 className="text-lg font-bold text-white mb-2">{data.name}</h4>
            <div className="w-full truncate 2xl:removeTruncate removeTruncate border-t-2 py-1">
                {data.platforms.map((platform, index) => (
                    <p
                        className="inline-block text-white text-md mr-3"
                        key={index}
                    >
                        {platform.platform.name}
                    </p>
                ))}
            </div>
            <div className="w-full truncate 2lx:removeTruncate removeTruncate border-t-2 py-1">
                {data.genres.map((genre, index) => (
                    <p
                        className="inline-block text-gray-200 font-bold text-md mr-3"
                        key={index}
                    >
                        {genre.name}
                    </p>
                ))}
            </div>

            <div className="w-full border-t-2">
                <span className="text-green-400 text-md font-bold inline">
                    <p className="text-gray-200 text-md font-bold inline">
                        Nota metacritic:{" "}
                    </p>{" "}
                    {data.metacritic}
                </span>
            </div>
        </div>
    );
};

export default Card;
