import React from 'react';

import tokens from '../web/dist/tokens.json';
import './design-tokens.css';

export const DesignTokens = (props) => {

  return (
    <>
      <h1>Design tokens</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([tokenName, tokenValue]) => {
            return <tr key={tokenName}>
              <td>
                {props.nameTransform?.(tokenName) || tokenName}
              </td>
              <td style={{
                background: tokenValue,
                color: "#fff",
              }}>
                {tokenValue}
              </td>
            </tr>
          })}  
        </tbody>
      </table>

      

    </>
  );
};
