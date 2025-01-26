import "./styles.scss";
import React from "react";
import { ModalProps } from "~/components/Modal/types";

export function Modal({
  id,
  children,
  closable,
  setNextActive,
  setPrevActive,
  active,
  setActive,
  onClose,
}: ModalProps) {
  const closeModal = () => {
    setActive && setActive(false);
  };
  return (
    <div id={id} className={`modal ${active ? "active" : "inactive"}`}>
      {closable ? (
        <span
          className="mx-3 close"
          onClick={e => {
            e.preventDefault();
            closeModal();
            onClose && onClose();
          }}
        >
          &times;
        </span>
      ) : undefined}
      {setNextActive ? (
        <span
          className="mx-3 nav-button next"
          onClick={e => {
            e.preventDefault();
            setNextActive();
          }}
        >
          &#8250;
        </span>
      ) : undefined}
      {setPrevActive ? (
        <span
          className="mx-3 nav-button prev"
          onClick={e => {
            e.preventDefault();
            setPrevActive();
          }}
        >
          &#8249;
        </span>
      ) : undefined}
      <div className="modal-content">{children}</div>
    </div>
  );
}
