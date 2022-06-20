import React from "react";

export default function Avtar({
  children,
  px,
  py,
  backgroundColor,
  color,
  borderRadius,
  fontSize,
  cursor,
}) {
  const style = {
    backgroundColor,
    padding: `${px} ${py}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };
  return <div style={style}>{children}</div>;
}
