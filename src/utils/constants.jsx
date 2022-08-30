import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

import { buttonStyles } from "../components/SocialButton";

export const socialButtonsData = [
    {
        id: 1,
        icon: <ImLinkedin style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-[#0073B0]",
        link: "https://www.linkedin.com/in/dev-david-alves",
    },
    {
        id: 2,
        icon: <BsGithub style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-black",
        link: "https://github.com/dev-david-alves",
    },
    {
        id: 3,
        icon: <AiFillInstagram style={buttonStyles.stx} />,
        style: buttonStyles.aStyle + " bg-[#F06222]",
        link: "https://www.instagram.com/deivi.als/",
    },
];

export const stepData = [
    {
        id: 1,
        text: "Na tela principal há 3 cards que mostram alguns dados sobre os 3 melhores jogos segundo a avaliação do Metacritc.",
    },
    {
        id: 2,
        text: "Usando o menu (select) é possível filtrar os dados da tabela por Gênero ou Plataformas disponíveis.",
    },
    {
        id: 3,
        text: "Clicando no nome da coluna é possível ordenar a tabela baseada naquela coluna.",
    },
    {
        id: 4,
        text: "Usando a barra de pesquisa é possível filtrar os dados que aparecem na tabela baseado no que você digitar.",
    },
    {
        id: 5,
        text: "Use os botões de paginação para navegar no conteúdo da tabela.",
    },
];
