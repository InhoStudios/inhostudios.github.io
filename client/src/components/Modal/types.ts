import { ReactNode } from "react";
import { SetState } from "~/typings/generics";

export interface ModalProps {
  id: string;
  active: boolean;
  setActive: SetState<boolean>;
  closable?: boolean;
  setNextActive?: () => void;
  setPrevActive?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}
