import PropTypes from "prop-types";

const ProjectsPageCard = ({ category, title, description, imageUrl, clientUrl, isVisible }) => {
  if (!isVisible) return null; 

  return (
    <a href={clientUrl} target="_blank" rel="noopener noreferrer">
      <div className="bg-p7 border border-transparent hover:border-orange-500 transition duration-200 rounded-2xl h-full p-3 group">
        <div className="relative bg-white rounded-32 h-[240px]">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="py-6">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <div className="w-1 h-1 bg-[#B46995] rounded-full"></div>
            <div className="py-1 px-2 rounded-md bg-white border border-gray-100 text-xs font-medium text-gray-700">
              {category}
            </div>
          </div>
          <h2 className="text-w1 group-hover: transition duration-200 text-xl font-bold font-angel mb-3 max-w-xs">
            {title}
          </h2>
          <p className="text-w1 group-hover:text-p1 transition duration-200 font-satoshi text-sm">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

ProjectsPageCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  clientUrl: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

export default ProjectsPageCard;
