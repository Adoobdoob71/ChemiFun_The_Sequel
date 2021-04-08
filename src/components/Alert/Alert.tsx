import React from "react";
import { Row } from "..";
import "./Alert.css";

interface AlertProps {
  text: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const [scroll, setScroll] = React.useState<number>(0);
  const [visible, setVisible] = React.useState<boolean>(false);

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
    if (props.text.length !== 0) {
      setScroll(0);
      setVisible(true);
    }
  }, [props.text]);

  return visible ? (
    <div className="alert_main_view flex flex_direction_column box_shadow">
      <Row
        style={{
          paddingInline: "1.6rem",
          paddingBlock: "1.2rem",
        }}>
        <span className="alert_text font_extra_small">{props.text}</span>
      </Row>
      <div
        style={{
          width: `${scroll}%`,
          backgroundColor: "var(--primary-color)",
          height: "0.125rem",
        }}></div>
    </div>
  ) : null;
};

export default Alert;
