import React from "react";
import { useNavigate } from "react-router-dom";

import DavidImage from "../assets/david.jpg";
import SocialButton from "./SocialButton";
import { socialButtonsData } from "../utils/constants";
import Button from "./Button";

const SideBar = () => {
    let navigate = useNavigate();

    return (
        <div className="w-full lg:w-[250px] lg:h-screen flex lg:flex-col align-center justify-center">
            <div className="w-full h-[90%] lg:border-r-4 flex flex-col justify-evenly align-center pt-10 md:py-7">
                <div className="w-full flex flex-col">
                    <img
                        src={DavidImage}
                        alt="author"
                        className="w-[80px] mx-auto mb-3 rounded-full"
                    />
                    <h2 className="text-lg text-center font-bold">
                        <span className="text-sm font-normal">por </span>David
                        Alves
                    </h2>

                    <p className="text-left hidden lg:block text-sm w-[80%] mx-auto mt-7 text-slate-500">
                        Utilizando a API RAWG para procurar informações em tempo
                        real sobre jogos, de todos os gêneros e todas as
                        plataformas diponíveis na API.
                    </p>
                </div>

                <div className="w-full h-full flex lg:flex-col align-center my-2 lg:mt-5">
                    {socialButtonsData.map((button) => (
                        <div className="w-full mb-2" key={button.id}>
                            <SocialButton key={button.id} button={button} />
                        </div>
                    ))}
                </div>

                <div className="w-full flex items-center justify-center">
                    <Button
                        color="bg-[#47A5AB]"
                        size="w-[150px]"
                        text="Tutorial"
                        onClick={() => navigate("/")}
                    />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
