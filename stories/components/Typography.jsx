import React from "react";

export default function({ tokens }) {

  const fontTokens = Object.keys(tokens).filter(name => {
    return name.includes("FontHeading") || name.includes("FontBody");
  });
    
  return <>
    <h1>Spacing</h1>
    <table>
    <thead>
      <tr>
        <th>
        </th>
        <th>
          Name
        </th>
        <th>
          Value
        </th>
      </tr>
    </thead>
    <tbody>
      { fontTokens.map(tokenName => {
        return <tr key={tokenName}>
          <td style={{
            maxWidth: "45vw",
          }}>
            <span style={{ font: tokens[tokenName] }} >The quick brown fox jumps over the lazy dog</span>
          </td>
          <td>
            {tokenName}
          </td>
          <td>
            {tokens[tokenName]}
          </td>
        </tr> 
      })}
    </tbody>
  </table> </>
}
