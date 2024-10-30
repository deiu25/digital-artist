import { useState } from "react";
import { projectsData } from "../constants";
import ProjectCard from "../components/ProiectCard";

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = (currentIndex + 1) % projectsData.length;
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <section className="py-12 md:py-24 sm:bg-hero-section overflow-hidden">
        <div className="container mx-auto px-[12%]">
          <div className="px-5 mb-12 max-w-7xl mx-auto">
            <div className="border-t border-neutral-600">
              <h5 className="pt-2 text-5xl text-w1 font-semibold font-angel tracking-tight mx-auto">
                The Last Projects
              </h5>
            </div>
          </div>
          <div className="flex justify-center -m-5 max-w-7xl mx-auto">
            {/* Proiectul curent */}
            <div className="hidden xl:block flex-shrink-0 w-full p-5">
              <div className="mb-8 overflow-hidden rounded-[20px]">
                <img className="object-cover" src={projectsData[currentIndex].img} alt="Project" />
              </div>
            </div>
            
            <ProjectCard
              title={projectsData[currentIndex].title}
              description={projectsData[currentIndex].description}
              img={projectsData[currentIndex].img}
              page={`${currentIndex + 1}/${projectsData.length}`}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
  
            <div className="hidden xl:block flex-shrink-0 w-full p-5">
              <div className="mb-8 overflow-hidden rounded-[20px] h-[236px]">
                <img className="object-cover" src={projectsData[nextIndex].img} alt="Next Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;