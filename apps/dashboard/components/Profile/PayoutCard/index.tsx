import { Typography } from "@repo/ui/atoms";
import { PayoutMethod } from "../../../types/common";

interface PayoutCardProps {
  method: PayoutMethod;
  idx: number;
  onEdit: (i: number) => void;
  onDelete: (i: number) => void;
  onSetDefault: (i: number) => void;
}

export const PayoutCard: React.FC<PayoutCardProps> = ({
  method,
  idx,
  onEdit,
  onDelete,
  onSetDefault,
}) => (
  <div
    key={method.type + idx}
    className={`relative rounded-xl md:rounded-2xl border ${
      method.isDefault ? "border-primary bg-white" : "border-[#BDBDC6] bg-white"
    } p-0 overflow-hidden flex flex-col`}
  >
    <div
      className={`flex items-center justify-between px-6 py-3 ${
        method.isDefault ? "bg-[#FFF3EA]" : "bg-[#F7F7FA]"
      }`}
    >
      <div className="flex items-center gap-3">
        <Typography
          variant="body"
          className="font-nohemi text-sm pl-2.5 border-l-2 border-primary"
        >
          {method.type}
        </Typography>
        {method.isDefault && (
          <span className="bg-[#FFE3D1] text-primary text-xs px-2 py-0.5 font-nohemi ml-2">
            Default
          </span>
        )}
      </div>
      <div className="flex items-center gap-6">
        <button
          className="text-primary font-medium font-sans text-sm"
          onClick={() => onEdit(idx)}
        >
          Edit
        </button>
        <button
          className="text-primary font-medium font-sans text-sm"
          onClick={() => onDelete(idx)}
        >
          Delete
        </button>
      </div>
    </div>
    <div className="flex flex-row items-start md:items-center md:justify-between gap-6 px-6 py-6">
      <div className="flex flex-col md:flex-row gap-12 flex-1">
        <div>
          <Typography
            variant="small"
            className="text-[#A6A6B0] mb-1 font-nohemi"
          >
            Account Name
          </Typography>
          <Typography
            variant="h4"
            className="font-nohemi font-normal text-black"
          >
            {method.accountName}
          </Typography>
        </div>
        <div>
          <Typography
            variant="small"
            className="text-[#A6A6B0] mb-1 font-nohemi"
          >
            Account Number
          </Typography>
          <Typography
            variant="h4"
            className="font-nohemi font-normal text-black"
          >
            {method.accountNumber}
          </Typography>
        </div>
        <div>
          <Typography
            variant="small"
            className="text-[#A6A6B0] mb-1 font-nohemi"
          >
            {method.type === "Bank Transfer" ? "Bank" : "Network Provider"}
          </Typography>
          <Typography
            variant="h4"
            className="font-nohemi font-normal text-black"
          >
            {method.type === "Bank Transfer"
              ? method.bank
              : method.networkProvider}
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-end min-w-fit">
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full border-2 ${
            method.isDefault ? "border-primary" : "border-[#6C6C77]"
          } bg-white cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            onSetDefault(idx);
          }}
          tabIndex={0}
          role="radio"
          aria-checked={method.isDefault}
        >
          <span
            className={`inline-block w-3.5 h-3.5 rounded-full ${
              method.isDefault ? "bg-primary" : "bg-transparent"
            }`}
          />
        </span>
      </div>
    </div>
  </div>
);
