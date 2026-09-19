---
# Example content entry for the projects collection.
# Every field below is consumed by the template described in README.md.
title: SubWatch
eyebrow: macOS menu bar app
icon: ./icons/subwatch.png            # 1024×1024 PNG with transparency, rendered at 96px
summary: >-
  Shows how much of each AI subscription's rate limit you have used, in the menu bar.
  Claude only for now; the provider layer is shaped so Codex can be added later.
meta: Version 0.1.0 — macOS 15 or later — Apple silicon and Intel
cta:
  label: Download the .dmg
  href: https://github.com/kpgalligan/subwatch/releases/latest
repo: https://github.com/kpgalligan/subwatch

# Screenshot-with-text. `chrome: true` draws the three-dot window bar above the image.
lead:
  image: ./shots/subwatch-popover.png
  alt: The SubWatch popover open under the menu bar
  chrome: true
  aspect: 16/10
  body: >-
    One click on the gauge opens the list. Each account shows its plan, when it was last
    checked, and a meter per limit window, so a five-hour session limit and a weekly limit
    are visible at the same time. The popover refreshes on open, debounced to thirty seconds.

# Screenshot-with-bullets rows. `side` sets which column the image takes.
features:
  - title: The number, in the menu bar
    body: >-
      The tray label carries the highest session utilization across your accounts, so a
      glance is usually enough.
    bullets:
      - Icon and percentage, or icon only
      - Follows the menu bar in light and dark, then turns red past your critical threshold
      - Warning and critical percentages are yours to set
    image: ./shots/subwatch-tray.png
    alt: Menu bar close-up showing the gauge and percentage
    side: right
  - title: More than one account
    body: >-
      Sign in once per account through a real Claude login window. If a session expires, that
      row says so and offers to sign in again — nothing else stops working.
    bullets:
      - Personal and work accounts side by side
      - Session keys and cookies stay in the Keychain
      - Refreshes in the background, and again when you open it
    image: ./shots/subwatch-settings.png
    alt: SubWatch settings, accounts pane
    side: left

# Imageless feature grid. 2–6 items; the grid wraps at 14rem tracks.
also:
  eyebrow: Also
  items:
    - title: Early-reset alerts
      body: A notification when a weekly limit resets before you expected it to. Clicking it opens the popover.
    - title: Launch at login
      body: One switch. No login item to hunt down in System Settings.
    - title: No dock icon
      body: It runs as a menu bar accessory, so it stays out of the dock and out of ⌘-tab.
    - title: Nothing leaves the machine
      body: Usage snapshots are written to a local file. There is no server, no account and no telemetry.
    - title: Built for another provider
      body: The provider layer is generic. Codex is the next one in, when its usage data is reachable.
    - title: Open source
      body: Swift and SwiftUI, with the parsing and formatting logic in a tested core package.

video:
  youtubeId: ""                        # empty → omit the section entirely
  caption: Adding an account, then a week of usage in two minutes.

specs:
  - title: macOS
    body: 15.0 Sequoia or later. Apple silicon and Intel.
  - title: Providers
    body: Claude, via the endpoints the Claude web app uses. Codex is planned.
  - title: Credentials
    body: Session keys and cookies live in the Keychain, one item per account.
  - title: Data
    body: >-
      Accounts and their last usage snapshot are a JSON file in Application Support.
      Preferences are UserDefaults. Nothing is uploaded.
  - title: Signing
    body: Signed and notarized. Notifications and launch at login are refused for unsigned builds.
  - title: Price
    body: Free. MIT licensed.
  - title: Source
    body: github.com/kpgalligan/subwatch — Swift, SwiftUI, and a tested SubWatchCore package.

download:
  label: Download SubWatch 0.1.0 (.dmg)
  href: https://github.com/kpgalligan/subwatch/releases/latest
  note: Signed and notarized — 4.1 MB

releases:
  - version: Next
    title: Codex support
    body: Same rows, second provider. Waiting on a usage endpoint that can be read from a signed-in session.
  - version: Next
    title: Usage history
    body: A week of session peaks, so a limit that keeps landing early is visible before it bites.
  - version: 0.1.0
    title: First build
    body: >-
      Menu bar percentage, multi-account popover, per-window meters, thresholds,
      early-reset notification, launch at login.

faq:
  - q: Does this use an official Claude API?
    a: >-
      No. It calls the same usage endpoints the Claude web app calls. They are unofficial and
      undocumented, and may change without notice. Responses are parsed defensively, but a
      change in shape shows up as "Unexpected response from Claude".
  - q: Do you see my account, or my prompts?
    a: >-
      Neither. There is no server involved. The app talks to Claude from your machine and
      writes what it gets to a local file.
  - q: Why does it want me to sign in through a window?
    a: >-
      It reuses your normal Claude session rather than asking for a password or a key. The
      session is stored in the Keychain, and expires the way a browser session does.
  - q: Does it count API spend?
    a: No. It reports subscription rate-limit usage — session and weekly windows — not billing.
  - q: Can I run more than one account?
    a: >-
      Yes. Each one is a row, refreshed independently, and the menu bar shows whichever is
      highest.

contact:
  body: Something broken, or a provider you want next?
  links:
    - label: Open an issue
      href: https://github.com/kpgalligan/subwatch/issues
    - label: mail me
      href: mailto:kevin@kpgalligan.com
---
