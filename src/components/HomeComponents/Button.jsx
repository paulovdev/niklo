const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`relative w-fit mt-8 px-5 pr-4 py-3  rounded-full text-color ${containerClass} cursor-pointer overflow-hidden`}>
            {leftIcon}
            <span className='relative incline-flex overflow-hidden font-general text-xs gp-1'>
                <div className="">
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}

export default Button