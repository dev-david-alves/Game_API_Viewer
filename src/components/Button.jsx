import React from "react";

const Button = ({ color, size, text, onClick }) => {
    const buttonStyles =
        "hover:brightness-125 h-25 px-4 py-1 drop-shadow-lg text-white font-semibold rounded-full mx-2 " +
        color +
        " " +
        size;
    return (
        <button className={buttonStyles} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
