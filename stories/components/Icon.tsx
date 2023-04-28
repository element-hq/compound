import React from "react";

export default function ({ tokens }) {
  const icons = Object.keys(tokens.icon);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        {icons.map((iconName) => (
          <tr key={iconName}>
            <td>{iconName}</td>
            <td>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: `var(--cpd-icon-${iconName})`,
                  backgroundSize: "contain",
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
