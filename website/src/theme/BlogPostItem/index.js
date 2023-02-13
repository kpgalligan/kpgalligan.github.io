import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import BlogTag from '@site/src/components/standard/blog/BlogTag';

// apply a bottom margin in list view
function useContainerClassName() {
    const {isBlogPostPage} = useBlogPost();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

function Date({date, formattedDate}) {
    return (
        <time dateTime={date} itemProp="datePublished" className=" text-gray-400">
            {formattedDate}
        </time>
    );
}

export default function BlogPostItem({children, className, bigView}) {
    const containerClassName = useContainerClassName();
    const {metadata, isBlogPostPage} = useBlogPost();
    const {permalink, tags, title, date, formattedDate, readingTime, editUrl, hasTruncateMarker} = metadata;

    let postImage = metadata?.frontMatter?.image
    if (!postImage && !isBlogPostPage)
        postImage = "/img/blog_no_image.png"

    const showImage = () => {
        return (
                    <img className="object-cover aspect-[1000/523] transition duration-700 ease-out"
                         src={postImage} alt="News 01"/>
        )
    }

    const showOtherStuff = () => {
        return (
            <>
                <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                        {tags.map((t) => {
                            return (
                                <BlogTag tag={t} key={t.permalink}/>
                            )
                        })}
                    </ul>
                </div>
                <h3 className="h4 mb-0 md:mb-2">
                    <Link itemProp="url" to={permalink}
                          className="hover:text-gray-100 text-gray-200 transition duration-150 ease-in-out">
                        {title}
                    </Link>
                </h3>
                <BlogPostItemContent>{children}</BlogPostItemContent>

                {!isBlogPostPage &&
                    <div className="mt-1">
                        <BlogPostItemHeaderAuthors/>
                        <BlogPostItemHeaderInfo/>
                    </div>
                }
            </>
        )
    }
    return (
        <>
        <BlogPostItemContainer>
            {isBlogPostPage &&
                <>
                    <div className="max-w-4xl mx-auto md:max-w-none items-center flex flex-col">
                        <h2 className="h2 mb-0 max-w-4xl mx-auto">{title}</h2>
                    </div>
                    <div className="max-w-5xl mx-auto lg:items-center flex lg:flex-row flex-col mt-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:mb-2 grow">
                            <div className="w-full flex flex-row items-center content-center">
                                <BlogPostItemHeaderAuthors/>
                                <Date date={date} formattedDate={formattedDate} />
                            </div>

                        </div>
                        <div className="mb-3 mt-4 lg:mt-0">
                            <ul className="flex flex-wrap text-xs font-medium -m-1">
                                {tags.map((t) => {
                                    return (
                                        <BlogTag tag={t} key={t.permalink}/>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {postImage &&
                    <div className="mb-8 mt-4">
                        <img className="w-full object-cover"
                             src={postImage}/>
                    </div>
                    }
                    <div className="w-full lg:max-w-4xl mx-auto items-center flex flex-col">
                        <BlogPostItemContent>{children}</BlogPostItemContent>
                    </div>
                </>
            }
            {!isBlogPostPage &&
                <>
                    {bigView &&
                        <Link to={permalink}>
                            <div className="hover:bg-gray-800 hover:border-1 hover:border-gray-600 hover:border border-1 border border-gray-900 p-2 text-white">

                                <article
                                    className="mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                                    {showImage()}
                                    <div>
                                        {showOtherStuff()}
                                    </div>
                                </article>
                            </div>
                        </Link>
                    }

                    {!bigView &&
                        <Link to={permalink}>
                            <div className="hover:bg-gray-800 hover:border-1 hover:border-gray-600 hover:border border-1 border border-gray-900 p-2 text-white">
                                <div className="mb-6">
                                    {showImage()}
                                </div>
                                {showOtherStuff()}
                            </div>
                        </Link>
                    }
                </>
            }
        </BlogPostItemContainer>
            <script defer src="https://cdn.commento.io/js/commento.js"></script>
            <div id="commento"></div>
            </>
    );
}
