"use client";

import React from "react";
import { Button, Typography } from "@repo/ui/atoms";
import { CheckCircle2 } from "lucide-react";

const IdentificationTab = () => (
  <div className="space-y-8">
    {/* User Info Card */}
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center space-x-6">
      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/50" />
      </div>
      <div>
        <Typography variant="body" className="text-gray-500">
          Individual Account
        </Typography>
        <Typography variant="h2" className="font-semibold mt-1">
          Davon Kazeem
        </Typography>
        <div className="flex items-center space-x-2 text-green-600 mt-2">
          <CheckCircle2 size={16} />
          <Typography variant="small" className="font-medium">
            Verified
          </Typography>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Personal Information */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
        <Typography variant="h3" className="font-semibold mb-6">
          Personal Information
        </Typography>
        <div className="space-y-6">
          <InfoRow label="Full Name" value="David Kazeem" />
          <InfoRow label="Date of Birth" value="22 Oct 1992" />
          <InfoRow
            label="Address"
            value="Kumasi, Ghana"
            action="Edit address >"
          />
          <InfoRow label="Identification Document" value="A1******2" />
          <InfoRow label="Email Address" value="davonkaze1@gmail.com" />
        </div>
      </div>

      {/* Verification Level */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <Typography variant="h3" className="font-semibold mb-6">
          Verification Level
        </Typography>
        <div className="flex justify-between items-start">
          <Typography variant="body" className="font-semibold">
            Individual
          </Typography>
          <div className="flex items-center space-x-1 text-green-600">
            <CheckCircle2 size={14} />
            <Typography variant="small">Verified</Typography>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-500 space-y-2 mt-4">
          <li>Send/Receive Crypto,</li>
          <li>Fiat Onramp/Offramp,</li>
          <li>Cards,</li>
        </ul>
        <Button variant="outline" className="w-full mt-6">
          Switch to business
        </Button>
      </div>
    </div>
  </div>
);

const InfoRow = ({
  label,
  value,
  action,
}: {
  label: string;
  value: string;
  action?: string;
}) => (
  <div className="flex justify-between items-center border-b border-gray-200 pb-4">
    <div>
      <Typography variant="small" className="text-gray-500">
        {label}
      </Typography>
      <Typography variant="body" className="font-medium mt-1">
        {value}
      </Typography>
    </div>
    {action && (
      <button className="text-primary font-medium text-sm">{action}</button>
    )}
  </div>
);

export default IdentificationTab;
