import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const Shape = ({ children, pos }) => {
    // State to track if the component is mounted (client-side)
    const [isClient, setIsClient] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

    // Cria valores de movimento para as posições x e y do mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Atualiza as dimensões da janela após a montagem do componente
    useEffect(() => {
        // Set the window dimensions after the component is mounted
        if (isClient) {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    }, [isClient]);

    // Update isClient state after mounting
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Usa useTransform para mapear os valores de movimento do mouse para deslocamentos da forma
    const moveX = useTransform(mouseX, [0, windowDimensions.width], [-25, 25]);
    const moveY = useTransform(mouseY, [0, windowDimensions.height], [-25, 25]);

    // Adiciona um efeito de suavização aos movimentos
    const springX = useSpring(moveX, { stiffness: 50, damping: 10 });
    const springY = useSpring(moveY, { stiffness: 50, damping: 10 });

    // Atualiza os valores do mouse quando ele se move
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        if (isClient) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (isClient) {
                window.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [isClient, mouseX, mouseY]);

    // Prevent rendering when not on the client-side
    if (!isClient) {
        return null;
    }

    return (
        <div className="">
            <motion.div
                className={`absolute w-[200px] h-[300px] top-0 ${pos} bg-[#b3b3b3] blur-[150px] rotate-[120deg]`}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.2, type: 'tween', ease: [0.56, 0, 0.24, 1] }}
                style={{ x: springX, y: springY }}
            >
            </motion.div>
            {children}

        </div>
    );
};

export default Shape;