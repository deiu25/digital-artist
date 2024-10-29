import { Element } from "react-scroll";

const About = () => {
  return (
    <section className="relative lg:bg-about-section pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="about">
        <div className="relative lg:bg-rectangle mx-auto w-[1520px] h-[800px]">
          <div className="relative flex justify-between ml-12 pl-5">
            {/* Stânga: Text și imaginea artistului */}
            <div className="flex flex-col items-start mt-4">
              <h5 className="text-w1 text-[48px] lg:text-[64px] font-normal font-angel leading-tight">
                Tailored Process <br /> will make you <br /> scream, but then{" "}
                <br /> happy!
              </h5>
              <img src="/images/artist.png" alt="artist" />
            </div>

            {/* Center: Two cards */}
            <div className="flex flex-col justify-between space-y-6 ml-10">
              <div className="relative w-[485px] h-[324px] bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <img
                  src="/images/art1.svg"
                  alt="art1"
                  className="w-full h-full object-contain p-8"
                />
                <span className="absolute bottom-10 right-10 text-black-100 text-2xl font-normal font-angel tracking-wider">
                  <span className="text-base align-bot mr-1.5">$</span>2800.00
                </span>
              </div>
              <div className="relative w-[485px] h-[368px] bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <img
                  src="/images/art2.svg"
                  alt="art2"
                  className="w-full h-full object-contain p-8"
                />
                <span className="absolute bottom-10 right-10 text-black-100 text-2xl font-normal font-angel tracking-wider">
                  <span className="text-base align-bot mr-1.5">$</span>1500.00
                </span>
              </div>
            </div>

            {/* Right: Text and button */}
            <div className="flex flex-col text-white rounded-2xl w-[485px] h-[388px] space-y-4 ml-4 relative">
              <div className="relative w-full h-full">
                <img
                  src="/images/about-art-tatoo.png"
                  alt="tattoo"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Gradient overlay */}
                <div className="absolute -bottom-5 w-full h-[135px] bg-gradient-to-t from-[#1e1c17]/90 to-[#1e1c17]/10 rounded-b-2xl"></div>
              </div>
              <h5 className="text-w1 text-[64px] lg:text-[48px] font-normal font-angel leading-tight ml-10">
                Highest rated <br /> Tattoo Club in <br /> California
              </h5>
              <p className="text-white/40 font-medium text-base leading-[27px] p-12">
                Don’t hesitate. No one has ever regretted their tattoos! Contact
                us now, and we’ll help you!
              </p>
              <button className="w-[255px] h-[64px] bg-p1 text-p4 uppercase py-3 rounded-xl text-lg font-bold tracking-widest ml-10">
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
