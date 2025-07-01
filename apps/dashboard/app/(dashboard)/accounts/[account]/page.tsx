"use client";

import React, { useState } from "react";
import { Typography, Button, SelectField } from "@repo/ui/atoms";
// import { useParams } from "next/navigation";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

const usdcIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#2775CA" />
    <path
      d="M16 7.5C11.3056 7.5 7.5 11.3056 7.5 16C7.5 20.6944 11.3056 24.5 16 24.5C20.6944 24.5 24.5 20.6944 24.5 16C24.5 11.3056 20.6944 7.5 16 7.5ZM16 23.5C12.134 23.5 9 20.366 9 16.5C9 12.634 12.134 9.5 16 9.5C19.866 9.5 23 12.634 23 16.5C23 20.366 19.866 23.5 16 23.5Z"
      fill="white"
    />
    <path
      d="M16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5ZM16 18.5C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5C17.3807 13.5 18.5 14.6193 18.5 16C18.5 17.3807 17.3807 18.5 16 18.5Z"
      fill="white"
    />
  </svg>
);

const mockCrypto = {
  address: "33QQbKTNnDPaAgR2oLefEPdYfsrNrWdCwYQo2MJ8ovWc",
  network: "Ethereum",
  minDeposit: "More than 0.001 USDT",
};

const AccountPage = () => {
  //   const params = useParams();
  const [tab, setTab] = useState<"bank" | "crypto">("bank");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [month, setMonth] = useState(months[0]?.value || "");

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

  return (
    <div className="w-full flex flex-col items-center bg-[#F6F7FB] min-h-screen py-10">
      <div className="w-full max-w-6xl">
        <Typography variant="h1" className="font-nohemi text-3xl mb-8">
          {mockAccount.name}
        </Typography>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Left: Summary Cards */}
          <div className="flex-1 flex flex-col gap-6 min-w-[260px]">
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <Typography variant="body" className="text-gray-400 font-nohemi">
                Total Balance
              </Typography>
              <Typography variant="h2" className="font-nohemi text-3xl">
                {mockAccount.balance.toLocaleString()}{" "}
                <span className="text-base text-gray-400 font-normal">USD</span>
              </Typography>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <Typography
                variant="body"
                className="text-green-500 font-nohemi flex items-center gap-2"
              >
                {/* Deposit icon */}
                <span className="inline-block">{/* icon */}</span> Total
                Deposits
              </Typography>
              <Typography variant="h2" className="font-nohemi text-2xl">
                {mockAccount.deposits.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}{" "}
                <span className="text-base text-gray-400 font-normal">USD</span>
              </Typography>
            </div>
            <div className="bg-white rounded-2xl p-6 flex flex-col gap-2">
              <Typography
                variant="body"
                className="text-orange-500 font-nohemi flex items-center gap-2"
              >
                {/* Withdrawal icon */}
                <span className="inline-block">{/* icon */}</span> Total
                Withdrawal
              </Typography>
              <Typography variant="h2" className="font-nohemi text-2xl">
                {mockAccount.withdrawals.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}{" "}
                <span className="text-base text-gray-400 font-normal">USD</span>
              </Typography>
            </div>
          </div>
          {/* Right: Account Details */}
          <div className="flex-1 bg-white rounded-2xl p-8 min-w-[340px]">
            <div className="flex items-center justify-between mb-6">
              <Typography variant="h2" className="font-nohemi text-xl">
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
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Account Name
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.accountName}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Bank Name
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.bankName}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Account Number
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.accountNumber}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Routing Number
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.routingNumber}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Account Type
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.accountType}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="body"
                    className="text-gray-400 font-nohemi text-sm"
                  >
                    Account Address
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {mockAccount.details.accountAddress}
                    </Typography>
                    <Button variant="text" size="sm" className="text-gray-400">
                      📋
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#F7F7FA] rounded-2xl p-8 flex flex-col items-center w-full">
                <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-xl mx-auto">
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                    {/* Replace with QR code component if available */}
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
                      <Typography
                        variant="body"
                        className="font-nohemi text-lg"
                      >
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
                          📋
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full max-w-xl mt-6 text-gray-400 text-sm font-nohemi">
                  <span>Minimum Deposit</span>
                  <span>{mockCrypto.minDeposit}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="mt-10">
          <Typography variant="body" className="font-nohemi text-gray-500 mb-4">
            Recent Transactions
          </Typography>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2">
              <span className="text-gray-400 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search transaction"
                className="flex-1 bg-transparent outline-none font-nohemi text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="rounded-full px-6"
              onClick={handleExport}
            >
              Export ↓
            </Button>
            <SelectField
              className="rounded-full px-6 min-w-[120px]"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </SelectField>
            <SelectField
              className="rounded-full px-6 min-w-[120px]"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </SelectField>
          </div>
          <div className="bg-white rounded-2xl p-6">
            {sorted.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between border-b last:border-0 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-block w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center">
                    <span className="text-2xl">💸</span>
                  </span>
                  <div>
                    <Typography
                      variant="body"
                      className="font-nohemi text-base"
                    >
                      {tx.amount} {tx.currency} {tx.desc}
                    </Typography>
                    <Typography
                      variant="body"
                      className="text-gray-400 text-sm"
                    >
                      {tx.method}
                    </Typography>
                    <Typography
                      variant="body"
                      className="text-gray-400 text-xs"
                    >
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
    </div>
  );
};

export default AccountPage;
