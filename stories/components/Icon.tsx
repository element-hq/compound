/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";

function chunkArray(arr: string[]) {
  const chunkSize = 7;
  const numChunks = Math.ceil(arr.length / chunkSize);
  return new Array(numChunks).fill(0).map((_, index) => {
    return arr.slice(index * chunkSize, (index + 1) * chunkSize);
  });
}

export default function ({ tokens }: { tokens: Record<string, any> }) {
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
