/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import React from "react";

import classes from "./notification.module.css";

interface PropsNotification { 
    title: string,
    message: string, 
    status: string  
}
export const Notification = (props) => {
  const { title, message, status }: PropsNotification = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications"),
  );
};
