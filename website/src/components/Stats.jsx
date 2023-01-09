import React from 'react';

function Stats() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Integrated workflow designed for product teams</h1>
            <p className="text-xl text-gray-700 dark:text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          <div className="grid md:grid-cols-3 bg-gray-100 dark:bg-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-700 px-6 md:px-0 md:py-8 text-center">
            {/* 1st item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-cyan-600 dark:text-cyan-300 mb-2" data-aos="fade-up">179K</div>
              <div className="text-lg text-gray-700 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">Lorem ipsum is placeholder text commonly used.</div>
            </div>
            {/* 2nd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-cyan-600 dark:text-cyan-300 mb-2" data-aos="fade-up">147%</div>
              <div className="text-lg text-gray-700 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">Lorem ipsum is placeholder text commonly used.</div>
            </div>
            {/* 3rd item */}
            <div className="py-6 md:py-0 md:px-8">
              <div className="text-4xl font-bold leading-tight tracking-tighter text-cyan-600 dark:text-cyan-300 mb-2" data-aos="fade-up">$97K</div>
              <div className="text-lg text-gray-700 dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">Lorem ipsum is placeholder text commonly used.</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <code>
            val hello = "asrt"
          </code>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <textarea>arstasrt</textarea>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center p-5">
              <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
              </svg>
              <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
              <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;