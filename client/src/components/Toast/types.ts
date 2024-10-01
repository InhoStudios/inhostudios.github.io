export interface ToastProps {
  alertText: string;
  durationMs: number;
  alertType: ToastType;
}

export enum ToastType {
  affirm = "t-affirm",
  negative = "t-negate",
  email = "t-email",
  notification = "t-notify",
  information = "t-info"
}
