
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Menu from "./Menu";


const PerspectiveMenu = ({ label, color, delayed }) => {
    const navigationsTextAnimCustom = {
        hover: {
            color: color,
            transition: { duration: 0.5, delay: delayed, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    };
    return (

        <div className="w-full h-full bg-none ">
            <motion.p
                className={`uppercase text-[1rem] font-[500] tracking-[-.5px]`}
                animate="hover"
                variants={navigationsTextAnimCustom}
            >
                {label}
            </motion.p>
        </div>
    );
}

export default function Nav() {
    const [menuToggle, setMenuToggle] = useState(false);

    const router = useLocation();

    const isAboutRoute =
        router.pathname === '/about' || router.pathname === '/blog';

    const navigationsTextAnim = {
        hover: {
            top: "-100%",
            transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }, initial: {
            top: "0%",
        }
    };

    const navigationsText = [
        { title: "PEROCA", title2: "JIGANTE" },
        { title: "BRAND DESIGN", title2: "WEB DEVELOPMENT" },
        { title: "©2025", title2: "RIGHTED" },
    ];

    const textColor = isAboutRoute ? "#222222" : (menuToggle ? "#222222" : "#e0dfdd");
    const textChange = menuToggle ? "CLOSE" : "MENU"

    return (
        <>
            <nav className="fixed w-full h-[5vh] top-0 pb-[3rem] pt-[2rem] px-[2.5rem] flex items-center z-50 pointer-events-none select-none max-tablet:px-[1rem]">
                <ul className="w-full flex items-center justify-between">
                    {navigationsText.map((i) => (
                        <li className="w-fit h-[30px] overflow-hidden cursor-pointer pointer-events-auto" key={i.title}>
                            <motion.div
                                className="relative w-full h-full"
                                variants={navigationsTextAnim}
                                whileHover="hover"
                            >
                                <PerspectiveMenu label={i.title} color={textColor} delayed={menuToggle ? 0 : 1} />
                                <PerspectiveMenu label={i.title2} color={textColor} delayed={menuToggle ? 0 : 1} />
                            </motion.div>
                        </li>
                    ))}

                    <li className="w-fit h-[30px] overflow-hidden cursor-pointer pointer-events-auto">
                        <motion.div
                            className="relative w-full h-full"
                            onClick={() => setMenuToggle(!menuToggle)}
                            whileHover="hover"
                            variants={navigationsTextAnim}
                        >
                            <PerspectiveMenu label={textChange} color={textColor} delayed={menuToggle ? 0 : 1} />
                            <PerspectiveMenu label={textChange} color={textColor} delayed={menuToggle ? 0 : 1} />
                        </motion.div>
                    </li>
                </ul>
            </nav>

            <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </>
    );
}
