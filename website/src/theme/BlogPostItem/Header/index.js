import React from 'react';
import Link from '@docusaurus/Link';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import {useBlogPost} from "@docusaurus/theme-common/internal";

export default function BlogPostItemHeader() {
    const {metadata, isBlogPostPage} = useBlogPost();
    const {permalink, tags, title, editUrl, hasTruncateMarker} = metadata;
    console.log(tags)
    return (
        <header>
            <h3 className="h4 mb-2">
                <Link itemProp="url" to={permalink} className="hover:text-gray-100 text-gray-200 transition duration-150 ease-in-out">
                    {title}
                </Link>
            </h3>

            <BlogPostItemHeaderInfo/>
            <BlogPostItemHeaderAuthors/>
        </header>
    );
}
