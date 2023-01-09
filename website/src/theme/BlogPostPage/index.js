import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import Layout from '@theme/Layout';
import BlogLayout from '@theme/BlogLayout';
import TopSpacer from '@site/src/components/TopSpacer';
function BlogPostPageContent({sidebar, children}) {
    const {metadata, toc} = useBlogPost();
    const {nextItem, prevItem, frontMatter} = metadata;
    const {
        hide_table_of_contents: hideTableOfContents,
        toc_min_heading_level: tocMinHeadingLevel,
        toc_max_heading_level: tocMaxHeadingLevel,
    } = frontMatter;
    return (
        <Layout
            title={`Touchlab Blog`}
            description="Our deepest thoughts">
            <div className="preflight-wrapper">
                <TopSpacer/>

                <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">

                    <BlogPostItem>{children}</BlogPostItem>

                    {(nextItem || prevItem) && (
                        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem}/>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default function BlogPostPage(props) {
    const BlogPostContent = props.content;
    return (
        <BlogPostProvider content={props.content} isBlogPostPage>
            <HtmlClassNameProvider
                className={clsx(
                    ThemeClassNames.wrapper.blogPages,
                    ThemeClassNames.page.blogPostPage,
                )}>
                <BlogPostPageMetadata/>
                <BlogPostPageContent sidebar={props.sidebar}>
                    <BlogPostContent/>
                </BlogPostPageContent>
            </HtmlClassNameProvider>
        </BlogPostProvider>
    );
}
