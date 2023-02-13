import React, {useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeroAbout from '@site/src/components/HeroAbout';
import TopSpacer from '@site/src/components/TopSpacer';
import TitleDetail from '@site/src/components/standard/TitleDetail';
import Transition from '@site/src/utils/Transition';

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
        <svg className={`w-3 h-3 fill-current text-${color}-500 mr-2 shrink-0" viewBox="0 0 12 12`}
             xmlns="http://www.w3.org/2000/svg">
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
      <span
          className="text-gray-300 group-hover:text-gray-200 transition-colors duration-150 ease-in-out text-sm font-bold md:text-lg">{title}</span>
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
          <img className="w-full h-full object-cover" src={img} width="516" height="387" alt="Tabs 01"/>
        </figure>
        <div
            className={`relative bg-gray-800 py-8 px-6 md:pr-16 md:max-w-lg lg:max-w-xl${flipSides ? ' md:ml-auto' : ''}`}>
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
        </div>
      </Layout>
  );
}
