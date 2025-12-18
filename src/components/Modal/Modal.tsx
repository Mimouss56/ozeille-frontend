import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

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
    <div className={modalStyle()}>
      <div
        className={modalBoxStyle(styleProps)}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h3 className="font-bold text-lg mb-2">
            {title}
          </h3>
        )}

        <div className="py-2">
          {children}
        </div>

        <div className="modal-action">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onConfirm ?? onClose}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
