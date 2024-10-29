import { Element } from "react-scroll";
import { partnersData } from "../constants";

const Partners = () => {
  return (
    <section className="relative lg:z-10 lg:-mt-13">
      <Element name="partners">
        <div className="grid grid-cols-1 max-xs:grid-cols-2 xs:grid-cols-2 md:flex flex-wrap justify-center items-center p-10 bg-[#2a272280] gap-y-6 lg:space-x-130">
          {partnersData.map((partner, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 w-full xs:w-auto md:w-1/3 lg:w-auto justify-center lg:justify-start"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-md:h-[32px]"
              />
              <p className="text-center lg:text-left max-md:text-sm">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </Element>
    </section>
  );
};

export default Partners;
