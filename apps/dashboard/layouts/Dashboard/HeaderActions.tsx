import { Dropdown } from "@repo/ui/molecules";
import { ProfileIcon, ChevronDownIcon, NotificationIcon } from "@repo/ui/icons";
import { cn } from "@repo/ui/utils";

export const HeaderActions: React.FC<{
  selected: string;
  onChange(value: string): void;
  onNotificationClick(): void;
  isBusinessSwitched: boolean;
  menuOptions: { label: string; value: string }[];
}> = ({
  selected,
  onChange,
  onNotificationClick,
  isBusinessSwitched,
  menuOptions,
}) => {
  return (
    <div className="flex items-center space-x-4">
      <NotificationIcon
        className="cursor-pointer"
        onClick={onNotificationClick}
      />
      <Dropdown
        options={menuOptions}
        value={selected}
        onChange={onChange}
        showChevron={false}
        className="relative"
        dropdownClassName="w-72 right-0 shadow-lg rounded-none border-none p-8"
        trigger={
          <div className="flex items-center gap-1">
            <ProfileIcon
              className={cn({
                "text-primary": !isBusinessSwitched,
                "text-black": isBusinessSwitched,
              })}
            />
            <ChevronDownIcon className="text-black" />
          </div>
        }
        renderOption={(opt) => (
          <span
            className={opt.value === "logout" ? "text-red-500" : "text-black"}
          >
            {opt.label}
          </span>
        )}
        optionsClassName="py-3 px-4 text-base border-b border-[#DDDCE4] font-medium"
      />
    </div>
  );
};
