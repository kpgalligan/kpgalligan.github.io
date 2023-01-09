import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '../components/kmmpro/Hero';
import TitleDetail from '../components/standard/TitleDetail';
import Clients from '../components/mobilefast/Clients';
import Testimonials from '../components/mobilefast/Testimonials';
import Onboarding from '../components/kmmpro/Onboarding';
import Toolbox from '../components/kmmpro/Toolbox';
import ContactPartnerTeam from '../components/kmmpro/ContactPartnerTeam';
import TopSpacer from '../components/TopSpacer';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Kmmpro(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: 'phone',
  //     duration: 350,
  //     easing: 'ease-out-sine',
  //   });
  // });

  return (

        <Layout
            title={`KMM Pro`}
            description="">
          <div className="preflight-wrapper">


            <TopSpacer/>
            <TopSpacer/>

            <section>
              <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center pb-8 md:pb-12">
                  <h1 className="h1 mb-4">Get To Market Fast, Build Mobile Right</h1>
                  <div className="text-3xl text-gray-700 dark:text-gray-400 font-bold">You need to release an iOS and Android app or feature and velocity is critical. With over a decade of experience, here are 3 ways Touchlab can help.</div>
                </div>
              </div>
            </section>

            <Clients/>
            <Testimonials/>
          </div>

        </Layout>

  );
}
