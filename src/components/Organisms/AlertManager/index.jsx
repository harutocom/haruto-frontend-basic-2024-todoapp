import React, { useEffect } from "react";
import Alert from "../../Atoms/Alert";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const AlertManager = () => {
  const { visible, closeAlert } = useAlertHandlerContext();

  useEffect(() => {
    if (visible === true) {
      setTimeout(() => {
        closeAlert();
      }, 5000);
    }
  }, [visible]);

  return <Alert />;
};
