const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`relative w-fit mt-8 px-5 pr-4 py-3 ${containerClass} rounded-full text-color  flex items-center gap-1  cursor-pointer overflow-hidden`}>
            {leftIcon}
            <span className='relative overflow-hidden text-[.9rem]'>
                <div className="">
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button