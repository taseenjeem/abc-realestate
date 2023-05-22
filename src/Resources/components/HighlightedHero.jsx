import image from "../assets/images/13.webp";
import "../CSS/HighligtedHero.css";

const HighlightedHero = () => {
  return (
    <section className="min-h-screen mb-96">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: `url(${image})`,
          height: 500,
        }}
      />
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div
            className="block rounded-lg shadow-2xl px-6 py-12 md:py-16 md:px-12"
            style={{
              marginTop: "-170px",
              background: "hsla(0, 0%, 100%, 0.7)",
              backdropFilter: "blur(30px)",
            }}
          >
            <h1
              className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 loose-spacing "
              style={{ fontFamily: "Alata" }}
            >
              Highlighted Points of the
              <br />
              <span className="text-primary">Al Bahia</span> Project
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedHero;
