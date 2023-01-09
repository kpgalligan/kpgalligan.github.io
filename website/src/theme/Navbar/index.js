import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import Header from '@site/src/components/standard/Header';
export default function Navbar() {
  return (
      <div className="preflight-wrapper">
        <Header />
      </div>
    // <NavbarLayout>
    //     <div className="preflight-wrapper">
    //         <Header />
    //     </div>
    // </NavbarLayout>
  );
}
