import React from "react";

export const Icon: React.FC<{iconName: string}> = ({ iconName }) => {
    return <div className="cpdIconItem">
        <img className="cpdIcon" alt={iconName} src={require(`@vector-im/compound-design-tokens/icons/${iconName}.svg`)}/>
        <p>{iconName}</p>
    </div>
}