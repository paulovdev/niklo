import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LogoImg = ({ img, alt, widthPercentage }) => {
    return (
        <img
            className="w-full h-[80px] invert-[1] max-tablet:h-[50px]"
            src={img}
            width={150}
            height={40}
            alt={alt}
            style={{ width: `${widthPercentage}%` }}
        />
    );
};

const Logos = () => {
    const images = [
        { id: 1, img: "/logos/logo-1.svg", alt: "Logo 1" },
        { id: 2, img: "/logos/logo-2.svg", alt: "Logo 2" },
        { id: 3, img: "/logos/logo-3.svg", alt: "Logo 3" },
        { id: 4, img: "/logos/logo-4.svg", alt: "Logo 4" },
        { id: 5, img: "/logos/logo-5.svg", alt: "Logo 5" },
        { id: 6, img: "/logos/logo-6.svg", alt: "Logo 6" },
    ];

    const duplicateImages = [...images, ...images];
    const widthPercentage = 300 / images.length;

    useGSAP(() => {
        gsap.to('.logos', {
            xPercent: [-100, 100],
            duration: 20,
            repeat: Infinity,
            ease: 'none',
        })
    })


    return (
        <div className="relative w-full h-[15vh] px-[2.5rem] bg-[#f34a03] backdrop-blur-xl overflow-hidden flex items-center justify-center">
            <div className="logos flex" animate="animate">
                {duplicateImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 ">
                        <div className="flex flex-col items-center justify-center h-full">
                            <LogoImg
                                img={image.img}
                                alt={image.alt}
                                widthPercentage={widthPercentage}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logos;
