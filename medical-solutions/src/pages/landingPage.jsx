import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { WhyVaccinate } from "../components/whyVaccinate";
import { Reasons } from "../components/reasons";
import { Preparation } from "../components/preparation";
import { Emergency } from "../components/emergency";
import { Footer } from "../components/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* logo section - yet to implement*/}
      <WhyVaccinate />
      <Reasons />
      <Preparation />
      <Emergency />
      <Footer />
    </>
  );
}
