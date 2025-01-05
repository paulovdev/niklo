import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = [
    "Providing designers, artists, and brands with",
    "design that elevates their visual ",
    "communication.",
];

export default function Hero() {
    const [isAnimationDelayed, setIsAnimationDelayed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationDelayed(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

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

    return (
        <div className="my-0 mx-auto w-full h-[90vh] py-[2rem] flex flex-col items-start justify-end gap-[1rem]">
            <span className="mb-[1rem] text-color5 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
                WE PLACE GREAT EMPHASIS ON
            </span>
            <div className="flex flex-col items-start justify-start">
                {phrases.map((phrase, index) => (
                    <div key={index} className="overflow-hidden">
                        <motion.h1
                            className="max-w-[1200px] text-color4 text-[3rem] font-[400] tracking-[-1px] leading-[1.1] max-tablet:text-[2.5rem]"
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={isAnimationDelayed ? "animate" : "initial"}
                        >
                            {phrase}
                        </motion.h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
