import IFormControl from "../../../core/interfaces/IFormControl";
import "./Dropdown.scss";

type Props = {
    options: { value: string; label: string }[];
    formControl: IFormControl<string>;
    bottomBorder?: boolean;
};

function Dropdown({ options, formControl, bottomBorder = true }: Props) {
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
