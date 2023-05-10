import React from "react";

import * as cpdLight from "@vector-im/compound-design-tokens/assets/web/js/cpdLight";

export const core = [
  { name: "Gray", preview: 1200 },
  { name: "Blue", preview: 900 },
  { name: "Green", preview: 800 },
  { name: "Yellow", preview: 500 },
  { name: "Red", preview: 900 }
];
export const extended = [
  { name: "Lime", preview: 500 },
  { name: "Cyan", preview: 600 },
  { name: "Purple", preview: 700 },
  { name: "Fuchsia", preview: 700 },
  { name: "Pink", preview: 700 },
  { name: "Orange", preview: 600 }
];

const scales = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

function Palette({ name }) {
  return <div className="palette">
    <span style={{
      lineHeight: "32px",
      width: "150px",
      float: "left"
    }}>{name}</span>
    { scales.map(scale => 
      <div 
        key={scale}
        style={{
          backgroundColor: cpdLight[`cpdColor${name}${scale}`]
        }}
        className="cpdColorPreview"
      />
    )}
  </div>;
}

export default function({ palette }) {  
  return <>
    <div className="color-palette-preview">
      {palette.map(({ name, preview }) => <div key={name} className="color-dot" style={{ background: cpdLight[`cpdColor${name}${preview}`] }} />)}
    </div>

    {palette.map(({ name }) => (<Palette name={name} key={name} /> ))}
  </>
}
