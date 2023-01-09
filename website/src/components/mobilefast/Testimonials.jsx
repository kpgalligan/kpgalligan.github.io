import React from 'react';

import TestimonialImage01 from '@site/static/img/testimonial-01.jpg';
import TestimonialImage02 from '@site/static/img/testimonial-02.jpg';
import TestimonialImage03 from '@site/static/img/testimonial-03.jpg';

function Testimonials() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">

                {/* Testimonials */}
                <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

                    <div className="flex flex-col h-full p-8 bg-gray-800" data-aos="fade-up">
                        <h3 className="h3 text-center">1. Porting an app across platforms?</h3>
                        <h4 className="h4 text-gray-400 grow text-center">It's important to your org to have high
                            quality native apps on both platforms to continue growing. Let Touchlab help you do that
                            WITHOUT the challenge of hiring a second (or even third!) development team.
                        </h4>
                        <a className="mx-8 my-4 btn text-indigo-600 bg-indigo-100 hover:bg-white shadow text-xl"
                           href="https://form.typeform.com/to/MJTpmm">Port my app!</a>
                    </div>

                    <div className="flex flex-col h-full p-8 bg-gray-800" data-aos="fade-up">
                        <h3 className="h3 text-center">2. Just finished a big raise?</h3>
                        <h4 className="h4 text-gray-400 grow text-center">In the current environment, there's immediate pressure to show progress towards technical goals. We can quickly execute on the current vision  and be a partner in defining your org's architecture and product roadmap.
                        </h4>
                        <a className="mx-8 my-4 btn text-indigo-600 bg-indigo-100 hover:bg-white shadow text-xl"
                           href="https://form.typeform.com/to/MJTpmm">Build my app!</a>
                    </div>

                    <div className="flex flex-col h-full p-8 bg-gray-800" data-aos="fade-up">
                        <h3 className="h3 text-center">3. Hiring engineers for your team?</h3>
                        <h4 className="h4 text-gray-400 grow text-center">Even in the months it takes to hire your candidates you need to build and ship fast. Our devs seamlessly plug in to help you accelerate your roadmap, and immediately increase team velocity and capacity.
                        </h4>
                        <a className="mx-8 my-4 btn text-indigo-600 bg-indigo-100 hover:bg-white shadow text-xl"
                           href="https://form.typeform.com/to/MJTpmm">Create my team!</a>
                    </div>



                </div>

            </div>
        </section>
    );
}

export default Testimonials;
