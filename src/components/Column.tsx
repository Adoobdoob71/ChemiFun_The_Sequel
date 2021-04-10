import React from "react";

interface ColumnProps {
  style?: React.CSSProperties;
}

const Column: React.FC<ColumnProps> = (props) => {
  return (
    <div className="flex flex_direction_column" style={props.style}>
      {props.children}
    </div>
  );
};

export default Column;
