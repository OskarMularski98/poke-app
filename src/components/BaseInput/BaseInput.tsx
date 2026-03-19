import { ChangeEvent, memo } from "react";
import styles from "./BaseInput.module.scss";

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
        className={styles.container}
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
