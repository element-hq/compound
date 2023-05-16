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

export default function SemanticDefinition({
  tokenName,
  tokenType,
  definition,
}: {
  tokenName: string;
  tokenType: string;
  definition: any;
}) {
  const propertyName = `--cpd-color-${tokenType}${tokenName}`;

  return (
    <tr>
      <td>
        <div
          style={{
            width: "150px",
            height: "24px",
            borderRadius: "4px",
            backgroundColor: `var(${propertyName})`,
            border: `1px solid var(--cpd-color-alpha-gray-400)`,
            boxSizing: "border-box",
          }}
        />
      </td>
      <td
        style={{
          width: "200px",
        }}
      >
        {tokenType.replace(/\w*-/, "") + tokenName}
      </td>
      <td>{definition.description}</td>
      <td
        style={{
          width: "200px",
        }}
      >
        {propertyName}
      </td>
    </tr>
  );
}
