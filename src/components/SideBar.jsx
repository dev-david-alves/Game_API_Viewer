import React from "react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import Man from "../assets/man.jpg";

const buttonStyles = {
    stx: {
        fontSize: "1.7rem",
        color: "#ffffff",
        margin: "0 auto",
        alignSelf: "center",
    },
    aStyle: "w-[50px] h-[50px] flex justify-center align-center rounded-lg drop-shadow-md mx-auto",
};

const buttons = [
    {
        id: 1,
        icon: <ImLinkedin style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-[#0073B0]",
    },
    {
        id: 2,
        icon: <BsGithub style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-black",
    },
    {
        id: 3,
        icon: <AiFillInstagram style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-[#F06222]",
    },
];

const SideBar = () => {
    return (
        <div className="w-[250px] h-screen flex flex-col align-center justify-center">
            <div className="w-full h-[90%] border-r-4 flex flex-col justify-evenly align-center py-7">
                <div className="w-full flex flex-col">
                    <img
                        src={Man}
                        alt="author"
                        className="w-[80px] mx-auto mb-3 rounded-full"
                    />
                    <h2 className="text-lg text-center font-bold">
                        <span className="text-sm font-normal">por </span>David
                        Alves
                    </h2>

                    <p className="text-left text-sm w-[80%] mx-auto mt-7 text-slate-500">
                        Utilizando a API RAWG para procurar informações em tempo
                        real sobre jogos, de todos os gêneros e todas as
                        plataformas diponíveis.
                    </p>
                </div>

                <div className="w-full h-full flex flex-col justify-between align-center py-10">
                    {buttons.map((button) => (
                        <a
                            href="https://www.linkedin.com/in/dev-david-alves"
                            target="_blank"
                            key={button.id}
                            className={button.style}
                        >
                            {button.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
