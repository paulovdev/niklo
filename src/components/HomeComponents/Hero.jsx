import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import Button from './Button'
import { RiArrowRightDownLine } from "react-icons/ri";

const phrases = [
    "Straps combines high-end visuals with",
    "excepcional moments ✦"
];


const Hero = () => {
    const [isAnimationDelayed, setIsAnimationDelayed] = useState(true);

    const animation = {
        initial: { y: "100%" },
        animate: (i) => ({
            y: "0",
            transition: {
                duration: 0.75,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.075 * i,
            },
        }),
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationDelayed(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="my-0 mx-auto w-full h-[90dvh] py-[2rem] flex flex-col items-start justify-end ">
                <span className="mb-[1rem] text-color2 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">WE PLACE GREAT EMPHASIS ON</span>
                <div>
                    {phrases.map((phrase, index) => (
                        <div key={index} className="overflow-hidden">
                            <motion.h1
                                className="max-w-[1200px] text-color text-[3rem] font-[400] tracking-[-1px] leading-[1.1] max-tablet:text-[2.5rem]"
                                custom={index}
                                variants={animation}
                                initial="initial"
                                animate={isAnimationDelayed ? "initial" : "animate"}
                            >
                                {phrase}
                            </motion.h1>

                        </div>
                    ))}
                </div>
                <Button title="More about us" rightIcon={<RiArrowRightDownLine />} containerClass='!bg-background2' />
            </div>
       
        </>
    );
}

export default Hero