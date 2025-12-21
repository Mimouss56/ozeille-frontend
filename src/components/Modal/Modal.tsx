import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

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
  open: boolean;
  title?: string;
  children: React.ReactNode;
  primaryLabel?: string;
  onConfirm?: () => void;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  primaryLabel = "Confirmer",
  onConfirm,
  onClose,
  ...styleProps
}) => {
  if (!open) return null;

  return (
    <div
      className={modalStyle()}
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.code === "Space") {
          e.preventDefault();
          onClose();
        }
      }}>
      <div
        className={modalBoxStyle(styleProps)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}>
        {title && (
          <h3 id="modal-title" className="mb-2 text-lg font-bold">
            {title}
          </h3>
        )}

        <div className="py-2">{children}</div>

        <div className="modal-action">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Annuler
          </button>
          <button type="button" className="btn btn-primary" onClick={onConfirm ?? onClose}>
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
