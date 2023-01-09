import React from 'react';

import PageIllustration from './PageIllustration';
import HeroAbout from './HeroAbout';
import TeamImages from './TeamImages';
import Timeline from './Timeline';
import Team from './Team';
import TestimonialsCarousel from './TestimonialsCarousel';
import Career from './Career';
import Clients from './Clients';


function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <HeroAbout />
        <TeamImages />
        <Career />
        <Team />
        <Timeline />
        <Clients />

      </main>


    </div>
  );
}

export default About;