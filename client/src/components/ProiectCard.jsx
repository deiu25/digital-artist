const ProjectCard = ({ title, description, img, page, handlePrev, handleNext }) => {
    return (
      <div className="xl:flex-shrink-0 w-full p-5">
        <div className="mb-8 overflow-hidden rounded-[20px]">
          <img className="object-cover" src={img} alt={title} />
        </div>
        <div className="flex flex-wrap justify-between items-center -m-2">
          <div className="w-auto p-2">
            <span className="inline-block text-xl text-p1 font-semibold tracking-tight">
              Project
            </span>
          </div>
          <div className="w-auto p-2">
            <div className="flex items-center">
              <div className="w-auto p-2">
                <button onClick={handlePrev} className="inline-block">
                  <img src="/images/icons/arrow-left.svg" alt="arrow left" className="mt-1" />
                </button>
              </div>
              <div className="w-auto p-2">
                <span className="inline-block text-xl text-p1 font-semibold">
                  {page}
                </span>
              </div>
              <div className="w-auto p-2">
                <button onClick={handleNext} className="inline-block">
                  <img src="/images/icons/arrow-right.svg" alt="arrow right" className="mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h6 className="mb-2 text-5xl text-w1 font-medium font-heading">{title}</h6>
        <p className="mb-6 text-xl font-medium text-neutral-400 tracking-tight">{description}</p>
        <a
          className="inline-flex items-center justify-center text-center h-16 p-5 font-semibold text-lg text-w1 tracking-tight bg-p1 hover:bg-p1/90 focus:bg-p1/80 rounded-lg focus:ring-4 focus:ring-neutral-800 transition duration-200"
          href="#"
        >
          See the project
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  