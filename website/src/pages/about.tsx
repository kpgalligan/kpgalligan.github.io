import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import About from '@site/src/components/standard/about/About';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function Kmmpro(): JSX.Element {

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
          <About/>
        </div>

      </Layout>

  );
}
