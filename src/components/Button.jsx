import React from "react";

const Button = ({ color, size, text }) => {
    const buttonStyles =
        "h-25 px-4 py-1 drop-shadow-lg text-white font-semibold rounded-full mx-2 " +
        color +
        " " +
        size;
    return <button className={buttonStyles}>{text}</button>;
};

export default Button;
