/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
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
