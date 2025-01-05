import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft } from 'react-icons/fa';
import { Link } from "react-router-dom";

const icons = [
    {
        id: 1,
        logo: <FaApple />,
        name: "Apple",
    },
    {
        id: 2,
        logo: <FaGoogle />,
        name: "Google",
    },
    {
        id: 3,
        logo: <FaAmazon />,
        name: "Amazon",
    },
    {
        id: 4,
        logo: <FaMicrosoft />,
        name: "Microsoft",
    }
];

const Partners = () => {
    const logoVariants = {
        hover: {
            top: "-100%",
            transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
        },
        initial: {
            top: "0%",
        }
    };

    const opacityVariants = {
        hover: { opacity: 1 },
        initial: { opacity: 0 }
    };
    return (
        <div className="mb-[5rem]">
            <div className="w-full mb-[2.5rem] flex items-center justify-between">
                <h1 className="mb-[1rem] text-color4 text-[2rem] font-[500] tracking-[-1px] leading-[1.1]">
                    Selected Clients
                </h1>
                <Link className="px-[1.5rem] py-[.5rem] text-color4 text-[.85rem] font-[500] border border-border2 rounded-[2rem]" href={"/partners"}>View All</Link>
            </div>

            <div className="w-full flex items-center gap-[1.5rem]">
                {icons.map((icon) => (

                    <motion.div
                        key={icon.id}
                        className={`relative w-full h-[450px] bg-background5 rounded-[1rem] flex items-center justify-center cursor-pointer z-10 group`}
                        initial="initial"
                        whileHover="hover"
                    >
                        <div className="w-full h-[100px] overflow-hidden">
                            <motion.div className="relative w-full h-full flex items-center justify-start flex-col"
                                variants={logoVariants}
                            >

                                <span className="text-color4 text-[5rem] group-hover:text-color4">
                                    {icon.logo}
                                </span>
                                <span className="relative top-[40px] text-color4 text-[1rem] uppercase font-[600] tracking-[1px] group-hover:text-color4">
                                    {icon.name}
                                </span>
                            </motion.div>

                        </div>

                        <motion.div
                            className="absolute w-[40px] h-[40px] top-[25px] right-[25px] bg-background2 rounded-full flex items-center justify-center"
                            key={icon.id}
                            variants={opacityVariants}
                        >
                            <BsPlus color="#eeeeee" size={32} />
                        </motion.div>
                    </motion.div>

                ))}
            </div>
        </div>
    )
}

export default Partners