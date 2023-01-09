import React from 'react';
import {Android, Apple, Cyborg, DecisionProcess, FavList, Messaging, Note, ThumbUp, World2} from "./FeatureIcons";

export default function CodeSamples() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center py-12 md:py-20 border-t border-gray-800 ">
            <h2 className="h2 mb-4">(Code samples go here)</h2>
            {/*<div className="text-xl text-gray-700 dark:text-gray-400">
                Less complex screens can be all shared Compose code. Platform-specific code can be written directly wherever you need
                it to be, and still use the same shared Kotlin underneath. For Android, it's all "Compose", so it is always
                fully native. On iOS, it's all SwiftUI, and you can code it directly wherever you need to.

                <h3 className="h3 mt-8 text-black dark:text-white">Fully native UI with minimal platform risk.</h3>

            </div>*/}
          </div>

      </div>
    </section>
  );
}
