import { Element } from "react-scroll";

const About = () => {
  return (
    <section className="relative sm:bg-about-section pt-40 pb-40">
      <Element name="about">
        <div className="relative bg-rectangle mx-auto max-w-screen-2xl h-auto sm:h-[800px]">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-8">
            {/* Stânga: Text și imaginea artistului */}
            <div className="flex flex-col items-center">
              <h5 className="text-w1 text-[32px] sm:text-[40px] lg:text-[64px] font-normal font-angel leading-tight pl-6 sm:pl-10">
                Tailored Process <br /> will make you <br /> scream, but then{" "}
                <br /> happy!
              </h5>
              <img src="/images/artist.png" alt="artist" className="w-[80%] max-w-[300px] sm:max-w-none sm:h-[60%]" />
            </div>

            {/* Center: Two cards */}
            <div className="flex flex-col items-center gap-10 sm:gap-28 space-y-8 sm:space-y-0">
              <div className="relative w-[150%] max-w-[485px] h-[260px] sm:h-[324px] bg-white rounded-2xl shadow-lg ml-0 sm:ml-16">
                <img
                  src="/images/art1.svg"
                  alt="art1"
                  className="w-full h-full object-contain p-6 sm:p-8"
                />
                <span className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 text-black-100 text-xl sm:text-2xl font-normal font-angel tracking-wider">
                  <span className="text-base align-bot mr-1.5">$</span>2800.00
                </span>
              </div>
              <div className="relative w-[150%] max-w-[485px] h-[280px] sm:h-[368px] bg-white rounded-2xl shadow-lg ml-0 sm:ml-16">
                <img
                  src="/images/art2.svg"
                  alt="art2"
                  className="w-full h-full object-contain p-6 sm:p-8"
                />
                <span className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 text-black-100 text-xl sm:text-2xl font-normal font-angel tracking-wider">
                  <span className="text-base align-bot mr-1.5">$</span>1500.00
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col text-white rounded-sm w-[80%] max-w-[490px] sm:w-[490px] h-auto sm:h-[388px] space-y-4 relative">
              <div className="relative w-full h-[200px] sm:h-full">
                <img
                  src="/images/about-art-tatoo.png"
                  alt="tattoo"
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute -bottom-2 sm:-bottom-5 w-full h-[80px] sm:h-[135px] bg-gradient-to-t from-[#1e1c17]/90 to-[#1e1c17]/15"></div>
              </div>
              <h5 className="text-w1 text-[32px] lg:text-[48px] sm:text-[64px] font-normal font-angel leading-tight mx-4 lg:ml-10 text-center sm:text-left">
                Highest rated <br /> Tattoo Club in <br /> California
              </h5>
              <p className="text-white/40 font-medium text-sm lg:text-base leading-[24px] sm:leading-[27px] p-4 lg:p-12 text-center sm:text-left">
                Don’t hesitate. No one has ever regretted their tattoos! Contact
                us now, and we’ll help you!
              </p>
              <button className="w-[90%] max-w-[255px] sm:w-[255px] h-[48px] sm:h-[64px] bg-p1 text-p4 uppercase py-2 sm:py-3 rounded-xl text-md lg:text-lg font-bold tracking-widest mx-auto sm:ml-10">
                contact us now
              </button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
