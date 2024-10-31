const HeaderProj = ({ date, category, title, description, imageUrl }) => {
    return (
      <div className="border border-transparent hover:border-orange-500 transition duration-200 rounded-2xl h-full p-3 flex flex-wrap group">
        <div className="w-full lg:w-1/2 p-4">
          <div className="relative h-[240px]">
            <div className="absolute top-0 left-0 z-10">
              <svg className="rounded-tl-2xl" width="155" height="154">
                <use xlinkHref="/images/icons/shapes.svg#shape-top-left" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <svg className="rounded-br-2xl" width="150" height="158">
                <use xlinkHref="/images/icons/shapes.svg#shape-bottom-right" />
              </svg>
            </div>
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
            <p className="group-hover:text-p1 transition duration-200 font-satoshi text-w1 max-w-md">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

export default HeaderProj