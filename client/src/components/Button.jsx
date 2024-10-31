import clsx from "clsx";
import PropTypes from "prop-types";

const Inner = ({ icon, children }) => (
  <div className="relative flex items-center justify-center">
    {icon && (
      <img
        src={icon}
        alt="Iconă buton"
        className="object-contain md:max-w-[180px] xl:max-w-[200px] 2xl:max-w-[286px] mr-2"
      />
    )}
    <span className="absolute inset-0 flex items-center justify-center lg:text-xl 2xl:text-2xl font-satoshi font-bold tracking-widest uppercase text-[#12100C]">
      {children}
    </span>
  </div>
);

Inner.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const baseClass = "relative inline-flex items-center justify-center p-2 rounded-2xl shadow-500 group";

  return href ? (
    <a className={clsx(baseClass, containerClassName)} href={href}>
      <Inner icon={icon}>{children}</Inner>
    </a>
  ) : (
    <button
      type="button" 
      className={clsx(baseClass, containerClassName)}
      onClick={onClick}
    >
      <Inner icon={icon}>{children}</Inner>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
