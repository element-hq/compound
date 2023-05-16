/*
 * Copyright 2023 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
