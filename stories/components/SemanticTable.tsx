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

export default function SemanticTable({
  tokens,
}: {
  tokens: {
    preview: () => JSX.Element;
    name: string;
    description: any;
    variable: string;
  }[];
}) {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr style={{ textAlign: "left" }}>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>CSS Variable</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <tr key={token.variable}>
            <td>{token.preview()}</td>
            <td>{token.name}</td>
            <td>{token.description ?? "–"}</td>
            <td>{token.variable}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
