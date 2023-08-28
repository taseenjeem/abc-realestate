import PageTitle from "../Hooks/PageTitle";
import AboutService from "../components/AboutService";
import AvailableProperties from "../components/AvailableProperties";
import GuideTour from "../components/GuideTour";
import HeroCarousel from "../components/HeroCarousel";
import HighlightedHero from "../components/HighlightedHero";
import IntroHero from "../components/IntroHero";
import Team from "../components/Team";

const LandingPage = () => {
  return (
    <section className="lg:mt-[88px]">
      <PageTitle title="Home" />
      <HeroCarousel />
      <div className="mx-auto max-w-7xl">
        <IntroHero />
        <HighlightedHero />
        <AvailableProperties />
        <GuideTour />
        <Team />
      </div>
      <AboutService />
    </section>
  );
};

export default LandingPage;
