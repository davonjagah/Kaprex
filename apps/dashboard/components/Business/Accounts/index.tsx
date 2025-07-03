"use client";

import React, { useState } from "react";
import { Typography, Button } from "@repo/ui/atoms";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CopyIcon, SolanaIcon, WagesIcon } from "@repo/ui/icons";
import { Dropdown } from "@repo/ui/molecules";
import { Download, Search } from "lucide-react";
import { FundingAccount } from "../../../types/api/wallets";
// import { useParams } from "next/navigation";

const mockAccount = {
  name: "Operations",
  balance: 8000,
  deposits: 1234.56,
  withdrawals: 1234.56,
  details: {
    accountName: "Prime OTC",
    bankName: "Lead Bank",
    accountNumber: "0011223456",
    routingNumber: "0011223456",
    accountType: "Personal Checking",
    accountAddress: "9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA",
  },
};

const mockTransactions = [
  {
    id: 1,
    amount: 500,
    currency: "USD",
    desc: "Deposited",
    method: "Funded through ACH",
    date: "2025-03-12T15:45:00Z",
    status: "Completed",
  },
  {
    id: 2,
    amount: 125.34,
    currency: "EUR",
    desc: "Deposited",
    method: "Funded through Wire",
    date: "2025-03-12T15:42:00Z",
    status: "Failed",
  },
  {
    id: 3,
    amount: 200,
    currency: "USD",
    desc: "Deposited",
    method: "Funded through ACH",
    date: "2025-04-10T10:30:00Z",
    status: "Completed",
  },
];

const months = [
  { label: "March 2025", value: "2025-03" },
  { label: "April 2025", value: "2025-04" },
];

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Amount", value: "amount" },
  { label: "Status", value: "status" },
];

// const mockCrypto = {
//   address: "33QQbKTNnDPaAgR2oLefEPdYfsrNrWdCwYQo2MJ8ovWc",
//   network: "Ethereum",
//   minDeposit: "More than 0.001 USDT",
// };

const Accounts = ({ accounts }: { accounts: FundingAccount }) => {
  //   const params = useParams();
  console.log(accounts, "accounts");
  const [tab, setTab] = useState<"bank" | "crypto">("bank");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [month, setMonth] = useState(months[0]?.value || "");
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  // Filtering
  const filtered = mockTransactions.filter((tx) => {
    // Month filter
    const txMonth = tx.date.slice(0, 7);
    if (month && txMonth !== month) return false;
    // Search filter
    const searchLower = search.toLowerCase();
    return (
      tx.amount.toString().includes(searchLower) ||
      tx.currency.toLowerCase().includes(searchLower) ||
      tx.method.toLowerCase().includes(searchLower) ||
      tx.status.toLowerCase().includes(searchLower) ||
      tx.desc.toLowerCase().includes(searchLower)
    );
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "amount") {
      return b.amount - a.amount;
    } else if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  // Export to PDF
  const handleExport = async () => {
    const doc = new jsPDF();

    // 1️⃣ Load your font file as ArrayBuffer
    const fontUrl = "/fonts/Nohemi/Nohemi-Regular.ttf";
    const fontResp = await fetch(fontUrl);
    const fontBuffer = await fontResp.arrayBuffer();

    // 2️⃣ Convert to Base64 and register with jsPDF
    const base64Font = arrayBufferToBase64(fontBuffer);
    doc.addFileToVFS("Nohemi-Regular.ttf", base64Font);
    doc.addFont("Nohemi-Regular.ttf", "Nohemi", "normal");

    // 3️⃣ Use that font for the rest of the document
    doc.setFont("Nohemi", "normal");
    doc.setFontSize(16);
    // Use the Kaprex PNG logo from public/images/kaprex.png
    const logoUrl = window.location.origin + "/images/kaprex.png";
    // jsPDF can use a URL for images in browsers
    doc.addImage(logoUrl, "PNG", 14, 8, 40, 12);
    doc.text(`${mockAccount.name} Transactions`, 14, 28);
    autoTable(doc, {
      startY: 34,
      head: [["Amount", "Currency", "Description", "Method", "Date", "Status"]],
      body: sorted.map((tx) => [
        tx.amount,
        tx.currency,
        tx.desc,
        tx.method,
        new Date(tx.date).toLocaleString(),
        tx.status,
      ]),
      styles: {
        font: "Nohemi", // match the alias you registered
        fontStyle: "normal",
        fontSize: 10,
      },
      headStyles: {
        fillColor: "#ff5500",
        textColor: [255, 255, 255],
        font: "Nohemi",
        fontStyle: "normal",
      },
      bodyStyles: {
        font: "Nohemi",
        fontStyle: "normal",
        fontSize: 10,
        textColor: "#000000",
      },
    });
    doc.save(`${mockAccount.name}-transactions.pdf`);
  };

  const accountDetailsArray = [
    { label: "Account Name", value: mockAccount.details.accountName },
    { label: "Bank Name", value: mockAccount.details.bankName },
    { label: "Account Number", value: mockAccount.details.accountNumber },
    { label: "Routing Number", value: mockAccount.details.routingNumber },
    { label: "Account Type", value: mockAccount.details.accountType },
    { label: "Address", value: mockAccount.details.accountAddress },
  ];

  return (
    <div className="w-full">
      <Typography variant="h1" className="md:text-4xl mb-8 font-normal">
        {mockAccount.name}
      </Typography>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Left: Summary Cards */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl py-5 px-10 flex flex-col gap-2">
            <WagesIcon className="text-[#726D8C] mb-4" />
            <Typography variant="body" className="text-gray-400 text-sm">
              Total Balance
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi text-3xl font-normal flex items-center gap-2"
            >
              {mockAccount.balance.toLocaleString()}{" "}
              <span className="text-lg text-gray-400 font-normal">USD</span>
            </Typography>
          </div>
          <div className="bg-white rounded-2xl py-5 px-10 flex flex-col gap-2">
            <WagesIcon className="text-[#726D8C] mb-4" />
            <Typography variant="body" className="text-gray-400 text-sm">
              Total Balance
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi text-3xl font-normal flex items-center gap-2"
            >
              {mockAccount.balance.toLocaleString()}{" "}
              <span className="text-lg text-gray-400 font-normal">EUR</span>
            </Typography>
          </div>
          <div className="bg-white rounded-2xl py-5 px-10 flex flex-col gap-2">
            <WagesIcon className="text-[#726D8C] mb-4" />
            <Typography variant="body" className="text-gray-400 text-sm">
              Total Balance
            </Typography>
            <Typography
              variant="h2"
              className="font-nohemi text-3xl font-normal flex items-center gap-2"
            >
              {mockAccount.balance.toLocaleString()}{" "}
              <span className="text-lg text-gray-400 font-normal">USD</span>
            </Typography>
          </div>
        </div>
        {/* Right: Account Details */}
        <div className="flex-1 bg-white rounded-2xl p-7">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <Typography
              variant="h2"
              className="font-nohemi text-xl md:text-2xl font-normal mb-4 md:mb-0"
            >
              Account Details
            </Typography>
            <div className="flex gap-6">
              <button
                className={`font-nohemi text-base border-b-2 px-2 pb-1 ${tab === "bank" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-400"}`}
                onClick={() => setTab("bank")}
              >
                Bank Transfer
              </button>
              <button
                className={`font-nohemi text-base border-b-2 px-2 pb-1 ${tab === "crypto" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-400"}`}
                onClick={() => setTab("crypto")}
              >
                Crypto
              </button>
            </div>
          </div>
          {tab === "bank" ? (
            <div className="space-y-4">
              {accountDetailsArray.map((item) => (
                <div key={item.label}>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-xs"
                  >
                    {item.label}
                  </Typography>
                  <div className="flex items-center justify-between gap-2">
                    <Typography variant="body" className="font-nohemi">
                      {item.value}
                    </Typography>
                    <Button
                      variant="text"
                      size="sm"
                      className="text-gray-400"
                      onClick={async () => {
                        await navigator.clipboard.writeText(item.value);
                        setCopiedLabel(item.label);
                        setTimeout(() => setCopiedLabel(null), 1000);
                      }}
                    >
                      {copiedLabel === item.label ? "Copied!" : <CopyIcon />}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#F7F7FA] rounded-2xl flex flex-col items-center w-full">
              <Typography
                variant="body"
                className="font-nohemi text-gray-400 text-sm h-40 flex items-center justify-center"
              >
                Coming Soon
              </Typography>
              {/* <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-xl mx-auto">
                <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    <rect width="120" height="120" rx="16" fill="#F3F4F6" />
                    <text
                      x="50%"
                      y="50%"
                      text-anchor="middle"
                      dy=".3em"
                      font-size="16"
                      fill="#bbb"
                    >
                      QR
                    </text>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {usdcIcon}
                    <Typography variant="body" className="font-nohemi text-lg">
                      USDC
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      variant="body"
                      className="text-gray-400 font-nohemi text-sm mb-1"
                    >
                      Select Network
                    </Typography>
                    <SelectField className="w-full">
                      <option value="Ethereum">Ethereum</option>
                      <option value="Polygon">Polygon</option>
                      <option value="Solana">Solana</option>
                    </SelectField>
                  </div>
                  <div>
                    <Typography
                      variant="body"
                      className="text-gray-400 font-nohemi text-sm mb-1"
                    >
                      Address
                    </Typography>
                    <div className="flex items-center gap-2">
                      <Typography
                        variant="body"
                        className="font-nohemi text-base break-all"
                      >
                        {mockCrypto.address}
                      </Typography>
                      <Button
                        variant="text"
                        size="sm"
                        className="text-gray-400"
                      >
                        <CopyIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full max-w-xl mt-6 text-gray-400 text-sm font-nohemi">
                <span>Minimum Deposit</span>
                <span>{mockCrypto.minDeposit}</span>
              </div> */}
            </div>
          )}
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-12">
          <Typography variant="body" className="font-nohemi text-gray-500 mb-4">
            Recent Transactions
          </Typography>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6 h-full">
            <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 border border-[#DDDCE4] h-12 w-80 ">
              <Search strokeWidth={1} className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search transaction"
                className="flex-1 bg-transparent outline-none font-sans text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
              <Button
                variant="outline"
                className="rounded-full px-6 bg-white border border-[#DDDCE4]  text-[#7C7B80] font-sans text-base font-semibold h-12"
                onClick={handleExport}
              >
                Export{" "}
                <Download strokeWidth={1} className="w-4 h-4 ml-2 text-black" />
              </Button>
              <Dropdown
                options={sortOptions.map((opt) => ({
                  label: opt.label,
                  value: opt.value,
                }))}
                value={sortBy}
                onChange={setSortBy}
                className="rounded-full px-6 bg-white border border-[#DDDCE4]  flex items-center h-12"
                labelClassName="text-[#7C7B80] font-sans text-base font-semibold"
              />
              <Dropdown
                options={months.map((m) => ({
                  label: m.label,
                  value: m.value,
                }))}
                value={month}
                onChange={setMonth}
                className="rounded-full px-6 bg-white border border-[#DDDCE4]  flex items-center h-12"
                labelClassName="text-[#7C7B80] font-sans text-base font-semibold"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6">
          {sorted.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b last:border-0 py-4"
            >
              <div className="flex items-start gap-4">
                <SolanaIcon className="h-12 w-12" />
                <div>
                  <Typography variant="body" className="font-nohemi text-base">
                    {tx.amount} {tx.currency} {tx.desc}
                  </Typography>
                  <Typography variant="body" className="text-gray-400 text-sm">
                    {tx.method}
                  </Typography>
                  <Typography variant="body" className="text-gray-400 text-xs">
                    {new Date(tx.date).toLocaleString()}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography
                  variant="body"
                  className={`font-nohemi text-base ${tx.status === "Completed" ? "text-green-500" : "text-red-400"}`}
                >
                  {tx.status}
                </Typography>
              </div>
            </div>
          ))}
          {sorted.length === 0 && (
            <div className="text-center text-gray-400 py-8 font-nohemi">
              No transactions found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
