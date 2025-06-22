import { Dropdown } from "@repo/ui/molecules";
import { ProfileIcon, ChevronDownIcon, NotificationIcon } from "@repo/ui/icons";
import { PROFILE_OPTIONS } from "../../constants/profile";

export const HeaderActions: React.FC<{
  selected: string;
  onChange(value: string): void;
  onNotificationClick(): void;
}> = ({ selected, onChange, onNotificationClick }) => (
  <div className="flex items-center space-x-4">
    <NotificationIcon
      className="cursor-pointer"
      onClick={onNotificationClick}
    />
    <Dropdown
      options={PROFILE_OPTIONS}
      value={selected}
      onChange={onChange}
      showChevron={false}
      className="relative"
      dropdownClassName="w-72 right-0 shadow-lg rounded-none border-none p-8"
      trigger={
        <div className="flex items-center gap-1">
          <ProfileIcon className="text-primary" />
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
