import HeaderProj from '../components/HeaderProj';
import ProjectsPageCard from '../components/ProjectsPageCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/portfolio');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects
    .filter((project) => project.status === 'visible')
    .slice(indexOfFirstProject, indexOfLastProject);

  // Total pagini
  const totalPages = Math.ceil(
    projects.filter((project) => project.status === 'visible').length /
      projectsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="sm:bg-hero-section mt-40 px-[12%]">
        <div className="container px-4 mx-auto">
          <h1 className="text-w1 text-4xl lg:text-6xl font-bold font-angel text-center mb-6 pt-16">
            My Projects
          </h1>
          <p className="text-w1 text-xl text-center mb-20">
            Discover the latest projects, tips and user stories insights from Solstice.
          </p>
          <div className="pb-20 mb-20 border-b border-p1">
            <HeaderProj
              date="20 Dec 2024"
              category="News"
              title="New Techniques to Enhance Tattoo Art and Client Experience"
              description="Discover the latest techniques in tattoo artistry to elevate design quality and improve client comfort."
              imageUrl="/images/about-art-tatoo.png"
            />
          </div>
          <h2 className="text-w1 text-5xl font-bold font-angel mb-12">
            Latest projects
          </h2>
          <div className="flex flex-wrap mb-8 pb-8 border-b border-p1 -mx-4">
            {currentProjects.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <ProjectsPageCard
                  category={project.category || 'Project'}
                  title={project.title}
                  description={project.description}
                  imageUrl={`http://localhost:3000/${project.imagePath}`}
                  clientUrl={project.clientUrl}
                  isVisible={project.status === 'visible'}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 pb-32">
            <p className="text-w1 text-sm">
              <span>Page</span> <span className="font-semibold">{currentPage}</span> <span>of</span> <span className="font-semibold">{totalPages}</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="next-prev"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className="next-prev"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
