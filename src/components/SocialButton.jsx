import React from "react";

export const buttonStyles = {
    stx: {
        fontSize: "1.7rem",
        color: "#ffffff",
        margin: "0 auto",
        alignSelf: "center",
        hover: {
            filter: "brightness(0.4)",
        },
    },
    aStyle: "w-[50px] h-[50px] flex justify-center align-center rounded-lg hover:brightness-125 drop-shadow-md mx-auto",
};

const SocialButton = ({ button }) => {
    return (
        <a href={button.link} target="_blank" className={button.style}>
            {button.icon}
        </a>
    );
};

export default SocialButton;
