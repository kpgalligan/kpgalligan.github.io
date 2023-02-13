import React from 'react';

import HeroImage from '@site/static/home/binkcookies.jpg';

export default function HeroAbout() {
    return (
        <section className="relative">

            {/* Background image */}
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover object-left-top" src={HeroImage} width="1440" height="394" alt="About"/>
                <div className="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true"></div>
            </div>

            {/* Hero content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="h1 mb-4 drop-shadow-lg text-white tl-text">Hello! I'm Kevin.</h1>
                        <h2 className="h2 text-white mb-8 drop-shadow-lg mb-8 tl-text">
                            (Well, that's Binky)
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    );
}