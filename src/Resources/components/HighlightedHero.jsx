import image from "../assets/images/13.webp";
import "../CSS/HighligtedHero.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TiPointOfInterestOutline } from "react-icons/ti";

const HighlightedHero = () => {
  return (
    <section className="min-h-screen">
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
              className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 loose-spacing"
              style={{ fontFamily: "Alata" }}
            >
              Highlighted Points of the
              <br />
              <span className="text-primary">Al Bahia</span> Project
            </h1>
          </div>
        </div>
      </div>

      <div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              The land has a complete infrastructure, including streets,
              asphalt, electricity, water, etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              Building with a system of separate villas (permit: ground + 2).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>An area of 160, 264, 274, and 284 square meters.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              Purchase directly from the developer, without commission, without
              mediation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              Freehold for all Nationalities, Tax-Free, No Commission. Green
              spaces are available.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              With the best competitive price never offered before in Ajman.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>Adjacent to a fully occupied Residential community in Ajman.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>Easy access to Sheikh Mohammed Bin Zayed Road.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(75, 107, 251)" }}
            iconStyle={{ background: "rgb(75, 107, 251)", color: "#fff" }}
            icon={<TiPointOfInterestOutline />}
          >
            <p>
              All services (streets, asphalt, electricity, water, etc.) are
              available
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default HighlightedHero;
