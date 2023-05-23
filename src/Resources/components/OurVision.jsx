import img from "../assets/images/Business vision-pana.svg";

const OurVision = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-xl rounded-lg drop-shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Alata" }}>
            Our Vision
          </h1>
          <p className="py-6 lg:leading-relaxed">
            Our vision is to be the leading real estate company in Ajman by
            providing exceptional services and innovative solutions to our
            clients. We aspire to be recognized for our commitment to
            excellence, integrity, and professionalism in all our dealings. Our
            goal is to build long-lasting relationships with our clients by
            earning their trust through our dedication to their needs and
            satisfaction. We aspire to expand our services and establish a
            strong presence in the UAE’s real estate market, known for our
            integrity, quality, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
