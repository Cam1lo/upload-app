import "./dropdown.scss";
import { DropdownOption, DropdownProps } from "./dropdown.type";

function Dropdown({ options, formControl, bottomBorder = true }: DropdownProps) {
    return (
        <div className={`dropdown ${bottomBorder ? "border-bottom" : ""}`}>
            <select
                defaultValue={""}
                onChange={(e: any) => {
                    formControl.onChange(e.target.value);
                }}>
                {options.map((option: DropdownOption) => (
                    <option
                        hidden={option.value === ""}
                        disabled={option.value === ""}
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {!formControl.isValid && formControl.touched ? <p className="error-msg">{formControl.errorMsg}</p> : null}
        </div>
    );
}

export default Dropdown;
