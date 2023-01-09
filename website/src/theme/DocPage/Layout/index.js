import React, {useState} from 'react';
import {useDocsSidebar} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import DocPageLayoutMain from '@theme/DocPage/Layout/Main';
import TopSpacer from '@site/src/components/TopSpacer';
import styles from './styles.module.css';

export default function DocPageLayout({children}) {
    const sidebar = useDocsSidebar();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
    return (

            <Layout title={`Touchlab Blog`}
                    description="Our deepest thoughts">
                <div className="preflight-wrapper">
                    <TopSpacer/>

                    <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">

                        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>
                            {children}
                        </DocPageLayoutMain>
                    </div>
                </div>
            </Layout>
            );
            }
