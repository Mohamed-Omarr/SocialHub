import Communication from "./components/Communication";
import Cta from "./components/Cta";
import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import Hero from "./components/Hero";
import SocialFeed from "./components/SocialFeed";

export default function Index() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <DashboardPreview />
        <Features />
        <Communication />
        <SocialFeed />
        <Cta />
      </main>
    </>
  );
}
