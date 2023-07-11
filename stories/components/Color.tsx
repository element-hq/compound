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

import * as cpdLight from "@vector-im/compound-design-tokens/assets/web/js/cpdLight";

export const core = [
  { name: "Gray", preview: 1200 },
  { name: "Blue", preview: 900 },
  { name: "Green", preview: 800 },
  { name: "Yellow", preview: 500 },
  { name: "Red", preview: 900 },
];
export const extended = [
  { name: "Lime", preview: 500 },
  { name: "Cyan", preview: 600 },
  { name: "Purple", preview: 700 },
  { name: "Fuchsia", preview: 700 },
  { name: "Pink", preview: 700 },
  { name: "Orange", preview: 600 },
];

const scales = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
];

function Palette({ name }: { name: string }) {
  return (
    <>
      <table id={name}>
        <tr>
          <th colSpan={3}>{name}</th>
        </tr>
        <tr>
          <th>Swatch</th>
          <th>Hue</th>
          <th>Variable</th>
        </tr>
        {scales.map((scale) => (
          <tr key={scale}>
            <td>
              <div
                style={{
                  backgroundColor: (cpdLight as any)[`cpdColor${name}${scale}`],
                }}
                className="cpdColorPreview"
              />
            </td>
            <td>{scale}</td>
            <td>
              <code>
                --cpd-color-{name.toLowerCase()}-{scale}
              </code>
            </td>
          </tr>
        ))}
      </table>
      <div className="palette">
        <span
          style={{
            lineHeight: "32px",
            width: "150px",
            float: "left",
          }}
        ></span>
      </div>
    </>
  );
}

export default function ({
  palette,
}: {
  palette: { name: string; preview: number }[];
}) {
  return (
    <>
      <div className="color-palette-preview">
        {palette.map(({ name, preview }) => (
          <a
            href={`#${name}`}
            key={name}
            className="color-dot"
            style={{
              background: (cpdLight as any)[`cpdColor${name}${preview}`],
            }}
          />
        ))}
      </div>

      {palette.map(({ name }: { name: string }) => (
        <Palette name={name} key={name} />
      ))}
    </>
  );
}
