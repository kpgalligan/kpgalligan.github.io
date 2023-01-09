import React from 'react';

import HeroImage from '@site/static/componentimg/hero.jpg';


function HeroAbout() {
    return (
        <section className="relative">

            {/* Background image */}
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src={HeroImage} width="1440" height="394" alt="About" />
                <div className="absolute inset-0 bg-violet-900 opacity-75" aria-hidden="true"></div>
            </div>

            {/* Hero content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="h1 mb-4 drop-shadow-lg text-white" data-aos="fade-up">PlasmaUI</h1>
                        <p className="text-xl text-violet-300 mb-8 drop-shadow-lg mb-8" data-aos="fade-up" data-aos-delay="200">Compose-based UI Framework, driving Compose UI on Android and SwiftUI on iOS</p>
                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                            <div data-aos="fade-up" data-aos-delay="400">
                                <a className="btn text-gray-50 dark:text-gray-50 bg-fuchsia-600 hover:bg-fuchsia-700 w-full mb-4 sm:w-auto sm:mb-0 drop-shadow-lg" href="#clientsonly">Request Info</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default HeroAbout;