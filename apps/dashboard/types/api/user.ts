import { VirtualAccountsResponse } from "./wallets";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  dateOfBirth: string;
  address: string;
  identificationDocument: string;
  customerType: "individual" | "business";
  kaprexId: string;
  isTwoFactorEnabled: boolean;
  isEmailVerified: boolean;
  bridgeCustomerId: string;
  createdAt: string;
  updatedAt: string;
  kycStatus: "pending" | "approved" | "rejected";
}

export interface UserProfileResponse {
  user: UserProfile;
  accounts: VirtualAccountsResponse;
}
