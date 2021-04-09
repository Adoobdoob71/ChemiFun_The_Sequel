import React from "react";
import { Modal as RBModal } from "react-bootstrap";
import "./Modal.css";

interface ModalProps {
  visible: boolean;
  onHide: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => setVisible(props.visible), [props.visible]);

  return (
    <RBModal
      show={visible}
      onHide={props.onHide}
      contentClassName="alert_window_content"
      centered>
      {props.children}
    </RBModal>
  );
};

export default Modal;
