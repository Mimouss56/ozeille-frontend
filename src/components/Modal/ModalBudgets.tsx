import React, { useEffect, useRef, useState } from "react";

import { BudgetForm, type BudgetFormData } from "../BudgetForm/BudgetForm";
import { Button } from "../Button/Button";

export const ModalBudget: React.FC<ModalBudgetProps> = ({
  actionLabel,
  title,
  initialData,
  confirmLabel,
  onSubmit,
  onCancel,
  open,
  onClose,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const openDialog = () => dialog.current?.showModal();
  const closeDialog = () => {
    dialog.current?.close();
    onClose?.();
  };

  useEffect(() => {
    if (open === undefined) return;
    if (!dialog.current) return;

    if (open) dialog.current.showModal();
    else dialog.current.close();
  }, [open]);

  const handleCancel = () => {
    onCancel?.();
    closeDialog();
  };

  const handleConfirm = () => {
    formRef.current?.requestSubmit();
  };

  const handleSubmitFromForm = async (data: BudgetFormData) => {
    setLoading(true);
    try {
      await onSubmit(data);
      closeDialog();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {actionLabel && open === undefined && <Button onClick={openDialog}>{actionLabel}</Button>}

      <dialog
        ref={dialog}
        className="modal"
        onClose={() => {
          onClose?.();
        }}>
        <div className="modal-box max-w-lg">
          <h3 className="mb-2 text-lg font-bold">{title}</h3>

          <div className="py-2">
            <BudgetForm
              formRef={formRef}
              onSubmit={handleSubmitFromForm}
              onCancel={handleCancel}
              initialData={initialData}
            />
          </div>

          <div className="modal-action">
            <Button style="outline" onClick={handleCancel}>
              Annuler
            </Button>
            <Button loading={loading} onClick={handleConfirm}>
              {confirmLabel ?? "Valider"}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export type ModalBudgetProps = {
  actionLabel: string;
  title: string;
  initialData?: Partial<BudgetFormData>;
  confirmLabel?: string;
  open?: boolean;
  onClose?: () => void;
  onSubmit: (data: BudgetFormData) => Promise<void> | void;
  onCancel?: () => void;
};
