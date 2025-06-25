"use client";

import { Button, Typography } from "@repo/ui/atoms";
import { useState } from "react";
import { ConfirmModal } from "../../../components/Profile/Modals/ConfirmModal";
import {
  FormModal,
  FormState,
} from "../../../components/Profile/Modals/FormModal";
import { PayoutCard } from "../../../components/Profile/PayoutCard";
import { usePayoutMethods } from "../../../hooks/usePayoutMethods";
import { MobileMoney, BankTransfer, PayoutMethod } from "../../../types/common";
import { notifyError } from "@repo/ui/toasts";

export const modeOptions = [
  { label: "Bank Account", value: "Bank Transfer" },
  { label: "Mobile Money", value: "Mobile Money" },
];

export const bankOptions = [
  { label: "UBA PLC", value: "UBA PLC" },
  { label: "GT Bank", value: "GT Bank" },
  { label: "Access Bank", value: "Access Bank" },
  { label: "Zenith Bank", value: "Zenith Bank" },
];

export const networkOptions = [
  { label: "MTN", value: "MTN" },
  { label: "Airtel", value: "Airtel" },
  { label: "Glo", value: "Glo" },
  { label: "9mobile", value: "9mobile" },
];

const initialMethods: PayoutMethod[] = [
  {
    type: "Bank Transfer",
    isDefault: true,
    accountName: "David Kazeem",
    accountNumber: "000 123 4569",
    bank: "UBA PLC",
  },
  {
    type: "Mobile Money",
    isDefault: false,
    accountName: "David Kazeem",
    accountNumber: "000 123 456",
    networkProvider: "MTN",
  },
];

const PayoutScreen = () => {
  const { methods, addOrUpdate, remove, setDefault } =
    usePayoutMethods(initialMethods);

  const [modalOpen, setModalOpen] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editingMethod, setEditingMethod] = useState<FormState | undefined>(
    undefined,
  );

  // Consistent account name for all payout methods
  const userAccountName = "David Kazeem";

  const [confirmDefault, setConfirmDefault] = useState<{
    open: boolean;
    idx: number | null;
  }>({ open: false, idx: null });

  const [confirmDelete, setConfirmDelete] = useState<{
    open: boolean;
    idx: number | null;
  }>({ open: false, idx: null });

  const isAccountLimitReached = methods.length >= 3;

  const openAdd = () => {
    // Prevent adding more than 3 payout methods
    if (isAccountLimitReached) {
      notifyError("You can only add up to 3 payout methods");
      return;
    }
    setEditIdx(null);
    setEditingMethod(undefined);
    setModalOpen(true);
  };

  const openEdit = (idx: number) => {
    const m = methods[idx] as BankTransfer | MobileMoney;
    setEditIdx(idx);
    setEditingMethod({
      type: m.type,
      bank: m.type === "Bank Transfer" ? m.bank : "UBA PLC",
      networkProvider: m.type === "Mobile Money" ? m.networkProvider : "MTN",
      accountNumber: m.accountNumber,
      accountName: userAccountName, // Always use the same account name
    });
    setModalOpen(true);
  };

  const handleSubmit = (formData: FormState) => {
    // Ensure the account name is always consistent
    const updatedFormData = {
      ...formData,
      accountName: userAccountName,
    };
    addOrUpdate(updatedFormData, editIdx);
    setModalOpen(false);
  };

  const requestDefault = (idx: number) =>
    setConfirmDefault({ open: true, idx });
  const confirmSetDefault = () => {
    if (confirmDefault.idx !== null) setDefault(confirmDefault.idx);
    setConfirmDefault({ open: false, idx: null });
  };

  const requestDelete = (idx: number) => setConfirmDelete({ open: true, idx });
  const confirmRemove = () => {
    if (confirmDelete.idx !== null) remove(confirmDelete.idx);
    setConfirmDelete({ open: false, idx: null });
  };

  return (
    <div>
      <div className="mb-8">
        <Typography variant="h1" className="font-normal mb-7">
          Payout Method
        </Typography>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-28">
          <Typography
            variant="body"
            className="text-gray-500 max-w-2xl text-sm md:w-1/2"
          >
            Payout methods: When you sell cryptocurrencies, the payment method
            added will be credited, please ensure that the account owner&apos;s
            name is consistent with your verified name on Kaprex. You can add up
            to 3 payment methods.
          </Typography>
          <Button
            variant="outline"
            className="md:w-1/2 rounded-2xl bg-white"
            onClick={openAdd}
            disabled={isAccountLimitReached}
          >
            + Add payout method
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {methods.map((m, i) => (
          <PayoutCard
            key={m.type + i}
            method={m}
            idx={i}
            onEdit={openEdit}
            onDelete={requestDelete}
            onSetDefault={requestDefault}
          />
        ))}
      </div>

      <FormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        defaultValues={editingMethod}
        editMode={editIdx !== null}
      />

      <ConfirmModal
        open={confirmDefault.open}
        onClose={() => setConfirmDefault({ open: false, idx: null })}
        onConfirm={confirmSetDefault}
        message="Are you sure you want to change your default payout account?"
      />

      <ConfirmModal
        open={confirmDelete.open}
        onClose={() => setConfirmDelete({ open: false, idx: null })}
        onConfirm={confirmRemove}
        message="Are you sure you want to delete this payout method?"
      />
    </div>
  );
};

export default PayoutScreen;
