import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative lg:bg-hero-section pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="mr-[200px] ml-[200px] max-lg:container max-lg:px-10">
          <div className="relative z-2">
            <h1 className="text-w1 text-[80px] font-normal font-angel pb-10 lg:pb-10 leading-[1] max-lg:leading-[1.1]">
              Body <br /> paintings <br /> that{" "}
              <span className="text-p1">Defies</span>
              <br />
              Your Soul
            </h1>
            <LinkScroll to="about" offset={-100} spy smooth>
              <Button icon="/images/book-a-visit.svg">book a visit</Button>
            </LinkScroll>

            <div className="pt-12 gap-5 flex">
              <div className="w-[52px] h-[52px] rounded-[8px] bg-p1 flex items-center justify-center">
                <img src="/images/watch.svg" alt="watch" />
              </div>
              <div>
                <p className="text-[24px] tracking-[-0.36px] leading-[normal] font-satoshi">
                  <span className="mr-5 text-p1 text-lg">Mon-Fri</span>
                  <span className="text-w1 text-lg">11:00-21:00</span>
                </p>
                <p className="text-[24px] tracking-[-0.36px] leading-[normal] font-satoshi">
                  <span className="mr-5 text-p1 text-lg">Sat-Sun</span>
                  <span className="text-w1 text-lg">14:00-20:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-52 left-10/20">
            <img
              src="/images/hero-back-img.svg"
              className="size-600 max-lg:hidden"
              alt="hero"
            />
          </div>
          <div className="absolute top-52 left-10/20">
            <img
              src="/images/hero-girl.png"
              className="size-700 max-lg:hidden"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
