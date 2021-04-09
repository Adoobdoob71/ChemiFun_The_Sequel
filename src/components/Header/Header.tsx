import React from "react";
import { Column } from "..";
import "./Header.css";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  center?: JSX.Element;
  style?: React.CSSProperties;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className="flex flex_direction_row header_main_view align_center"
      style={{
        backgroundColor: props.transparent ? "transparent" : undefined,
        ...props.style,
      }}>
      {props.left}
      {props.center ? (
        props.center
      ) : (
        <Column style={{ flex: 1, marginInline: "2rem" }}>
          <span className="header_title font_large">{props.title}</span>
          <span
            className="header_subtitle font_small"
            style={{ marginTop: "0.2rem" }}>
            {props.subtitle}
          </span>
        </Column>
      )}
      {props.right}
    </div>
  );
};

export default Header;
