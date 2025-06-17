import TabSwitcher from "../TabSwitcher/TabSwitcher";

const TABS = [
  { label: "Fund", value: "fund", href: "/fund" },
  { label: "Pay", value: "pay", href: "/pay" },
  { label: "Buy Crypto", value: "buy-crypto", href: "/buy-crypto" },
  { label: "Sell Crypto", value: "sell-crypto", href: "/sell-crypto" },
];

const TransactionTabSwitcher = () => {
  return (
    <>
      <TabSwitcher tabs={TABS} />
    </>
  );
};

export default TransactionTabSwitcher;
