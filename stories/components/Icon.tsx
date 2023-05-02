import React from "react";

function chunkArray(arr) {
  const chunkSize = 7;
  const numChunks = Math.ceil(arr.length / chunkSize);
  return new Array(numChunks).fill(0).map((_, index) => {
    return arr.slice(index * chunkSize, (index + 1) * chunkSize);
  });
}

export default function ({ tokens }) {
  const icons = Object.keys(tokens.icon);

  return (
    <>
      <h1>Compound icons</h1>
      <table
        style={{
          width: "min(90%, 920px)",
          textAlign: "center",
        }}
      >
        <tbody>
          {chunkArray(icons).map((chunk, index) => (
            <tr key={`chunk-${index}`}>
              {chunk.map((iconName) => (
                <td key={iconName}>
                  {iconName}
                  <br />
                  <span
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "inline-block",
                      background: `var(--cpd-icon-${iconName})`,
                      backgroundSize: "contain",
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
