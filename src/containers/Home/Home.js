import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Certifications from "./Certifications/Certifications";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import NewTopProjects from "./NewTopProjects/NewTopProjects";

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <div className=''>
        <Header></Header>
        <div>
          <div className='bg-brand-1 max-w-screen'>
            <div className='container mx-auto '>
              <Hero></Hero>
            </div>
          </div>
          <div className='mt-52'>
            <Skills></Skills>
          </div>

          <div className='mt-20'>
            {/* <TopProjects></TopProjects> */}
            <NewTopProjects></NewTopProjects>
          </div>
          <div className='mt-32'>
            <Certifications></Certifications>
          </div>
          <div className='mt-32'>
            <Contact></Contact>
          </div>
        </div>
      </div>
      <div className='flex w-full  flex-col'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
