import clsx from 'clsx';

const Button = ({ icon, children, href, containerClassName, onClick }) => {
    const Inner = () => (
        <div className="relative flex items-center justify-center">
            {icon && (
                <img src={icon} alt="btn" className="object-contain" />
            )}
            <span className="absolute inset-0 flex items-center justify-center text-lg lg:text-2xl font-satoshi font-bold tracking-widest uppercase text-[#12100C]">
                {children}
            </span>
        </div>
    );

    return href ? (
        <a
            className={clsx("relative inline-flex items-center justify-center p-2 rounded-2xl shadow-500 group", containerClassName)}
            href={href}
        >
            <Inner />
        </a>
    ) : (
        <button
            className={clsx("relative inline-flex items-center justify-center p-2 rounded-2xl shadow-500 group", containerClassName)}
            onClick={onClick}
        >
            <Inner />
        </button>
    );
}

export default Button;
