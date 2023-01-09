import React from 'react';

function Timeline() {

  const timelineEntry = (tag, year, title, detail)=>{
    return (
        <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
          <div className="pl-2">
            <div className="font-architects-daughter text-xl text-teal-600 mb-2">{tag}</div>
            <div className="flex items-center mb-3">
              <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-800 bg-green-200 rounded-full">{year}</div>
              <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
              <div className="absolute left-0 w-2 h-2 bg-lime-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
              <h4 className="h4">{title}</h4>
            </div>
            <p className="text-lg text-gray-400">{detail}</p>
          </div>
        </div>
    )
  }
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="pb-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4">Over a decade of mobile excellence</h2>
            <p className="text-xl text-gray-400">The origins of Touchlab start from the beggining of the modern mobile era.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto" data-aos-id-timeline>

            {timelineEntry("Pre-history", "2008", "Android Developer Challenge", "Kevin submits entries to the first Android Developer Challenge, before there were phones. Sadly, not a winner.")}
            {timelineEntry("Foundation", "2010", "First apps", "Touchlab was founded in 2010 as an Android-only development shop in NYC. At the time, few shops built Android.")}
            {timelineEntry("Community", "2012", "NYC Android Developers Meetup", "Started the NYC Android Developers Meetup: one of the largest Android communities globally.")}
            {timelineEntry("First Conference", "2014", "Droidcon NYC", "Started the first Droidcon in North America, and one of the first developer-led Android conferences.")}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;