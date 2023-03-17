import React from "react";

const scales = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];

export default function({ tokens }) {
  const colorTokens = Object.keys(tokens.light).filter(name => {
    return name.includes("Color");
  }).map(name => {
    const [prefix, attribute, color, scale] = name.split(/(?=[A-Z]|(?<=[a-z])[0-9])/);
    
    return {
      name,
      attribute,
      color,
      scale,
    }
  });

  const colors = new Set(colorTokens.map(({ color }) => color));
  // colorTokens
  console.log(colors);

  return <>
    <h1>Color</h1>
    { Array.from(colors).map(color => 
      <section key={color}>
        <h2>{color}</h2>
        <p><strong>Value:</strong> cpdColor{color}[100-1400]</p>
        <div className="cpdColorScale">
          { scales.map(scale => 
            <div 
              key={scale}
              style={{
                backgroundColor: tokens.light[`cpdColor${color}${scale}`] 
              }}
              className="cpdColorPreview"
              data-scale={scale}
            />
          )}
        </div>

      </section>
    ) }
  </>
}
