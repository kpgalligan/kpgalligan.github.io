import React from 'react';

import SmileBink from '@site/static/img/smile-bink.jpg';
import FamBoat from '@site/static/img/fam-boat.jpg';
import BinkBday from '@site/static/img/bink-bday.jpg';
import BinkShoes from '@site/static/img/bink-shoes.jpg';

function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="relative mx-auto h-auto" style={{ width: '78.13%', maxWidth: '600px' }} data-aos="fade-down" data-aos-delay="100">
              <img src={FamBoat} alt="Kevin and Natalie on a boat" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '60%', width: '41.67%', maxWidth: '320px' }} data-aos="fade-right">
              <img src={SmileBink} alt="Biny and Natalie" />
            </figure>

            <figure className="absolute h-auto" style={{ top: '50%', right: '0', width: '42.97%', maxWidth: '330px'}} data-aos="fade-left" data-aos-delay="200">
              <img src={BinkBday} alt="Binky's Birthday" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '10%', left: '0%', width: '33.98%', maxWidth: '261px' }} data-aos="fade-up" data-aos-delay="300">
              <img src={BinkShoes} alt="Binky's shoe collection" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamImages;