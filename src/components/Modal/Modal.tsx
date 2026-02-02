import { type VariantProps, cva } from "class-variance-authority";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "../Button/Button.tsx";

const modalStyle = cva(["modal", "modal-open"]);

const modalBoxStyle = cva(["modal-box"], {
  variants: {
    size: {
      sm: ["max-w-md"],
      md: ["max-w-lg"],
      lg: ["max-w-2xl"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ModalVariants = VariantProps<typeof modalBoxStyle>;

export type ModalProps = ModalVariants & {
  /**
   * Label for the action button which show the modal
   */
  actionLabel: string | React.ReactNode;
  /**
   * Title of the modal
   */
  title?: string;
  /**
   * Content of the modal
   */
  children: React.ReactNode;
  /**
   * Label for the confirmation button
   */
  confirmLabel?: string;
  /**
   * Action to execute when the confirmation button is clicked.
   */
  onConfirm?: () => boolean | Promise<boolean>;
  /**
   * Action to execute when the cancel button is clicked.
   */
  onCancel?: () => void;
  /**
   * Label for the cancel button
   */
  cancelLabel?: string;
  /**
   * Define the style of the button of the modal.
   */
  style?: "primary" | "ghost";
};

const Modal: React.FC<ModalProps> = ({
  title,
  actionLabel,
  children,
  confirmLabel = "Ok",
  onConfirm,
  onCancel,
  cancelLabel,
  style = "primary",
  ...styleProps
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleCancel = () => {
    onCancel?.();
    closeDialog();
  };

  const handleConfirm = async () => {
    const canClose = (await onConfirm?.()) ?? true;
    if (canClose) {
      closeDialog();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  const modalContent =
    isOpen && portalContainer
      ? createPortal(
        <dialog
          ref={dialog}
          className={modalStyle()}
          onClick={handleBackdropClick}
          onKeyDown={(e) => e.key === "Escape" && handleCancel()}
          open>
          <div
            className={modalBoxStyle(styleProps)}
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}>
            {title && (
              <h3 id="modal-title" className="mb-2 text-lg font-bold">
                {title}
              </h3>
            )}

            <div className="py-2">{children}</div>

            <div className="modal-action">
              {(onCancel || cancelLabel) && (
                <Button style="outline" onClick={handleCancel}>
                  {cancelLabel}
                </Button>
              )}
              <Button onClick={handleConfirm}>{confirmLabel}</Button>
            </div>
          </div>
        </dialog>,
        portalContainer,
      )
      : null;

  return (
    <>
      <Button onClick={openDialog} style={style}>
        {actionLabel}
      </Button>
      {modalContent}
    </>
  );
};

export default Modal;
