"use client";

import React, { useState } from "react";
import { Typography, Button } from "@repo/ui/atoms";
import { Modal } from "@repo/ui/molecules";
import { useForm, Controller } from "react-hook-form";
import { FormField } from "@repo/ui/molecules";
import Link from "next/link";
import { ChevronRight, ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";
import { KaprexLogoIcon, MetamaskIcon } from "@repo/ui/icons";
import { useMetamask } from "../../hooks/useMetamask";
import { VirtualAccountsResponse } from "../../types/api/wallets";

// interface VirtualAccount {
//   name: string;
//   balance: number;
//   weight: number;
//   currency?: "USD" | "EUR";
//   wallet?: "kaprex" | "metamask";
// }

// const initialAccounts: VirtualAccount[] = [
//   // Uncomment to test with data
//   // { name: "Operations", balance: 8000, weight: 80 },
//   // { name: "Payroll", balance: 1200, weight: 12 },
//   { name: "Prime OTC Main", balance: 800, weight: 8 },
// ];

const BusinessDashboard: React.FC<{ accounts: VirtualAccountsResponse }> = ({
  accounts,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const { account, connect } = useMetamask();
  const [isConnecting, setIsConnecting] = useState(false);

  const onClick = async () => {
    setIsConnecting(true);
    try {
      await connect();
    } catch (err: Error | unknown) {
      alert((err as Error).message || "Failed to connect");
    } finally {
      setIsConnecting(false);
    }
  };

  const label = isConnecting
    ? "Connecting…"
    : account
      ? `${account.slice(0, 6)}…${account.slice(-4)}`
      : "Connect MetaMask";

  const { control, handleSubmit, reset } = useForm<{
    name: string;
    currency: "USD" | "EUR";
    wallet: "kaprex" | "metamask";
  }>({
    defaultValues: { name: "", currency: "USD", wallet: "kaprex" },
  });

  const onSubmit = (data: {
    name: string;
    currency: "USD" | "EUR";
    wallet: "kaprex" | "metamask";
  }) => {
    const newAccount = {
      name: data.name,
      balance: 0,
      currency: data.currency,
      wallet: data.wallet === "metamask" ? account : data.wallet,
    };

    console.log(newAccount, "newAccount");

    // setAccounts((prev) => [...prev, newAccount]);
    // setModalOpen(false);
    // reset();
  };

  const openModal = () => {
    setModalOpen(true);
    reset();
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white rounded-3xl shadow-sm px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
        <div className="flex flex-col md:flex-row md:gap-28 gap-4">
          <div>
            <Typography variant="body" className=" font-nohemi mb-2">
              Total Accounts
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi font-normal text-[40px] md:text-6xl"
            >
              {/* {accounts.balances.length} */} 1
            </Typography>
          </div>
          <div>
            <Typography variant="body" className="font-nohemi mb-2">
              Total USD Balance
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi font-normal text-[40px] md:text-6xl"
            >
              $
              {Number(accounts?.balances?.[1]?.amount ?? 0).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}
            </Typography>
          </div>
          <div>
            <Typography variant="body" className="font-nohemi mb-2">
              Total EUR Balance
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi font-normal text-[40px] md:text-6xl"
            >
              $
              {Number(accounts?.balances?.[2]?.amount ?? 0).toLocaleString(
                undefined,
                {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                },
              )}
            </Typography>
          </div>
        </div>
      </div>

      {/* Virtual Accounts Table */}
      <div className="bg-white rounded-3xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="body" className="text-gray-500 font-nohemi">
            Virtual Accounts
          </Typography>
          {accounts && (
            <Button
              variant="text"
              className="text-primary font-sans font-medium"
              onClick={openModal}
            >
              Add Account +
            </Button>
          )}
        </div>
        <div>
          {!accounts ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="mb-4">
                <ClipboardList className="w-8 h-8 text-gray-400" />
              </div>
              <Typography
                variant="h4"
                className="font-nohemi mb-2 text-2xl font-normal"
              >
                Nothing here!
              </Typography>
              <Typography
                variant="body"
                className="text-gray-500 mb-6 text-center"
              >
                To create a link, please add a business first!
              </Typography>
              <Button
                variant="primary"
                size="md"
                className="w-60"
                onClick={openModal}
              >
                Create account
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-gray-400 font-nohemi text-base border-b">
                    <th className="py-2 px-2 font-normal">Name</th>
                    <th className="py-2 px-2 font-normal">USD Balance</th>
                    <th className="py-2 px-2 font-normal">EUR Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {accounts.map((acc, idx) => ( */}
                  <tr
                    // key={acc.name + idx}
                    className="border-b last:border-0 hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      router.push(`/accounts/${accounts.name.toLowerCase()}`);
                    }}
                  >
                    <td className="py-3 px-2 font-nohemi">
                      <Link href={`/accounts/${accounts.name.toLowerCase()}`}>
                        {accounts.name}{" "}
                        <ChevronRight
                          className="inline-block w-4 h-4"
                          strokeWidth={1}
                        />
                      </Link>
                    </td>
                    <td className="py-3 px-2 font-nohemi">
                      $
                      {Number(
                        accounts?.balances?.[1]?.amount ?? 0,
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <td className="py-3 px-2 font-nohemi">
                      {Number(
                        accounts?.balances?.[2]?.amount ?? 0,
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal for New Virtual Account */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="p-8 md:p-14 md:py-11 w-full md:max-w-[784px]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="body"
            className="font-nohemi text-2xl md:text-4xl mb-6"
          >
            New Virtual Account
          </Typography>
          <div className="mb-6">
            <FormField
              name="name"
              control={control}
              label="Account Name"
              placeholder="Account Name"
              required
              className="rounded-full bg-[#F3F4F6] px-6 py-4 text-lg font-sans border-none w-full"
              labelClassName="font-nohemi text-base mb-4 font-normal"
            />
          </div>
          <div className="mb-6">
            <Typography variant="body" className="font-nohemi mb-4">
              Currency
            </Typography>
            <div className="flex gap-4">
              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <>
                    <button
                      type="button"
                      className={`flex-1 rounded-full px-0 py-3 text-lg font-sans border ${field.value === "USD" ? "border-primary text-primary bg-white" : "border-transparent text-gray-400 bg-[#F3F4F6]"}`}
                      onClick={() => field.onChange("USD")}
                    >
                      USD
                    </button>
                    <button
                      type="button"
                      className={`flex-1 rounded-full px-0 py-3 text-lg font-sans border ${field.value === "EUR" ? "border-primary text-primary bg-white" : "border-transparent text-gray-400 bg-[#F3F4F6]"}`}
                      onClick={() => field.onChange("EUR")}
                    >
                      EUR
                    </button>
                  </>
                )}
              />
            </div>
          </div>
          <div className="mb-4">
            <Typography variant="body" className="font-nohemi mb-1">
              Destination Wallet
            </Typography>
            <Typography variant="body" className="text-gray-500 mb-3 text-sm">
              By default, Kaprex creates a wallet for you to receive your funds.
              <br />
              You can also choose to use an external MetaMask wallet instead.
            </Typography>
            <Controller
              name="wallet"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col md:flex-row gap-4">
                  <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 rounded-full border px-0 py-3 text-base font-sans ${field.value === "kaprex" ? "border-primary text-primary bg-white font-semibold" : "border-black text-black bg-white"}`}
                    onClick={() => field.onChange("kaprex")}
                  >
                    <KaprexLogoIcon /> Kaprex Wallet
                  </button>
                  <button
                    type="button"
                    className={`flex-1 flex items-center justify-center gap-2 rounded-full border px-0 py-3 text-base font-sans ${field.value === "metamask" ? "border-primary text-primary bg-white font-semibold" : "border-black text-black bg-white"}`}
                    onClick={() => {
                      field.onChange("metamask");
                      onClick();
                    }}
                  >
                    <MetamaskIcon />
                    {label}
                  </button>
                </div>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full md:w-3/4 font-medium text-base"
            >
              Create Account
            </Button>
            <Typography
              variant="body"
              className="text-gray-400 text-xs md:text-sm mt-2 md:mt-0 md:ml-4"
            >
              Disclaimer: Kaprex is not a remittance service; it facilitates
              crypto transactions through on-ramp and off-ramp solutions,
              enabling users to buy and sell digital assets seamlessly.
            </Typography>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BusinessDashboard;
