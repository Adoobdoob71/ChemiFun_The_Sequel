import React from "react";

interface RowProps {
  style?: React.CSSProperties;
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <div className="flex flex_direction_row" style={props.style}>
      {props.children}
    </div>
  );
};

export default Row;
