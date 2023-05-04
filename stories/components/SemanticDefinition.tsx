import React from "react";

export default function SemanticDefinition({
  tokenName,
  tokenType,
  definition,
}) {
  const propertyName = `--cpd-color-${tokenType}-${tokenName}`;

  return (
    <tr>
      <td>{tokenName}</td>
      <td>{definition.description}</td>
      <td>
        <div
          style={{
            width: "150px",
            height: "24px",
            borderRadius: "4px",
            backgroundColor: `var(${propertyName})`,
          }}
        />
      </td>
      <td>{propertyName}</td>
    </tr>
  );
}
