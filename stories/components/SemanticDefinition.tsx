/*
 * Copyright 2023 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
  ChevronUpIcon,
  ChevronDownIcon,
  PopOutIcon,
} from "@vector-im/compound-design-tokens/assets/web/icons";
import { camelCase } from "lodash-es";
import React, { useState } from "react";

export default function SemanticDefinition({
  definition,
}: {
  definition: any;
}) {
  const propertyName =
    `--cpd-color-${definition.prefix}${definition.tokenName}`.replace(
      /\//g,
      "-",
    );
  const camelCaseName = camelCase(definition.prefix + definition.tokenName);
  const [expanded, setExpanded] = useState(false);
  const ChevronIcon = expanded ? ChevronUpIcon : ChevronDownIcon;
  const popOut = (
    <PopOutIcon
      width="1em"
      height="1em"
      style={{
        display: "inline",
        marginInlineStart: 2,
        verticalAlign: "center",
      }}
    />
  );

  return (
    <div
      style={{
        border: "1px solid var(--cpd-color-gray-400)",
        borderRadius: 16,
        padding: 12,
        display: "grid",
        gridTemplateColumns: "40px 12px 1fr 8px auto",
        gridTemplateAreas:
          '"swatch . name . chevron" "swatch . description . chevron"',
        background: "var(--cpd-color-bg-canvas-default)",
        color: "var(--cpd-color-text-primary)",
      }}
    >
      <div
        style={{
          gridArea: "swatch",
          width: 40,
          height: 40,
          borderRadius: 8,
          background: `var(${propertyName})`,
          border: `1px solid var(--cpd-color-alpha-gray-400)`,
          boxSizing: "border-box",
        }}
      />
      <h5
        style={{
          gridArea: "name",
          font: "var(--cpd-font-body-md-semibold)",
          margin: 0,
          color: "inherit",
        }}
      >
        color/{definition.prefix}
        {definition.tokenName}
      </h5>
      <p
        style={{
          gridArea: "description",
          margin: 0,
          font: "var(--cpd-font-body-sm-regular)",
          color: "var(--cpd-color-text-secondary)",
          ...(expanded
            ? {}
            : {
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }),
        }}
      >
        {definition.description}
      </p>
      <button
        aria-label={expanded ? "Collapse" : "Expand"}
        style={{
          gridArea: "chevron",
          marginBlockStart: 6,
          padding: 4,
          height: "fit-content",
          appearance: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        <ChevronIcon
          aria-hidden
          width={16}
          height={16}
          style={{ display: "block", color: "var(--cpd-color-icon-primary)" }}
        />
      </button>
      {expanded && (
        <div
          style={{
            marginBlockStart: 16,
            gridArea: "3/1/-1/-1",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            rowGap: 4,
            columnGap: 12,
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "end",
              font: "var(--cpd-font-body-sm-semibold)",
            }}
          >
            Value
          </div>
          <div
            style={{
              font: "var(--cpd-font-body-sm-regular)",
              fontFamily: "var(--cpd-font-family-mono)",
              background: "var(--cpd-color-bg-subtle-secondary)",
              placeSelf: "start",
              paddingInline: 4,
            }}
          >
            {definition.value}
          </div>
          <div
            style={{
              textAlign: "end",
              font: "var(--cpd-font-body-sm-semibold)",
            }}
          >
            CSS
          </div>
          <div
            style={{
              font: "var(--cpd-font-body-sm-regular)",
              fontFamily: "var(--cpd-font-family-mono)",
              background: "var(--cpd-color-bg-subtle-secondary)",
              placeSelf: "start",
              paddingInline: 4,
            }}
          >
            var({propertyName})
          </div>
          <div
            style={{
              textAlign: "end",
              font: "var(--cpd-font-body-sm-semibold)",
            }}
          >
            Usages
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a
              href={`https://github.com/search?q=org%3Aelement-hq+-repo%3Aelement-hq%2Fcompound-design-tokens+NOT+is:archived+${propertyName}&type=code`}
              target="_blank"
              style={{ font: "var(--cpd-font-body-sm-regular)" }}
            >
              Web
              {popOut}
            </a>
            <a
              href={`https://github.com/search?q=org%3Aelement-hq+-repo%3Aelement-hq%2Fcompound-design-tokens+language%3Akotlin+NOT+is:archived+colors.${camelCaseName}&type=code`}
              target="_blank"
              style={{ font: "var(--cpd-font-body-sm-regular)" }}
            >
              Android
              {popOut}
            </a>
            <a
              href={`https://github.com/search?q=org%3Aelement-hq+-repo%3Aelement-hq%2Fcompound-design-tokens+language%3Aswift+NOT+is:archived+compound.${camelCaseName}&type=code`}
              target="_blank"
              style={{ font: "var(--cpd-font-body-sm-regular)" }}
            >
              iOS
              {popOut}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
