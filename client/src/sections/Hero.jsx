import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-481 max-lg:max-w-327">
              <h1 className="text-w1 text-[80px] font-normal font-angel max-lg:px-6 pb-10 lg:pb-10 leading-tight">
                Body <br /> paintings <br /> that{" "}
                <span className="text-p1">Defies</span>
                <br />
                Your Soul
              </h1>
              <LinkScroll to="about" offset={-100} spy smooth>
                <Button icon="/images/book-a-visit.svg">book a visit</Button>
              </LinkScroll>
          </div>

          <div className="absolute top-52 left-2/5">
            <img
            src="/images/hero-back-img.svg"
            className="size-600 max-lg:hidden"
            alt="hero"
             />
          </div>
          <div className="absolute top-52 left-2/5">
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
