import { MdAddCall } from "react-icons/md";

const Team = () => {
  return (
    <section className="px-4 md:px-0">
      <h1
        className="text-center lg:text-7xl text-4xl font-semibold mt-32 mb-10 text-gray-800"
        style={{ fontFamily: "Alata" }}
      >
        Our Team of <span className="text-primary">Contacts</span>
      </h1>

      <div className="flex md:flex-row flex-col gap-16 md:gap-0 justify-around my-24">
        <div className="max-w-md w-full p-7 bg-white border shadow-2xl rounded">
          <h2
            className="text-center text-3xl font-semibold"
            style={{ fontFamily: "Alata" }}
          >
            Ala Banojir Chisti
          </h2>
          <p className="text-center mt-2">Chairman & CEO</p>
          <div className="px-8">
            <div className="divider"></div>{" "}
          </div>
          <div className="text-center mt-2">
            <span
              className="uppercase text-lg font-bold mr-2"
              style={{ fontFamily: "Alata" }}
            >
              <MdAddCall className="inline text-xl relative mr-2 bottom-[2px]" />
              Contact :
            </span>
            <a className="link-hover" href="tel:+971555147420">
              +971 55 514 7420
            </a>
          </div>
        </div>

        <div className="max-w-md w-full p-7 bg-white border shadow-2xl rounded">
          <h2
            className="text-center text-3xl font-semibold"
            style={{ fontFamily: "Alata" }}
          >
            Mohammad A.K.A
          </h2>
          <p className="text-center mt-2">
            Director Banking, Finance & Marketing
          </p>
          <div className="px-8">
            <div className="divider"></div>{" "}
          </div>
          <div className="text-center mt-2">
            <span
              className="uppercase text-lg font-bold mr-2"
              style={{ fontFamily: "Alata" }}
            >
              <MdAddCall className="inline text-xl relative mr-2 bottom-[2px]" />
              Contact :
            </span>
            <a className="link-hover" href="tel:+8801971456743">
              +8801971456743
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
