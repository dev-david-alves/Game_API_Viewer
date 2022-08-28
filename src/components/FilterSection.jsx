import React from "react";
import Button from "./Button";

const FilterSection = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="w-full py-5 bg-white rounded-r-2xl">
                <div className="w-full py-3 mx-auto flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-semibold mb-2">Categorias</h4>
                    <Button
                        color="bg-[#71357C]"
                        text="Jogos"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#458B90]"
                        text="Gêneros"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#FD7E50]"
                        text="Plataformas"
                        size="w-[170px]"
                    />
                </div>
                <div className="w-full py-3 mx-auto flex flex-col justify-center items-center">
                    <h4 className="text-2xl font-semibold mb-2">Ordenar por</h4>
                    <Button
                        color="bg-[#71357C]"
                        text="Jogos"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#458B90]"
                        text="Gêneros"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#FD7E50]"
                        text="Plataformas"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#BCC000]"
                        text="Tempo de Jogo"
                        size="w-[170px] mb-1"
                    />
                    <Button
                        color="bg-[#067D28]"
                        text="Nota Metacritic"
                        size="w-[170px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
