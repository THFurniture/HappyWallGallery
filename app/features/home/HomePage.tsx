import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { ArtistsShowcaseSection } from "./ArtistsShowcaseSection";
import { VisitSection } from "./VisitSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <ArtistsShowcaseSection />
      <VisitSection />
    </>
  );
}
