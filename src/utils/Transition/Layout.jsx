import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

const Layout = ({ children, backgroundColor }) => {
    const anim = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants,
        };
    };

    const nbOfColumns = 4;
    return (
        <>
            <div className="page stairs" style={{ backgroundColor }}>
                <motion.div {...anim(opacity)} className="transition-background" />

                <div className="transition-container">
                    {[...Array(nbOfColumns)].map((_, i) => {
                        return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
                    })}
                </div>
                {children}
            </div>
        </>
    );
};

export default Layout;
