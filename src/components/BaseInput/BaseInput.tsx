import { ChangeEvent, memo } from "react";

interface BaseInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const BaseInput = memo(
  ({ value, onChange, onBlur, onFocus }: BaseInputProps) => {
    return (
      <input
        className="border  border-red-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
