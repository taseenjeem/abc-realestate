import AvailableProperties from "../components/AvailableProperties";
import GuideTour from "../components/GuideTour";
import HeroCarousel from "../components/HeroCarousel";
import HighlightedHero from "../components/HighlightedHero";
import IntroHero from "../components/IntroHero";
import Team from "../components/Team";

const LandingPage = () => {
  return (
    <section className="">
      <HeroCarousel />
      <div className="mx-auto max-w-7xl">
        <IntroHero />
        <HighlightedHero />
        <AvailableProperties />
        <GuideTour />
        <Team />
      </div>
    </section>
  );
};

export default LandingPage;
