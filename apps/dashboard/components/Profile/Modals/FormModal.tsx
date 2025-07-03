import React from "react";
import { Button, Typography, SelectField } from "@repo/ui/atoms";
import { Modal } from "@repo/ui/molecules";
import { useForm } from "react-hook-form";
import { FormField } from "@repo/ui/molecules";
import {
  modeOptions,
  bankOptions,
  networkOptions,
} from "../../../app/(dashboard)/profile/payout/PayoutScreen";

export interface FormState {
  type: "Bank Transfer" | "Mobile Money";
  bank: string;
  networkProvider: string;
  accountNumber: string;
  accountName: string;
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormState) => void;
  defaultValues?: FormState;
  editMode: boolean;
}

export const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  onSubmit,
  defaultValues,
  editMode,
}) => {
  // Consistent account name for all payout methods
  const userAccountName = "David Kazeem";

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: {},
  } = useForm<FormState>({
    defaultValues: {
      type: "Bank Transfer",
      bank: "UBA PLC",
      networkProvider: "MTN",
      accountNumber: "",
      accountName: userAccountName,
    },
  });

  const type = watch("type");

  React.useEffect(() => {
    if (open) {
      reset({
        type: defaultValues?.type || "Bank Transfer",
        bank: defaultValues?.bank || "UBA PLC",
        networkProvider: defaultValues?.networkProvider || "MTN",
        accountNumber: defaultValues?.accountNumber || "",
        accountName: userAccountName, // Always use consistent account name
      });
    }
  }, [open, defaultValues, reset, userAccountName]);

  return (
    <Modal open={open} onClose={onClose} showCloseButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 md:p-14 md:px-16 flex flex-col gap-8"
      >
        <Typography
          variant="h1"
          className="font-nohemi text-3xl mb-2 font-normal"
        >
          {editMode ? "Edit Payout Method" : "Add Payout Method"}
        </Typography>

        {/* Mode of payment */}
        <FormField<FormState>
          name="type"
          control={control}
          label="Mode of payment"
          rules={{ required: "Mode of payment is required" }}
        >
          {(field) => (
            <SelectField {...field} label="Mode of payment">
              {modeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </SelectField>
          )}
        </FormField>

        {/* Bank Name or Network Provider */}
        {type === "Bank Transfer" ? (
          <FormField<FormState>
            name="bank"
            control={control}
            label="Bank Name"
            rules={{ required: "Bank name is required" }}
          >
            {(field) => (
              <SelectField {...field} label="Bank Name">
                {bankOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </SelectField>
            )}
          </FormField>
        ) : (
          <FormField<FormState>
            name="networkProvider"
            control={control}
            label="Network Provider"
            rules={{ required: "Network provider is required" }}
          >
            {(field) => (
              <SelectField {...field} label="Network Provider">
                {networkOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </SelectField>
            )}
          </FormField>
        )}

        {/* Account Number */}
        <FormField<FormState>
          name="accountNumber"
          control={control}
          label="Account Number"
          labelClassName="mb-4 font-normal text-black"
          type="text"
          rules={{
            required: "Account number is required",
            pattern: {
              value: /^[\d\s]+$/,
              message: "Account number must contain only numbers and spaces",
            },
          }}
          inputProps={{
            placeholder: "000 000 000",
            className:
              "w-full rounded-full bg-[#F5F5F7] px-6 py-4 text-base outline-none text-[#303344] font-sans",
            onKeyPress: (e) => {
              // Allow only numbers, spaces, and backspace
              if (!/[0-9\s]/.test(e.key) && e.key !== "Backspace") {
                e.preventDefault();
              }
            },
          }}
        />

        {/* Account Name (display only) */}
        <Typography
          variant="body"
          className="text-center text-[#6C6C77] font-sans"
        >
          {userAccountName}
        </Typography>

        <Button type="submit" size="lg">
          {editMode ? "Save changes" : "+ Add payout method"}
        </Button>
      </form>
    </Modal>
  );
};
