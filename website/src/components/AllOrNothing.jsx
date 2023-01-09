import React from 'react';
import {Android, Apple, Cyborg, DecisionProcess, FavList, Messaging, Note, ThumbUp, World2} from "./FeatureIcons";

export default function AllOrNothing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Cross-platform UI Frameworks are anti-social</h2>
            <p className="text-xl text-gray-700 dark:text-gray-400">They are designed to be "All or Nothing" and only grudgingly cooperate with the native platform.
            This results in a number of issues: non-native feel, performance problems, missing components, version update stress, lack of support, hiring, retention, etc.
                There's also the concept of "platform risk". You need to make a big decision up front, and if things aren't going well, changing platforms mid-stream
                is incredibly expensive and risky. "Good enough" requires compromise and risk.
            </p>
          </div>
      </div>
    </section>
  );
}
