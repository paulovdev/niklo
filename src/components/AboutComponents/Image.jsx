
const Image = () => {

    return (
        <div className="relative w-full h-screen flex items-center gap-[1.5rem]" >
            <img
                className="relative w-full h-full rounded-[40px] object-cover brightness-[85%] select-none"
                src="/about/bg-3.jpg"
                width={1920}
                height={1080}
                alt=""
            />

        </div>
    );
}
export default Image;