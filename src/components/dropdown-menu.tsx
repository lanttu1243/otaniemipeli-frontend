import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

type WithNameAndId = { id: string | number; name: string };

type PickerProps<T extends WithNameAndId> = {
  buttonText: string;
  options: T[];
  selectedOption: T | undefined;
  setSelectedOption: React.Dispatch<React.SetStateAction<T | undefined>>;
};

export default function DropdownMenu<T extends WithNameAndId>(
  { buttonText,
    options,
    selectedOption,
    setSelectedOption,
  }: PickerProps<T>) {
  return (
    <Menu>
      <MenuButton
        className="w-full button center text-lg">{buttonText}</MenuButton>
      <MenuItems anchor="right" className="text-base text-gray-900 font-bold rounded-2xl z-50">
        {options
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((option) => (
            <MenuItem key={option.id}>
              <div className="w-full bg-amber-800 data-focus:bg-amber-700 hover:bg-amber-600 p-3"
                   onClick={() =>
                     setSelectedOption(
                       (prev) =>
                         (selectedOption && prev?.id === option.id) ? undefined : option
                     )}>
                <p>
                  {option.name}
                </p>
              </div>
            </MenuItem>
          ))
        }
      </MenuItems>
    </Menu>
  )
}
