import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {HtmlClassNameProvider, PageMetadata, ThemeClassNames,} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import TopSpacer from '@site/src/components/TopSpacer';
import {BlogPostProvider} from "@docusaurus/theme-common/internal";
import BlogPostItem from '@theme/BlogPostItem';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

function BlogListPageMetadata(props) {
    const {metadata} = props;
    const {
        siteConfig: {title: siteTitle},
    } = useDocusaurusContext();
    const {blogDescription, blogTitle, permalink} = metadata;
    const isBlogOnlyMode = permalink === '/';
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription}/>
            <SearchMetadata tag="blog_posts_list"/>
        </>
    );
}

function BlogListPageContent(props) {
    const {metadata, items, sidebar} = props;

    console.log("items", items)

    const filteredItems = items.filter((item) => {
        return !item.content.frontMatter.draft
    })

    const mainItem = metadata.page === 1 ? filteredItems[0] : null
    const otherItems = metadata.page === 1 ? filteredItems.slice(1) : filteredItems

    return (
        <Layout
            title={`Touchlab Blog`}
            description="Our deepest thoughts">
            <div className="preflight-wrapper">
                <TopSpacer/>
                <TopSpacer/>

                <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">

                    {mainItem &&
                        <BlogPostProvider
                            key={mainItem.content.metadata.permalink}
                            content={mainItem.content}>
                            <BlogPostItem bigView="true">
                                <mainItem.content/>
                            </BlogPostItem>
                        </BlogPostProvider>
                    }

                    <BlogPostItems items={otherItems}/>
                    <BlogListPaginator metadata={metadata}/>
                </div>

            </div>
        </Layout>
    );
}

export default function BlogListPage(props) {
    // useEffect(() => {
    //   AOS.init({
    //     once: true,
    //     disable: 'phone',
    //     duration: 350,
    //     easing: 'ease-out-sine',
    //   });
    // });
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogListPage,
            )}>
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
