import React from "react";

export default function Colour({ name, value }) {
  return (
    <section
      className="colorTile"
      style={{
        width: "155px",
        backgroundColor: value,
        padding: "3px 12px",
        borderRadius: "6px",
        display: "inline-block",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginRight: "16px",
        marginBottom: "16px",
        fontFamily:
          '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
        color: name.toLowerCase().startsWith("black") ? "#fff" : "#17191C",
      }}
    >
      <p>
        {name}
        <br />
        <small>{value}</small>
      </p>
    </section>
  );
}
