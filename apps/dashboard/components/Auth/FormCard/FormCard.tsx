"use client";

import React from "react";
import { FormHeader } from "../FormHeader/FormHeader";

interface FormCardProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}

const FormCard: React.FC<FormCardProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <FormHeader title={title} subtitle={subtitle} />
      <div className="bg-white rounded-2xl shadow p-6 w-full max-w-[600px] mt-7">
        {children}
      </div>
    </>
  );
};

export default FormCard;
