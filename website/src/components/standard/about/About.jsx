import React from 'react';

import PageIllustration from './PageIllustration';
import HeroAbout from './HeroAbout';
import TeamImages from './TeamImages';
import Timeline from './Timeline';
import Team from './Team';

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
        <Team />
        <Timeline />

      </main>


    </div>
  );
}

export default About;