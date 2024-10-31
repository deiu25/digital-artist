import PropTypes from "prop-types";

const HeaderProj = ({ date, category, title, description, imageUrl }) => {
  return (
    <div className="bg-p7 border border-transparent hover:border-orange-500 transition duration-200 rounded-2xl h-full p-3 flex flex-wrap group">
      <div className="w-full lg:w-1/2 p-4">
        <div className="relative h-[240px]">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            src={imageUrl}
            alt="main img"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="flex flex-col justify-center items-start h-full py-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <p className="group-hover:text-p1 transition duration-200 text-w1 text-sm">
              {date}
            </p>
            <div className="w-1 h-1 bg-[#B46995] rounded-full"></div>
            <div className="py-1 px-3 rounded-md bg-white border border-gray-100 text-xs font-medium text-gray-700">
              {category}
            </div>
          </div>
          <h2 className="group-hover: transition duration-200 text-w1 text-2xl lg:text-3xl font-bold font-angel mb-6 max-w-xs lg:max-w-md">
            {title}
          </h2>
          <p className="group-hover:text-p1 transition duration-200 text-w1 max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

HeaderProj.propTypes = {
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default HeaderProj;
