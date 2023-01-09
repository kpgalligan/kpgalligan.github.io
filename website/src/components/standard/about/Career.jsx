import React from 'react';

function Career() {
  const jobListing = (title, description, location, salary)=>{
    return (
        <div className="py-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-career]">
          <div className="pb-6 border-b border-gray-800">
            <div className="mb-2">
              <a className="flex justify-between items-center text-xl font-bold text-cyan-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                <span>{title}</span>
                <svg className="stroke-current shrink-0 ml-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth="2" fill="none">
                    <path d="M1 12h20" />
                    <path strokeLinecap="square" d="M14 5l7 7-7 7" />
                  </g>
                </svg>
              </a>
            </div>
            <div className="text-lg text-gray-400 mb-3">
              {description}
            </div>
            <div className="text-gray-400 flex flex-wrap items-center">
              <div className="inline-flex items-center">
                <svg className="mr-2 shrink-0" vidth="14" height="17" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-gray-300" d="M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
                <span>{location}</span>
              </div>
              <span className="text-gray-700 mx-3"> - </span>
              <div className="inline-flex items-center">
                <svg className="mr-2 shrink-0" vidth="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-gray-300" d="M9.5 3L11 0H3l1.5 3zM10 5H4c-2 1.458-4 4.235-4 6.4C0 12.573.5 16 7 16c6.495 0 7-3.431 7-4.6 0-2.165-2-4.942-4-6.4z" />
                </svg>
                <span>{salary}</span>
              </div>
            </div>
          </div>
        </div>
    )
  }
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* Section header */}
          <h3 className="h4 mb-8">Open positions</h3>

          {/* Job list */}
          <div className="-my-3" data-aos-id-career>

            {jobListing("Kotlin Multiplatform Mobile Developer",
                "Touchlab is looking for a Mobile Developer, with Android/Kotlin experience, who is eager to dive into Kotlin Multiplatform Mobile (KMM) development. The ideal candidate has some iOS experience, but we know most Android devs need to learn these skills, and we’re the best place to learn.",
                "Remote",
                "$80k - $140k")}

            {jobListing("Experienced Kotlin Multiplatform Mobile Developer",
                "Touchlab is looking for an Experienced Kotlin Mobile Multiplatform (KMM) Developer. Developers with significant Kotlin Multiplatform experience who want to work with us to have a major impact on the development and maturity of the Kotlin Multiplatform ecosystem.",
                "Remote",
                "$110k - $160k")}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Career;