/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Weight = "regular" | "medium" | "semibold" | "bold";

const sizeOrder: Record<Size, number> = {
  xs: 10,
  sm: 20,
  md: 30,
  lg: 40,
  xl: 50,
};

const weightOrder: Record<Weight, number> = {
  regular: 0,
  medium: 1,
  semibold: 2,
  bold: 3,
};

const tshirtRegex = /(xs|sm|md|lg|xl)(regular|medium|semibold|bold)$/i;

export default function sortTshirtSize(a: string, b: string): number {
  const [, aSize, aWeight] = a.match(tshirtRegex)!;
  const [, bSize, bWeight] = b.match(tshirtRegex)!;
  return (
    sizeOrder[bSize.toLowerCase() as Size] +
    weightOrder[bWeight.toLowerCase() as Weight] -
    (sizeOrder[aSize.toLowerCase() as Size] +
      weightOrder[aWeight.toLowerCase() as Weight])
  );
}
