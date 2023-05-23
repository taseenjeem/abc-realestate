import img from "../assets/images/Business mission-pana.svg";

const OurMission = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-xl rounded-lg drop-shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Alata" }}>
            Our Mission
          </h1>
          <p className="py-6 lg:leading-relaxed">
            Our mission is to provide world-class real estate services that
            exceed our clients’ expectations. We strive to offer customized
            solutions that meet our clients’ unique needs, whether they are
            looking to buy, sell, or rent a property. We aim to build long-term
            relationships with our clients based on trust, transparency, and
            professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
