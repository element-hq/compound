import React from "react";

import "./style.css";

export default function FigmaLiveEmbed({ url }) {
  return (
    <iframe
      style={{ border: "0" }}
      width="100%"
      height="100%"
      src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
        url
      )}`}
      allowFullScreen={false}
    />
  );
}
