import HeroCarousel from "../components/HeroCarousel";
import IntroHero from "../components/IntroHero";

const LandingPage = () => {
  return (
    <section className="">
      <HeroCarousel />
      <div className="mx-auto max-w-7xl">
        <IntroHero />
      </div>
    </section>
  );
};

export default LandingPage;
