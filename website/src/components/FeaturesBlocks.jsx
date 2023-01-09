import React from 'react';
import {Android, Apple, Cyborg, DecisionProcess, FavList, Messaging, Note, ThumbUp, World2} from "./FeatureIcons";

function FeatureBlock(name, description, svgBody){
  return(
  <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
    {svgBody()}
    <h4 className="h4 mb-2">{name}</h4>
    <p className="text-lg text-gray-700 dark:text-gray-400 text-center">{description}</p>
  </div>
  )
}

function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The majority our customers do not understand their workflows.</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {FeatureBlock(
                "Instant Features",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
                FavList
            )}

            {FeatureBlock(
                "Instant Features",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
                Note
            )}

            {FeatureBlock(
                "Instant Features",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
                World2
            )}

            {FeatureBlock(
                "Engineering Managers",
                null,
                DecisionProcess
            )}

            {FeatureBlock(
                "Android Developers",
                null,
                Android
            )}

            {FeatureBlock(
                "iOS Developers",
                null,
                Apple
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
