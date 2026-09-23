"use client";
import React, { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Banner from "./banner";
import HeroSection from "./splice";

const ElfsightWidget = dynamic(
  () => import("react-elfsight-widget").then((mod) => mod.ElfsightWidget),
  { ssr: false }
);

// Lazy load below-the-fold sections
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const ProgramsSection = lazy(() => import("./about"));
const SchoolRoster = lazy(() => import("./schools"));
const HorizontalBanner = lazy(() => import("./horizontalbanner"));
const FeatureCards = lazy(() => import("./FeatureCards"));
const Maps = lazy(() => import("./maps"));
const TrafficWidget = lazy(() => import("./TrafficWidget"));

const Loading = () => <div style={{ minHeight: 200 }} aria-busy="true" />;

function Homepage() {
  return (
    <div>
      {/* The two arrival notices stay first on the page by request */}
      <Banner />
      <HeroSection />

      <section className="section statement">
        <div className="wrap statement-grid">
          <h2 className="motto-text" data-reveal>
            Learning through <em>experience.</em>
          </h2>
          <div className="vision-card" data-reveal style={{ "--reveal-delay": "0.15s" }}>
            <h3 className="vision-header">Our vision</h3>
            <p className="vision-text">Transforming through cultural exchange.</p>
            <p className="vision-text">
              To sustain culture in an era of change and moderation, one host
              family, one classroom and one friendship at a time.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ProgramsSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <HorizontalBanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <SchoolRoster />
      </Suspense>

      <section className="section">
        <div className="wrap">
          <div data-reveal style={{ marginBottom: 32 }}>
            <p className="eyebrow">Community</p>
            <h2 className="section-title">Stories from people who&rsquo;ve stayed.</h2>
          </div>
          <ElfsightWidget widgetId="b81e4774-e612-450a-9de1-cf7b07881910" />
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <Listings showNotices={false} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Maps />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TrafficWidget />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Socials />
      </Suspense>
    </div>
  );
}

export default Homepage;
