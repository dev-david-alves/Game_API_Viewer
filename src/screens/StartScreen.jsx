import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { socialButtonsData } from "../utils/constants";
import SocialButton from "../components/SocialButton";
import DavidImage from "../assets/david.jpg";

import { stepData } from "../utils/constants";

const StartScreen = () => {
    let navigate = useNavigate();

    return (
        <div className="bg-[#FAF5EE] w-screen h-screen flex justify-center items-center overflow-x-hidden p-5 lg:p-0">
            <div className="bg-white drop-shadow-xl flex flex-col w-[600px] px-10 py-6 items-center rounded-2xl">
                <h1 className="text-xl font-bold">Consumo da API RAWG</h1>
                <p className="text-center text-sm mx-auto mt-3 text-slate-500">
                    Utilizando a API RAWG para procurar informações em tempo
                    real sobre jogos, de todos os gêneros e todas as plataformas
                    diponíveis na API.
                </p>

                <div className="my-5 w-full flex flex-col justify-center items-left">
                    <h2 className="text-md font-semibold">
                        Como utilizar a aplicação
                    </h2>

                    {stepData.map((step) => (
                        <div
                            className="w-full flex items-center mt-2 cursor-pointer"
                            key={step.id}
                        >
                            <div className="p-5 rounded-md bg-[#47A5AB] mr-4 flex justify-center items-center">
                                <span className="flex items-center justify-center w-0 h-0 text-center text-white text-sm font-extrabold">
                                    {step.id}
                                </span>
                            </div>
                            <div className="">
                                <p className="text-sm mx-auto text-slate-500">
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex items-center justify-center md:justify-end mt-1">
                    <Button
                        color="bg-[#71357C]"
                        size="w-[180px]"
                        text="Continuar"
                        onClick={() => navigate("/home")}
                    />
                </div>

                <div className="border-t-4 mt-4 w-full flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center mt-4">
                        <img
                            src={DavidImage}
                            alt="author"
                            className="w-[60px] rounded-full mr-3"
                        />
                        <h2 className="text-lg text-center font-bold">
                            <span className="text-sm font-normal">por </span>
                            David Alves
                        </h2>
                    </div>
                    <div className="flex align-center mt-4 md:mt-0">
                        {socialButtonsData.map((button, index) => (
                            <div
                                className={
                                    index !== socialButtonsData.length - 1
                                        ? "mr-2"
                                        : ""
                                }
                                key={index}
                            >
                                <SocialButton key={button.id} button={button} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
