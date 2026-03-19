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
      <div className={styles.container}>
        <input
          className={styles.content}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button className={styles.button}>
          <span>Search</span>
        </button>
      </div>
    );
  },
);

BaseInput.displayName = "BaseInput";

export default BaseInput;
