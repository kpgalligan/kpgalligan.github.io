import React from 'react';
import Screens from '@site/static/componentimg/health8020.png';
import AntiSocial from '@site/static/componentimg/flutterchannels.png';
import PlatformRisk from '@site/static/componentimg/reactnative.png';

export default function EightyTwenty() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
                <div className="pt-12 mt:pb-20 border-t border-gray-800 max-w-4xl mx-auto text-center">
                    <h2 className="h2 mb-8">Why another UI framework?</h2>
                </div>
                <div className="grid gap-20">

                    {/* 1st item */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                             data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 px-4">
                                <div
                                    className="font-architects-daughter text-xl text-indigo-600 dark:text-indigo-300 mb-2">
                                    All pixels aren't equal
                                </div>
                                <h3 className="h3 mb-3">Most apps are 80/20</h3>
                                <p className="text-xl text-gray-700 dark:text-gray-400 mb-4">Apps have a few core
                                    screens, then many others your users rarely interact with (Settings, etc).
                                    Most parts of the app UI are relatively simple, with the occasional complex
                                    interaction, visual display, or platform-specific component.
                                    The vast majority of your user's time is spent on a relatively small part of your
                                    developers' effort.</p>

                            </div>
                        </div>
                        {/* Image */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                            data-aos="fade-up">
                            <img className="max-w-full mx-auto md:max-w-none h-auto" src={Screens} width="540"
                                 alt="Features 01"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
                <div className="grid gap-20">

                    {/* 1st item */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center md:rtl">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:rtl md:order-last"
                             data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 px-4">
                                <div
                                    className="font-architects-daughter text-xl text-indigo-600 dark:text-indigo-300 mb-2">
                                    Doesn't play well with others
                                </div>
                                <h3 className="h3 mb-3">Cross-platform UI Frameworks are anti-social</h3>
                                <p className="text-xl text-gray-700 dark:text-gray-400 mb-4">They are designed to be "All or Nothing" and only grudgingly cooperate with the native platform.
                                    Most significant native apps, using any development framework, will want the flexibility to be able to talk to the host platform. While they all provide
                                    some mechanism to support this, "possible" and "core use case" are very different things. Not having this capability means picking a cross platform framework
                                    is, as we like to say, a (capital-b) Big Decision. Big decisions are risky.
                                </p>

                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                            data-aos="fade-up">
                            <img className="max-w-full mx-auto md:max-w-none h-auto" src={AntiSocial} width="540"
                                 alt="Features 01"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
                <div className="grid gap-20">

                    {/* 1st item */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center md:rtl">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                             data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 px-4">
                                <div
                                    className="font-architects-daughter text-xl text-indigo-600 dark:text-indigo-300 mb-2">
                                    Big decisions are bad
                                </div>
                                <h3 className="h3 mb-3">Platform risk is serious</h3>
                                <p className="text-xl text-gray-700 dark:text-gray-400 mb-4">
                                    A cross platform framework that doesn't interop well means you're betting that it'll all work out in the end.
                                    2 fully native apps, while a lot more work, is the lowest platform risk. A cross platform framework may present a number of problems
                                    well into a project's lifetime: bad ux, performance, missing components, broken updates, support, hiring, retention, etc.
                                    Sometimes the app simply isn't "cutting it". We've had a number of potential clients ask us to "rescue" a cross platform project, and
                                    they usually know the answer before we tell them. You'll have to start over.
                                    </p>

                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                            data-aos="fade-up">
                            <img className="max-w-full mx-auto md:max-w-none h-auto" src={PlatformRisk} width="540"
                                 alt="Features 01"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
