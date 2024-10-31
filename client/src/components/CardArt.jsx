import PropTypes from "prop-types";

const CardArt = ({ imageSrc, price }) => {
  return (
    <div className="bg-white rounded-2xl w-full h-full flex flex-col items-center relative">
      <img src={imageSrc} alt="art piece" className="p-12 min-md:p-5" />
      <span className="text-black-100 text-xl sm:text-2xl font-normal font-angel tracking-wider absolute bottom-2 right-2">
        {price}
      </span>
    </div>
  );
};

CardArt.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardArt;
