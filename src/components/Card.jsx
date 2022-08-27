import React from "react";

const Card = ({ data, color }) => {
    console.log(color);

    const cardStyles = "w-[240px] rounded-lg py-3 px-4 drop-shadow-lg " + color;

    console.log(cardStyles);

    return (
        <div className={cardStyles}>
            <h4 className="text-lg font-bold text-white mb-2">{data.title}</h4>
            {data.platforms.map((platform) => (
                <p
                    className="inline-block text-white text-md mr-3 text-white"
                    key={platform}
                >
                    {platform}
                </p>
            ))}
            {data.genres.map((genre) => (
                <p
                    className="inline-block text-white text-md mr-3 text-white"
                    key={genre}
                >
                    {genre}
                </p>
            ))}

            <div className="w-full flex justify-between mt-1 items-center">
                <div className="w-[160px] h-[10px] bg-black rounded">
                    <div className="w-[120px] h-[10px] bg-green-400 rounded"></div>
                </div>
                <span className="text-green-400 text-md font-bold">91</span>
            </div>
        </div>
    );
};

export default Card;
