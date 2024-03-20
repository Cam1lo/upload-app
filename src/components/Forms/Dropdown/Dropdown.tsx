import { Field } from "formik";
import "./dropdown.scss";
import { DropdownOption, DropdownProps } from "./dropdown.type";
import { useState } from "react";

function Dropdown({ errors, touched, options, id, bottomBorder = true, onChange }: DropdownProps) {
    const [value, setValue] = useState("");

    const handleChange = (value: string) => {
        if (onChange) {
            setValue(value);
            onChange(value);
        }
    };

    return (
        <div className={`dropdown ${bottomBorder ? "border-bottom" : ""}`}>
            {onChange ? (
                <Field as="select" value={value} onChange={handleChange} className="dropdown-select">
                    {options.map((option: DropdownOption) => (
                        <option
                            hidden={option.value === ""}
                            disabled={option.value === ""}
                            onChange={() => onChange(option.value)}
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Field>
            ) : (
                <Field as="select" id={id} name={id} className="dropdown-select">
                    {options.map((option: DropdownOption) => (
                        <option
                            hidden={option.value === ""}
                            disabled={option.value === ""}
                            onChange={onChange}
                            key={option.value}
                            value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Field>
            )}
            {errors && touched ? <p className="error-msg">{errors}</p> : null}{" "}
        </div>
    );
}

export default Dropdown;
