import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroAbout from '@site/src/components/HeroAbout';
import Summary from '@site/src/components/Summary';
import Credits from '@site/src/components/Credits';
import TopSpacer from '@site/src/components/TopSpacer';
import EightyTwenty from '@site/src/components/EightyTwenty';
import AsNative from '@site/src/components/AsNative';
import CodeSamples from '@site/src/components/CodeSamples';
import OnlyClients from '@site/src/components/OnlyClients';
import NotifyAlpha from '@site/src/components/NotifyAlpha';
import TitleDetail from '@site/src/components/standard/TitleDetail';
import Testimonials from '@site/src/components/standard/Testimonials';
import Clients from '@site/src/components/standard/about/Clients';
import Transition from '@site/src/utils/Transition';
import TabsImage01 from '@site/static/img/tabs-image-01.jpg';
import HeroImage01 from '@site/static/img/hero-image-01.jpg';

// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: 'phone',
  //     duration: 350,
  //     easing: 'ease-out-sine',
  //   });
  // });

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const checkMark = (color) => {
    return (
        <svg className={`w-3 h-3 fill-current text-${color}-500 mr-2 shrink-0" viewBox="0 0 12 12`} xmlns="http://www.w3.org/2000/svg">
          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
        </svg>
    )
  }

  function TabButton({title, tab, tabIndex, children}) {
    return (<button
        className={`flex items-center font-medium py-2 px-2 m-1 md:px-4 md:m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== tabIndex && 'opacity-50'}`}
        onClick={() => setTab(tabIndex)}
    >
      {children}
      <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-150 ease-in-out text-sm font-bold md:text-lg">{title}</span>
    </button>)
  }
  function TabBody({tab, tabIndex, children, img, flipSides}) {
    return (<Transition
        show={tab === tabIndex}
        appear={true}
        className="w-full"
        enter="transition ease-in-out duration-500 transform order-first"
        enterStart="opacity-0 scale-98"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-300 transform absolute"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-98"
    >
      <article className="relative max-w-md mx-auto md:max-w-none">
        <figure className={`md:absolute md:inset-y-0 md:w-1/2 m-0 ${flipSides ? 'md:left-0' : 'md:right-0'}`}>
          <img className="w-full h-full object-cover" src={img} width="516" height="387" alt="Tabs 01" />
        </figure>
        <div className={`relative bg-gray-800 py-8 px-6 md:pr-16 md:max-w-lg lg:max-w-xl${flipSides ? ' md:ml-auto' :''}`}>
          {children}
        </div>
      </article>
    </Transition>)
  }
  return (

        <Layout
            title={`Touchlab`}
            description="">

          <div className="preflight-wrapper">

          <HeroAbout/>
            <TopSpacer/>

            <TitleDetail
              title="Touchlab is the industry leader in Kotlin Multiplatform development"
              detail="We can build your app with next-generation cross platform technology, or help your mobile engineering team ship features faster, increase efficiency, and future-proof your products and processes."/>

            <TitleDetail
              title="Touchlab products and services"
              detail="How can we help your team succeed with Kotlin today?"/>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

              {/* Tabs buttons */}
              <div className="flex flex-wrap justify-center -m-2">
                <TabButton tab={tab} tabIndex={1} title="Hands On Help">
                  {checkMark("cyan")}
                </TabButton>
                <TabButton tab={tab} tabIndex={2} title="Dev/Org Support">
                  {checkMark("cyan")}
                </TabButton>
                <TabButton tab={tab} tabIndex={3} title="App/Product Development">
                  {checkMark("cyan")}
                </TabButton>
              </div>

              {/* Tabs items */}
              <div className="relative flex flex-col mt-8 mb-16" ref={tabs}>
                <TabBody tab={tab} tabIndex={1} img={TabsImage01} flipSides={false}>
                  <h3 className="h3 mb-2">Hands on help</h3>
                  <p className="h4 text-cyan-400">
                    Mobile Staff Augmentation
                  </p>
                  <p className="text-lg text-gray-400">
                    Our team of experts works directly with your team, accelerating your KMM development efforts.
                  </p>
                  <p className="h4 text-cyan-400 mt-4">
                    Expert Advisory & Consultation
                  </p>
                  <p className="text-lg text-gray-400">
                    Our experts review your code and architecture, and develops a plan for your success.
                  </p>
                  <a className="btn-sm text-white bg-cyan-600 hover:bg-cyan-700 mt-6" href="#0">
                    <span className="text-xl">Contact us</span>
                    <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </TabBody>
                <TabBody tab={tab} tabIndex={2} img={HeroImage01} flipSides={true}>
                  <h4 className="h4 mb-2">Organizational &amp; Developer Support</h4>
                  <p className="h4 text-cyan-400">
                    Navigator Developer Portal
                  </p>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  </p>
                  <p className="h4 text-cyan-400">
                    KMM Ready Assessment
                  </p>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="h4 text-cyan-400 mt-4">
                    KMM Transformation Roadmapping
                  </p>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a className="btn-sm text-white bg-cyan-600 hover:bg-cyan-700 mt-6" href="#0">
                    <span className="text-xl">Contact us</span>
                    <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </TabBody>

                <TabBody tab={tab} tabIndex={3} img={HeroImage01} flipSides={false}>
                  <h4 className="h4 mb-2">App/Product Development</h4>
                  <p className="h4 text-cyan-400">
                    Mobile App / Feature Development
                  </p>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="h4 text-cyan-400 mt-4">
                    Mobile App Porting
                  </p>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a className="btn-sm text-white bg-cyan-600 hover:bg-cyan-700 mt-6" href="#0">
                    <span className="text-xl">Contact us</span>
                    <svg className="w-3 h-3 fill-current text-white shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </TabBody>

              </div>
            </div>

          </div>
          <Testimonials/>
        <Clients/>

        </Layout>

  );
}
