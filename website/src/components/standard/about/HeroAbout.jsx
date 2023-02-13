import React from 'react';

function HeroAbout() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0">
              <img className="w-full h-full object-cover" src="/about/binksleep.jpg" alt="About" />
        <div className="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true"></div>
      </div>

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4" data-aos="fade-up">The Galligan Fam</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">The NYC branch of Galligans, anyway</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroAbout;