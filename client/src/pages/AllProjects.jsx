import HeaderProj from "../components/HeaderProj";
import ProjectsPageCard from "../components/ProjectsPageCard";
import { allprojectsData } from "../constants";

const AllProjects = () => {
  return (
    <section className="overflow-hidden">
      <div className="sm:bg-hero-section mt-40 px-[12%]">
        <div className="container px-4 mx-auto">
          <h1 className="text-w1 text-4xl lg:text-6xl font-bold font-angel text-center mb-6 pt-16">
            My Projects
          </h1>
          <p className="text-w1 text-xl text-center mb-20">
            Discover the latest projects, tips and user stories insights from
            Solstice.
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
            {allprojectsData.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <ProjectsPageCard
                  date={project.date}
                  category={project.category}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  clientUrl={project.clientUrl}
                  isVisible={project.isVisible}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4 pb-32">
            <p className="text-w1 text-sm">
              <span>Page</span>
              <span> </span>
              <span className="font-semibold">1</span>
              <span> </span>
              <span>of</span>
              <span> </span>
              <span className="font-semibold">10</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="next-prev" href="#">
                Prev
              </a>
              <a className="next-prev" href="#">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
