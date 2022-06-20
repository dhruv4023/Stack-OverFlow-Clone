import React from "react";
import './Tags.css'

export default function TagsList({tag}) {
  return (
    <div className="tag">
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  );
}
