import React from "react";

export default function({ tokens }) {

  const spaceTokens = Object.keys(tokens).filter(name => {
    return name.includes("Space");
  }).sort((a, b) => {
    return parseInt(tokens[a].replace("px", ""), 10) - parseInt(tokens[b].replace("px", ""), 10)
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
      { spaceTokens.map(tokenName => {
        return <tr key={tokenName}>
          <td>
            <div style={{ width: tokens[tokenName] }} className="cpdSpacePreview" />
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
