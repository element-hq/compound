/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

export default function getFlatTokenList(
  tokens: any /* TODO: types */,
  prefix = ""
) {
  return Object.entries(tokens).reduce(
    (memo, [tokenName, tokenDefinition]: [string, any] /* TODO: types */) => {
      if (tokenDefinition.value) {
        memo.push({
          ...tokenDefinition,
          prefix,
          tokenName,
        });
      } else {
        memo = memo.concat(
          getFlatTokenList(tokenDefinition, prefix + tokenName + "-")
        );
      }

      return memo;
    },
    [] as any[] /* TODO: types */
  );
}
