import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import TopSpacer from '@site/src/components/TopSpacer';

export default function MDXPage(props) {
  const {content: MDXPageContent} = props;
  const {
    metadata: {title, description, frontMatter},
  } = MDXPageContent;
  const {wrapperClassName, hide_table_of_contents: hideTableOfContents} =
    frontMatter;
  return (
    <HtmlClassNameProvider
      className={clsx(
        wrapperClassName ?? ThemeClassNames.wrapper.mdxPages,
        ThemeClassNames.page.mdxPage,
      )}>
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className="container container--fluid margin-vert--lg">
          <div className="preflight-wrapper">
            <TopSpacer/>
            <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 relative">
              <article>
                <MDXContent>
                  <MDXPageContent />
                </MDXContent>
              </article>
            </div>
          </div>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
