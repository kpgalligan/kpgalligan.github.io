import React from 'react';

export default function TitleDetail({title, detail}) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="h2 mb-4">{title}</h2>
            <div className="text-xl text-gray-700 dark:text-gray-400">{detail}</div>
          </div>
      </div>
    </section>
  );
}
