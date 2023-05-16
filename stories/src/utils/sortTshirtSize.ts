/*
 * Copyright 2023 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
