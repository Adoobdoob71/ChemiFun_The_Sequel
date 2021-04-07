import React from "react";
import { Row } from "..";

interface AlertProps {
  text: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const [scroll, setScroll] = React.useState<number>(0);
  const [visible, setVisible] = React.useState<boolean>(true);

  const SPEED = 0.2; // The less, the slower
  const SMOOTHNESS = 10; // The less, the smoother
  // Still haven't figured out how to translate the SPEED variable to measureable time

  const growAnimation = () => {
    if (scroll >= 100) {
      setVisible(false);
      return;
    }
    setScroll(scroll + SPEED);
  };

  React.useEffect(() => {
    setTimeout(() => {
      growAnimation();
    }, SMOOTHNESS);
  }, [scroll]);

  React.useEffect(() => {
    setScroll(0);
    setVisible(true);
  }, [props.text]);

  return visible ? (
    <div className="alert_main_view flex flex_direction_column">
      <Row style={{ paddingInline: "1.4rem", paddingBlock: "1rem" }}>
        <span className="alert_text">{props.text}</span>
      </Row>
      <div
        style={{
          width: `${scroll}%`,
          backgroundColor: "var(--primary-color)",
          height: "0.1rem",
        }}></div>
    </div>
  ) : null;
};

export default Alert;
