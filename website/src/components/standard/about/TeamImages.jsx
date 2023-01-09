import React from 'react';

import TeamMosaic01 from '@site/static/about/team-mosaic-01.jpg';
import TeamMosaic02 from '@site/static/about/team-mosaic-02.jpg';
import TeamMosaic03 from '@site/static/about/team-mosaic-03.jpg';
import TeamMosaic04 from '@site/static/about/team-mosaic-04.jpg';

function TeamImages() {
  return (
    <section className="relative my-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <img src="/about/teamwide.jpg" alt="Team mosaic 01" />

        </div>
      </div>
    </section>
  );
}

export default TeamImages;