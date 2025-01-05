import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    "We ", "are ", "a ", "creative ", "agency ", "collaborating ", "with ",
    "brands ", "to ", "build ", "insightful ", "strategies, ", "create ",
    "unique ", "designs, ", "and ", "craft ", "experiences ", "that ", "bring ",
    "positive ", "change ", "and ", "value. ",
];

const Paragraph = () => {
    const animation = {
        initial: { x: "100%", filter: "blur(40px)" },
        enter: (i) => ({
            x: "0",
            filter: "blur(0px)",
            transition: {
                duration: 0.70,
                ease: [0.43, 1, 0.68, 1],
                delay: 0.065 * i
            }
        })
    };

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div className="w-full h-[50vh] mx-auto my-0 flex items-center justify-center">
            <div ref={ref}>
                <p className='text-center'>
                    {phrases.map((phrase, index) => (
                        <motion.span
                            key={index}
                            className='inline-block text-color4 text-[3rem] text-center font-[400] tracking-[-1px] leading-[1.3] mr-[0.7rem]'
                            custom={index}
                            variants={animation}
                            initial="initial"
                            animate={inView ? "enter" : ""}
                        >
                            {phrase}
                        </motion.span>
                    ))}
                </p>
            </div>

        </div>
    );
}
export default Paragraph