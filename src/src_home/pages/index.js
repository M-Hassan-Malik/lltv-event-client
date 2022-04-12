import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ContactForm from "../../src_event/components/ContactForm/index.js";
import Carousel from "../../components/Carousel/Carousel.js";
import BlogPage from "../../views/pages/blogs/blogsPage";
import Pricing from "../../components/Pricing/Cards";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import FAQ from "../../components/FAQ/FAQ";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Carousel org_id={"random"} heading={"Archives"} />
      <Services />
      <InfoSection {...homeObjThree} /> {/* about us */}
      {/* <InfoSection {...homeObjOne} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Pricing hide={true} /> */}
      <BlogPage hide={true} />
      <FAQ hide={true} />
      <ContactForm hide={true} />
      <Footer />
    </>
  );
}

export default Home;
