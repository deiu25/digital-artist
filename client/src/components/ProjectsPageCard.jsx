const ProjectsPageCard = ({ date, category, title, description, imageUrl }) => {
  return (
    <div className="border border-transparent hover:border-orange-500 transition duration-200 rounded-2xl h-full p-3 group">
      <div className="relative h-[240px]">
        <div className="absolute top-0 left-0 z-10">
          <svg className="rounded-tl-2xl" width="159" height="156">
            <use xlinkHref="/images/icons/shapes.svg#shape-top-left" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          <svg className="rounded-br-2xl" width="150" height="158">
            <use xlinkHref="/images/icons/shapes.svg#shape-bottom-right" />
          </svg>
        </div>
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="py-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="text-w1 group-hover:text-p1 transition duration-200 text-sm">
            {date}
          </p>
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
  );
};

export default ProjectsPageCard;
