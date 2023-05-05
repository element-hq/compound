import React from "react";

export default function SemanticDefinition({
  tokenName,
  tokenType,
  definition,
}) {
  const propertyName = `--cpd-color-${tokenType}${tokenName}`;

  return (
    <tr>
      <td
        style={{
          width: "200px",
        }}
      >
        {tokenType.replace(/\w*-/, "") + tokenName}
      </td>
      <td>{definition.description}</td>
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
        {propertyName}
      </td>
    </tr>
  );
}
