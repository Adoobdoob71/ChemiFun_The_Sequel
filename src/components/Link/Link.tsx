import React from "react";
import "./Link.css";

interface LinkProps {
  text: string;
  url: string;
  style?: React.CSSProperties;
}

const Link: React.FC<LinkProps> = (props) => {
  const openLink = () => window.open(props.url, "_blank")?.focus();

  return (
    <button className="link_background font_small" onClick={openLink}>
      {props.text}
    </button>
  );
};

export default Link;
