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
