import React from "react";

export default function WidgetTags() {
  const tags = [
    "c",
    "c++",
    "css",
    "express",
    "firebase",
    "HTML",
    "JAVA",
    "JavaScript",
    "mern",
    "mongoDb",
    "mysql",
    "NextJs",
    "NodeJs",
    "PHP",
    "Python",
    "ReactJs",
  ];

  return (
    <div className="widgetTags">
      <h4>Watched tags</h4>
      <div className="widgetTagsDiv">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
}
