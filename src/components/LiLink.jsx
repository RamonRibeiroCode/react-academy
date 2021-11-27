import React from "react";

const LiLink = (props) => {
  return (
    <li>
      <a href={props.href}>{props.text}</a>
    </li>
  );
};

export { LiLink };
