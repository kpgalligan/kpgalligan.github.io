import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroAbout from '@site/src/components/lui/HeroAbout';
import Summary from '@site/src/components/Summary';
import Credits from '@site/src/components/Credits';
import Stats from '@site/src/components/Stats';
import FeaturesBlocks from '@site/src/components/FeaturesBlocks';
import FeaturesZigzag from '@site/src/components/FeaturesZigzag';
import Newsletter from '@site/src/components/Newsletter';
import TopSpacer from '@site/src/components/TopSpacer';
import EightyTwenty from '@site/src/components/EightyTwenty';
import AsNative from '@site/src/components/AsNative';
import CodeSamples from '@site/src/components/CodeSamples';
import OnlyClients from '@site/src/components/OnlyClients';
import NotifyAlpha from '@site/src/components/NotifyAlpha';
import NewsletterDoc from '@site/src/components/NewsletterDoc';
import AllOrNothing from '@site/src/components/AllOrNothing';
// import 'aos/dist/aos.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  /*useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 350,
      easing: 'ease-out-sine',
    });
  });*/

  return (

      <Layout
          title={`PlasmaUI`}
          description="Compose-based UI Framework, driving Compose UI on Android and SwiftUI on iOS">
        <div className="preflight-wrapper">

          <HeroAbout/>
          <TopSpacer/>

          <Summary/>
          <EightyTwenty/>
          <AsNative/>
          <CodeSamples/>
          <OnlyClients/>
          <NotifyAlpha/>
          <Credits/>
        </div>

      </Layout>

  );
}
