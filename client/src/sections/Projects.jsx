import { useState, useEffect } from "react";
import ProjectCard from "../components/ProiectCard";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import axios from "axios";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/portfolio");
        const visibleProjects = response.data
          .filter((project) => project.status === "visible")
          .slice(-6);

        const projectsWithFullImagePath = visibleProjects.map((project) => ({
          ...project,
          imagePath: `http://localhost:3000/${project.imagePath}`,
        }));

        setProjectsData(projectsWithFullImagePath);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const prevIndex =
    currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % projectsData.length;

  const handleNext = () => {
    setCurrentIndex((index) => (index + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((index) =>
      index === 0 ? projectsData.length - 1 : index - 1
    );
  };

  if (projectsData.length === 0) return null;

  return (
    <section className="md:py-24 sm:bg-hero-section overflow-hidden">
      <Element name="projects">
        <div className="mx-auto px-[12%]">
          <div className="mb-12 max-w-7xl mx-auto">
            <h5 className="pt-7 text-5xl text-w1 font-semibold font-angel tracking-tight mx-auto border-t border-neutral-600">
              The Last Projects
            </h5>
          </div>
          <div className="flex justify-center items-center -m-5 max-w-7xl mx-auto">
            <div className="hidden xl:block p-5">
              <div className="overflow-hidden rounded-[20px] h-[236px] w-[250px] bg-white">
                <img
                  className="object-cover w-full h-full"
                  src={projectsData[prevIndex].imagePath}
                  alt="Previous Project"
                />
              </div>
            </div>

            <div className="p-10 min-h-[600px]">
              <ProjectCard
                img={projectsData[currentIndex].imagePath}
                title={projectsData[currentIndex].title}
              />
              <div className="flex flex-wrap justify-between items-center -m-2">
                <div className="w-auto p-2">
                  <span className="inline-block text-xl text-p1 font-semibold tracking-tight">
                    Project
                  </span>
                </div>
                {projectsData.length > 1 && (
                  <div className="w-auto p-2 flex items-center">
                    <button onClick={handlePrev} className="p-2">
                      <img
                        src="/images/icons/arrow-left.svg"
                        alt="arrow left"
                        className="mt-1"
                      />
                    </button>
                    <span className="text-xl font-semibold">{`${
                      currentIndex + 1
                    }/${projectsData.length}`}</span>
                    <button onClick={handleNext} className="p-2">
                      <img
                        src="/images/icons/arrow-right.svg"
                        alt="arrow right"
                        className="mt-1"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div className="">
                <h6 className="text-5xl font-medium min-h-[60px]">
                  {projectsData[currentIndex].title}
                </h6>
                <p className="text-xl text-neutral-400 min-h-[100px]">
                  {projectsData[currentIndex].description.length > 30
                    ? projectsData[currentIndex].description.slice(0, 30) +
                      "..."
                    : projectsData[currentIndex].description}
                </p>

                <div className="flex gap-x-4">
                  <a
                    className="see-proj-btn"
                    href={projectsData[currentIndex].clientUrl}
                  >
                    See the project
                  </a>
                  <Link
                    className="see-proj-btn"
                    to="/all-projects"
                  >
                    See All Projects
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden xl:block p-5">
              <div className="overflow-hidden rounded-[20px] h-[236px] w-[250px] bg-white">
                <img
                  className="object-cover w-full h-full"
                  src={projectsData[nextIndex].imagePath}
                  alt="Next Project"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Projects;
