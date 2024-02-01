import React, { useEffect, useState } from "react";

const icons = import.meta.glob(
  `../../../node_modules/@vector-im/compound-design-tokens/icons/*.svg`
);

export const Icon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const [src, setSrc] = useState<string | undefined>(undefined);
  useEffect(() => {
    icons[
      `../../../node_modules/@vector-im/compound-design-tokens/icons/${iconName}.svg`
    ]().then((src) => setSrc((src as { default: string }).default));
  }, [iconName]);

  return (
    <div className="cpdIconItem">
      <img className="cpdIcon" alt={iconName} src={src} />
      <p>{iconName}</p>
    </div>
  );
};
