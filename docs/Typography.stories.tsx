import React from "react";
import FigmaLiveEmbed from "./components/FigmaLiveEmbed";

export default {
  title: "Typography",
  component: FigmaLiveEmbed,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = ({ url }) => <FigmaLiveEmbed url={url} />;

export const Web = Template.bind({});
Web.args = {
  url: "https://www.figma.com/file/JbPsoUIXz2IxGgc7Y5rvad/Cross-platform-Typography-%C2%B7-Stress-Testing?node-id=2%3A247&t=RZclNqq8jJF0Uh4r-1",
};

export const iOS = Template.bind({});
iOS.args = {
  url: "https://www.figma.com/file/JbPsoUIXz2IxGgc7Y5rvad/Cross-platform-Typography-%C2%B7-Stress-Testing?node-id=2%3A158&t=RZclNqq8jJF0Uh4r-1",
};

export const Android = Template.bind({});
Android.args = {
  url: "https://www.figma.com/file/JbPsoUIXz2IxGgc7Y5rvad/Cross-platform-Typography-%C2%B7-Stress-Testing?node-id=2%3A198&t=RZclNqq8jJF0Uh4r-1",
};
