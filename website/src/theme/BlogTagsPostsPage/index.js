import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {HtmlClassNameProvider, PageMetadata, ThemeClassNames, usePluralForm,} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import TopSpacer from '@site/src/components/TopSpacer';
import Layout from '@theme/Layout';

// Very simple pluralization: probably good enough for now
function useBlogPostsPlural() {
    const {selectMessage} = usePluralForm();
    return (count) =>
        selectMessage(
            count,
            translate(
                {
                    id: 'theme.blog.post.plurals',
                    description:
                        'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: 'One post|{count} posts',
                },
                {count},
            ),
        );
}

function useBlogTagsPostsPageTitle(tag) {
    const blogPostsPlural = useBlogPostsPlural();
    return translate(
        {
            id: 'theme.blog.tagTitle',
            description: 'The title of the page for a blog tag',
            message: '{nPosts} tagged with "{tagName}"',
        },
        {nPosts: blogPostsPlural(tag.count), tagName: tag.label},
    );
}

function BlogTagsPostsPageMetadata({tag}) {
    const title = useBlogTagsPostsPageTitle(tag);
    return (
        <>
            <PageMetadata title={title}/>
            <SearchMetadata tag="blog_tags_posts"/>
        </>
    );
}

function BlogTagsPostsPageContent({tag, items, sidebar, listMetadata}) {
    const title = useBlogTagsPostsPageTitle(tag);
    return (
        <Layout
            title={`Touchlab Blog`}
            description="Our deepest thoughts">
            <div className="preflight-wrapper">
                <TopSpacer/>

                <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <Link href={tag.allTagsPath}>
                        <Translate
                            id="theme.tags.tagsPageLink"
                            description="The label of the link targeting the tag list page">
                            View All Tags
                        </Translate>
                    </Link>
                    <h2 className="mt-8 h2">{title}</h2>
                    <BlogPostItems items={items}/>
                    <BlogListPaginator metadata={listMetadata}/>
                </div>
            </div>
        </Layout>
    );
}

export default function BlogTagsPostsPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogTagPostListPage,
            )}>
            <BlogTagsPostsPageMetadata {...props} />
            <BlogTagsPostsPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
