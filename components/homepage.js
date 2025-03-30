"use client";
import React, { Suspense, lazy } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

// Lazy load components
const SpliceElement = lazy(() => import("./splice"));
const Listings = lazy(() => import("./listings"));
const Contactparent = lazy(() => import("./contactParent"));
const Socials = lazy(() => import("./socials"));
const AboutSection = lazy(() => import("./about"));
const Quote = lazy(() => import("./quote"));
const HorizontalBanner = lazy(() => import("./horizontalbanner"));
const FeatureCards = lazy(() => import("./FeatureCards"));
const GridContainer = lazy(() => import("./gridContainer"));
const Banner = lazy(() => import("./banner"));
const Maps = lazy(() => import("./maps"));
const TrafficWidget = lazy(() => import("./TrafficWidget"));

const Loading = () => <div>Loading...</div>;

function Homepage() {
  return (
    <div>
      <Banner />
      <SpliceElement />

      <Suspense fallback={<Loading />}>
        <Quote />
      </Suspense>

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
        <GridContainer />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TrafficWidget />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ElfsightWidget widgetId="b81e4774-e612-450a-9de1-cf7b07881910" />
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
