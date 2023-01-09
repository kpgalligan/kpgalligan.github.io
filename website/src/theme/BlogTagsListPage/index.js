import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, PageMetadata, ThemeClassNames, translateTagsPageTitle,} from '@docusaurus/theme-common';
import TagsListByLetter from '@theme/TagsListByLetter';
import SearchMetadata from '@theme/SearchMetadata';
import Layout from '@theme/Layout';
import TopSpacer from '@site/src/components/TopSpacer';

export default function BlogTagsListPage({tags, sidebar}) {
    const title = translateTagsPageTitle();
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogTagsListPage,
            )}>
            <PageMetadata title={title}/>
            <SearchMetadata tag="blog_tags_list"/>
            <Layout
                title={`Touchlab Blog`}
                description="Our deepest thoughts">
                <div className="preflight-wrapper">
                    <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">
                        <TopSpacer/>
                        <TopSpacer/>
                        <h1>{title}</h1>
                        <TagsListByLetter tags={tags}/>
                    </div>
                </div>
            </Layout>
        </HtmlClassNameProvider>
    );
}
