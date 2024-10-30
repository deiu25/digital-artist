const ProjectCard = ({ img, title }) => {
  return (
    <div className="mb-8 flex items-center overflow-hidden rounded-[20px] bg-white h-[336px] w-[300px]">
      <div className="w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
