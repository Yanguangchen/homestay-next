"use client";
import React, { Suspense, lazy } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const AboutSection = lazy(() => import("./about"));
const HorizontalBanner = lazy(() => import("./horizontalbanner"));
const FeatureCards = lazy(() => import("./FeatureCards"));
const Banner = lazy(() => import("./banner"));
const Maps = lazy(() => import("./maps"));
const TrafficWidget = lazy(() => import("./TrafficWidget"));

const Loading = () => <div>Loading...</div>;

function Homepage() {
  return (
    <div>
      <Banner />
      <SpliceElement />

      <div className="motto-container">
        <h2 className="motto-text">Learning through experience</h2>
      </div>

      <div className="vision-container">
        <div className="vision-card">
          <h3 className="vision-header">Our Vision</h3>
          <p className="vision-text">Transforming through cultural exchange</p>
          <p className="vision-text">To sustain culture in the era of changes and moderation</p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <FeatureCards />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <HorizontalBanner />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TrafficWidget />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <ElfsightWidget widgetId="b81e4774-e612-450a-9de1-cf7b07881910" />
        </div>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Listings />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contactparent />
      </Suspense>

      
      <Suspense fallback={<Loading />}>
        <Maps />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Socials />
      </Suspense>

    </div>
  );
}

export default Homepage;
