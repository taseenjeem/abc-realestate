import PageTitle from "../Hooks/PageTitle";
import OurMission from "../components/OurMission";
import OurServices from "../components/OurServices";
import OurVision from "../components/OurVision";
import WhoWeAre from "../components/WhoWeAre";

const About = () => {
  return (
    <div className="lg:mt-[88px]">
      <PageTitle title="About Us" />
      <WhoWeAre />
      <OurMission />
      <OurVision />
      <OurServices />
    </div>
  );
};

export default About;
