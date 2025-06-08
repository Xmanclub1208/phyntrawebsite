import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ServerLocations from "../components/home/ServerLocations";
import FAQ from "../components/FAQ";
import Testimonials from "../components/home/Testimonials";
import { Helmet } from "react-helmet";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home | Phyntra Hosting</title>
      </Helmet>
      <Hero />
      <Features />
      <ServerLocations />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default HomePage;
