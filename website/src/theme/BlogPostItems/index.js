import React from 'react';
import {BlogPostProvider} from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  return (
    <>
      <div className="max-w-6xl mx-auto md:max-w-none">

        {/*  Section title */}
        <h4 className="h4 pb-6 mb-10 border-b border-gray-700" ></h4>

        {/*  Articles container */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-6 items-start">
      {items.map(({content: BlogPostContent}) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}>
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
        </div>
      </div>
    </>
  );
}
