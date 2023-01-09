import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import HeroAbout from '@site/src/components/skie/HeroAbout';
import FeaturesBlocks from '@site/src/components/skie/FeaturesBlocks';
import FeaturesZigzag from '@site/src/components/skie/FeaturesZigzag';
import EarlyAccess from '@site/src/components/skie/EarlyAccess';
import StakeholderValue from '@site/src/components/skie/StakeholderValue';
import Overview from '@site/src/components/skie/Overview';
import Automatic from '@site/src/components/skie/Automatic';
// Uncomment for animations
// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Home(): JSX.Element {
// Uncomment for animations
//   useEffect(() => {
//     AOS.init({
//       once: true,
//       disable: 'phone',
//       duration: 350,
//       easing: 'ease-out-sine',
//     });
//   });

  return (
      <Layout>
        <HeroAbout/>
        <Overview/>
        <StakeholderValue/>
        <Automatic/>
        <FeaturesZigzag/>
        <FeaturesBlocks/>
        <EarlyAccess/>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </Layout>
  );
}
