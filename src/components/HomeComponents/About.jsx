import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrases = [
    "We are a creative agency collaborating with ",
    "brands to build insightful strategies, create ",
    "unique designs, and craft experiences that bring ",
    "positive change and value."
]

const About = () => {

    const animation = {
        initial: { y: "100%" },
        enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div className="w-full h-fit flex items-start justify-start flex-col">
            <div ref={ref} className='w-full px-[2.5rem] py-[5rem] flex items-start justify-center flex-col max-tablet:px-[1rem]'>
                {
                    phrases.map((phrase, index) => {
                        return <div key={index} className='overflow-hidden'>
                            <motion.p className='max-w-[1200px] text-color text-[3rem] font-[400] tracking-[-1px] leading-[1.1] max-tablet:text-[2.5rem]' custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default About
