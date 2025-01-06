import { motion } from "framer-motion";

const Project = ({ name, src, alt }) => {
    const expand = {
        hover: {
            width: "100%",
            transition: { duration: 0.5, type: "spring", ease: [0.76, 0, 0.24, 1] },
        },
        initial: {
            width: "50%",
        }
    };

    return (
        <motion.div
            variants={expand}
            whileHover="hover"
            initial="initial"
            animate="initial"
            className="relative h-[90vh] p-[1rem] max-tablet:h-[45vh]"
        >
            <img
                className="w-full h-full rounded-[1.5rem] object-cover object-center max-tablet:rounded-[1rem]"
                src={src}
                alt={alt}
            />
            <motion.div
                className="absolute w-[calc(100%_-_48px)] bottom-[24px] left-[24px] p-[1rem] bg-[#0000005b] backdrop-blur-lg rounded-[1.5rem] text-color2 flex flex-col max-tablet:rounded-[1rem]">
                <h1 className="text-color text-[2rem] font-[600] tracking-[-1px]">{name}</h1>
                <p className="text-color text-[1rem] font-[500]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const projectImages = [
        { name: "Music pro", src: "/projects/p-1.jpg", alt: "project image 1" },
        { name: "Space Suit", src: "/projects/p-2.jpg", alt: "project image 1" },
    ];
    const projectImages2 = [
        { name: "Chromatic", src: "/projects/p-3.jpg", alt: "project image 1" },
        { name: "Straps", src: "/projects/p-4.jpg", alt: "project image 1" },
    ];

    return (
        <>
            <div className="w-full h-full p-[1.5rem] flex max-tablet:p-0">
                {projectImages.map((i) => (
                    <Project key={i.alt} name={i.name} src={i.src} alt={i.alt} />
                ))}
            </div>
            <div className="w-full h-full p-[1.5rem] flex max-tablet:p-0">
                {projectImages2.map((i) => (
                    <Project key={i.alt} name={i.name} src={i.src} alt={i.alt} />
                ))}
            </div>
        </>
    );
};

export default Projects;
