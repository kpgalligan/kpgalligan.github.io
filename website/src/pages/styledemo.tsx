import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/kmmpro/Hero';
import TopSpacer from '../components/TopSpacer';
import TitleDetail from '../components/standard/TitleDetail';
// import 'aos/dist/aos.css';

export default function Styledemo(): JSX.Element {

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
          title={`KMM Pro`}
          description="">
        <div className="preflight-wrapper">

          <Hero/>
          <TopSpacer/>
          <TitleDetail
              title="This is a big important section"
              detail="There's a whole lot of cool stuff that we should talk about, and this is a place to drill down into it a bit. It'll wrap eventually, of course."
          />

        </div>

      </Layout>

  );
}
