import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="hero-section">
      <Element name="hero">
        <div className="flex justify-between items-center mx-auto max-w-7xl">
          <div className="relative z-2">
            <h1 className="hero-title">
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
                  <span className="mr-5 text-p1 text-lg max-md:mr-1">
                    Mon-Fri
                  </span>
                  <span className="text-w1 text-lg">11:00-21:00</span>
                </p>
                <p className="text-[24px] tracking-[-0.36px] leading-[normal] font-satoshi">
                  <span className="mr-5 text-p1 text-lg max-md:mr-1">
                    Sat-Sun
                  </span>
                  <span className="text-w1 text-lg">14:00-20:00</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center max-sm:hidden">
            <div className="relative">
              <img
                src="/images/hero-back-img.svg"
                className="w-full max-w-[600px] h-auto"
                alt="hero background"
              />
            </div>
            <div className="absolute">
              <img
                src="/images/hero-girl.png"
                className="w-full max-w-[700px] h-auto"
                alt="hero girl"
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
