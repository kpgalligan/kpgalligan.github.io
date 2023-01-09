import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({author, className}) {
  const {name, title, url, imageURL, email} = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <div className="flex flex-row items-center">
      {imageURL && (
        // <MaybeLink href={link} className="avatar__photo-link">
          <img className="rounded-full shrink-0 mr-2" src={imageURL} width="40" height="40" alt={name} />
        // </MaybeLink>

      )}

      {name && (
          // <MaybeLink href={link} itemProp="url">
            <span itemProp="name">{name}</span>
          // </MaybeLink>
      )}
    </div>
  );
}
