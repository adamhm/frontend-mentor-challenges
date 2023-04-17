import { ChangeEventHandler } from "react";
import styles from "./Checkbox.module.scss";

type Props = {
    checked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ checked = false, onChange }: Props) {
    return (
        <div className={styles.Checkbox}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange?.(e)}
            />
            <span />
        </div>
    );
}

export default Checkbox;