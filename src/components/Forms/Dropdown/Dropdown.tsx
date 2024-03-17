import FormControl from "../../../models/FormControl";
import "./Dropdown.scss";

type Props = {
    options: { value: string; label: string }[];
    formControl: FormControl<string>;
};

function Dropdown({ options, formControl }: Props) {
    return (
        <div className="dropdown border-bottom">
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
