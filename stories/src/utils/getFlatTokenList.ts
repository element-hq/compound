export default function getFlatTokenList(tokens, prefix = "") {
  return Object.entries(tokens).reduce(
    (memo, [tokenName, tokenDefinition]: any) => {
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
    [] as Array<any>
  );
}
