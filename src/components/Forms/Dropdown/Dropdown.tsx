import "./Dropdown.scss";
import { DropdownProps } from "./Dropdown.type";

function Dropdown({ options, formControl, bottomBorder = true }: DropdownProps) {
    return (
        <div className={`dropdown ${bottomBorder ? "border-bottom" : ""}`}>
            <select onChange={formControl.onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
