import HeaderProj from "../components/HeaderProj";
import ProjectsPageCard from "../components/ProjectsPageCard";

const AllProjects = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-p7 pt-40">
        <div className="container px-4 mx-auto">
          <h1 className="text-w1 text-4xl lg:text-6xl font-bold font-angel text-center mb-6 pt-16">
            My Projects
          </h1>
          <p className="text-w1 text-xl text-center font-satoshi mb-20">
            Discover the latest projects, tips and user stories insights from
            Solstice.
          </p>
          <div className="pb-20 mb-20 border-b border-p1">
            <HeaderProj
              date="20 Jul 2023"
              category="Education"
              title="How to Maintain Good Wellbeing While Studying"
              description="Here are some tips on how to maintain good wellbeing while studying."
              imageUrl="/images/about-art-tatoo.png"
            />
          </div>
          <h2 className="text-w1 text-5xl font-bold font-angel mb-12">
            Latest projects
          </h2>

          <div className="flex flex-wrap mb-8 pb-8 border-b border-p1 -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <a href="#">
                <ProjectsPageCard
                  date="8 Jul 2023"
                  category="Tips"
                  title="Make Your Phone Your Best Study Tool"
                  description="How do we make our phone best study tool? Read on to find out more."
                  imageUrl="solstice-assets/images/blog/picture1.png"
                />
              </a>
            </div>
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
              <a
                className="next-prev"
                href="#"
              >
                Prev
              </a>
              <a
                className="next-prev"
                href="#"
              >
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
