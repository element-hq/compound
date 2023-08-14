<p align="center"><img src="https://compound.element.io/logo-readme.png" width="300" alt="" /></p>

# Compound

[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://compound.element.io) [![](https://img.shields.io/github/license/vector-im/compound)](https://github.com/vector-im/compound/blob/main/LICENSE)

[Compound](https://compound.element.io) is the work-in-progress
design system for the Element applications.

This repository contains all the public documentation for Compound.

## Related projects

- 🎨 [Compound design tokens](https://github.com/vector-im/compound-design-tokens) – All tokens packaged for platforms to use
- 📱 [Compound iOS](https://github.com/vector-im/compound-ios) – iOS components library
- 🤖 [Compound Android](https://github.com/vector-im/compound-android) – Android components library
- 🌐 [Compound Web](https://github.com/vector-im/compound-web) – Web components library

## Develop

This project is using [Storybook](https://storybook.js.org/) to document the design system. It gets automatically deployed
when a new commit is pushed to the main branch. To develop locally, you will need [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/lang/en/).

Once installed, run the following command at the root of this project

```
yarn && yarn storybook
```
## The board

The core team uses [this board]([url](https://github.com/orgs/vector-im/projects/52/)https://github.com/orgs/vector-im/projects/52/) to track work, using the columns for:

- 'New': New or draft issues.
- 'Backlog': Issue backlog, triaged in priority order.
- 'Triaged': Committed tasks, triaged in priority order.
- 'In progress': In progress issues. Issues must have an assignee, and can have multiple.
- 'Blocked': Progress blocked. Raise during standups.
- 'In review' & 'Done'
