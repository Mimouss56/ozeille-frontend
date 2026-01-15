import { type VariantProps, cva } from "class-variance-authority";
import React, { useRef } from "react";

import { Button } from "../Button/Button.tsx";

const modalStyle = cva(["modal"]);

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

  const openDialog = () => dialog.current?.showModal();
  const closeDialog = () => dialog.current?.close();

  const handleCancel = () => {
    onCancel?.();
    closeDialog();
  };

  const handleConfirm = () => {
    const canClose = onConfirm?.() ?? true;
    if (canClose) {
      closeDialog();
    }
  };

  return (
    <>
      <Button onClick={openDialog} style={style}>
        {actionLabel}
      </Button>
      <dialog ref={dialog} className={modalStyle()}>
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
      </dialog>
    </>
  );
};

export default Modal;
