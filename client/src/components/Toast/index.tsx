import React, { useEffect, useState } from "react";
import { ToastProps, ToastType } from "./types";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheckCircle,
  faEnvelope,
  faInfoCircle,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

class Toast {
  callback:
    | (({ alertText, durationMs, alertType }: ToastProps) => void)
    | null = null;

  registerCallback(cb: ((options: ToastProps) => void) | null) {
    this.callback = cb;
  }

  defaultDuration = 2000;

  showToast({ alertText, durationMs, alertType }: ToastProps) {
    if (!!this.callback) {
      this.callback({ alertText, durationMs, alertType });
    }
  }

  affirm(message: string, duration: number = this.defaultDuration) {
    this.showToast({
      alertText: message,
      durationMs: duration,
      alertType: ToastType.affirm,
    });
  }

  negate(message: string, duration: number = this.defaultDuration) {
    this.showToast({
      alertText: message,
      durationMs: duration,
      alertType: ToastType.negative,
    });
  }

  email(message: string, duration: number = this.defaultDuration) {
    this.showToast({
      alertText: message,
      durationMs: duration,
      alertType: ToastType.email,
    });
  }

  notify(message: string, duration: number = this.defaultDuration) {
    this.showToast({
      alertText: message,
      durationMs: duration,
      alertType: ToastType.notification,
    });
  }

  inform(message: string, duration: number = this.defaultDuration) {
    this.showToast({
      alertText: message,
      durationMs: duration,
      alertType: ToastType.information,
    });
  }
}
export const toast = new Toast();

export function ToastContainer() {
  const [toastOptions, setToastOptions] = useState<ToastProps | null>(null);
  const [visible, setVisible] = useState("hide");
  const [showTimeout, setShowTimeout] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const show = (options: ToastProps) => {
      setVisible(!!options ? "show" : "hide");
      setToastOptions(options);
      clearTimeout(showTimeout);
      setShowTimeout(setTimeout(handleClose, options.durationMs));
    };
    toast.registerCallback(show);

    return () => toast.registerCallback(null);
  }, []);

  const handleClose = () => setVisible("hide");

  //   if (!toastOptions) return null;

  const classes = toastOptions?.alertType;

  let icon;

  switch (toastOptions?.alertType) {
    case ToastType.affirm:
      icon = <FontAwesomeIcon icon={faCheckCircle} className="toast-icon" />;
      break;
    case ToastType.negative:
      icon = <FontAwesomeIcon icon={faWarning} className="toast-icon" />;
      break;
    case ToastType.email:
      icon = <FontAwesomeIcon icon={faEnvelope} className="toast-icon" />;
      break;
    case ToastType.notification:
      icon = <FontAwesomeIcon icon={faBell} className="toast-icon" />;
      break;
    default:
      icon = <FontAwesomeIcon icon={faInfoCircle} className="toast-icon" />;
      break;
  }

  return (
    <div className={`toast-alert ${visible} ${classes}`}>
      {icon}
      {toastOptions?.alertText}
    </div>
  );
}
