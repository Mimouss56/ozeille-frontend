import { type VariantProps, cva } from "class-variance-authority";
import { type FormEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Button } from "../Button/Button.tsx";

const modalStyle = cva(["modal", "modal-open"]); // Toujours "modal-open" car géré par le rendu conditionnel ou isOpen

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

export interface ModalProps extends ModalVariants {
  isOpen: boolean;
  onClose: () => void;
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
  onConfirm?: ((e: FormEvent) => boolean | Promise<boolean>) | (() => void);
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
  style?: "primary" | "ghost" | "danger" | "outline" | "dangerOutline";
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  confirmLabel = "Ok",
  onConfirm,
  onCancel,
  cancelLabel,
  ...styleProps
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const portalContainer = document.body;

  // Fermeture via Echap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Si la modale n'est pas ouverte, on ne rend rien (ou null)
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleConfirm = async (e: FormEvent) => {
    if (onConfirm) {
      const shouldClose = await onConfirm(e);
      // Si la fonction retourne explicitement false, on ne ferme pas
      if (shouldClose !== false) {
        onClose();
      }
    } else {
      onClose();
    }
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className={modalStyle()}
      onClick={handleBackdropClick}
      onKeyDown={(e) => e.key === "Escape" && handleCancel()}
      tabIndex={-1}>
      <div className={modalBoxStyle(styleProps)} aria-modal="true" aria-labelledby={title ? "modal-title" : undefined}>
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
  );
};

export default Modal;
