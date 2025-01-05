import { motion } from "framer-motion";

const Service = ({ title, description, id }) => {
    const expand = {
        hover: {
            width: "100%",
            transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] }
        },
        initial: {
            width: 0
        }
    }

    return (
        <motion.div

            whileHover="hover"
            initial="initial"
            className="relative w-full h-full flex items-center flex-col"
        >
            <div className="w-full  p-[1rem]  grid grid-cols-3">
                <div className="w-full h-full flex items-center">
                    <span className="text-color5 text-[2rem] font-[600] tracking-[1px]">{id}</span>
                </div>

                <div className="w-full h-full flex items-center">
                    <h1 className="text-color4 text-[2rem] font-[500] tracking-[-1px]">{title}</h1>
                </div>

                <div className="w-full h-full flex items-center">
                    <p className="text-wrap break-words text-color5 text-[1.1rem] font-[300]">{description}</p>
                </div>


                <motion.div variants={expand} className="absolute h-[2px] bottom-[5px] bg-border2"></motion.div>
            </div>
        </motion.div>

    );
};

const Services = () => {
    const services = [
        { title: "Creative Excellence", description: "Experience our team's creative expertise in innovative, compelling design solutions.", id: "01" },
        { title: "Costumized Soluttions", description: "We customize services for your unique business needs with a personal touch.", id: "02" },
        { title: "Full-Stack Expertise", description: "One team, all your needs. Development, design, and everything in between. ", id: "03" },
        { title: "Transparent Communication", description: "Stay informed and involved with, open communication during the project", id: "04" },
    ];

    return (
        <div className="w-full h-fit mx-auto my-0 flex items-start justify-start">

            <div className="w-full flex-[1_1_0]">
                <h1 className="mb-[1rem] text-color4 text-[2rem] font-[500] tracking-[-1px] leading-[1.1]">
                    Services
                </h1>
            </div>

            <div className="relative w-full flex-[2.4_1_0]">
                <div className="w-full h-full">
                    {services.map((i) => (
                        <Service title={i.title} description={i.description} id={i.id} />
                    ))}
                </div>
            </div>

        </div>
    );
}
export default Services;