import { Element } from "react-scroll";
import clsx from "clsx";
import { cardData } from "../constants";
import CardArt from "../components/CardArt";

const About = () => {
  return (
    <section className="md:bg-about-section pt-22 md:pt-40 pb-20">
      <Element name="about">
        <div className="relative flex flex-col md:flex-row justify-center items-center h-auto md:h-screen">
          <div
            className={clsx(
              "absolute w-[600px] h-[70px] bg-p7 rounded-2xl",
              "hidden md:block"
            )}
          ></div>

          <div className="relative w-full mx-auto flex flex-col md:flex-row justify-between px-10 md:px-[10%] z-10 gap-10 md:gap-0">

            <div className="side-cards justify-center">
              <h5 className="text-w1 text-[32px] mt-8 md:text-[40px] lg:text-[44px] font-normal font-angel leading-tight px-5">
                Tailored Process <br /> will make you <br /> scream, but then{" "}
                <br /> happy!
              </h5>
              <div className="relative w-full md:h-[100%] flex justify-center">
                <div className="absolute inset-0 about-sm"></div>
                <img
                  src="/images/artist.png"
                  alt="artist"
                  className="relative object-cover mx-auto w-[70%] max-sm:pt-5 md:pt-8"
                />
              </div>
            </div>

            <div className="flex-1 bg-transparent md:px-6 flex flex-col items-center gap-10 md:gap-[128px]">
              {cardData.map(({ id, imageSrc, price }) => (
                <CardArt key={id} imageSrc={imageSrc} price={price} />
              ))}
            </div>

            <div className="side-cards justify-start p-0 order-3 md:order-none">
              <img
                src="/images/about-art-tatoo.png"
                alt="tattoo"
                className="w-full h-auto object-cover rounded-t-2xl"
              />
              <h5 className="text-w1 md:mt-12 text-[32px] lg:text-[48px] md:text-[64px] font-normal font-angel leading-tight px-10 pt-6">
                Highest rated <br /> Tattoo Club in <br /> California
              </h5>
              <p className="text-white/40 font-medium text-md lg:text-base leading-[24px] md:leading-[27px] px-10 pt-2">
                Don’t hesitate. No one has ever regretted their tattoos! <br />
                Contact us now, and we’ll help you!
              </p>
              <button className="w-[50%] h-[48px] md:h-[54px] mt-5 max-md:mb-5 bg-p1 text-p4 uppercase rounded-xl text-xs sm:text-xxs lg:text-sm font-bold md:tracking-widest ml-10">
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
