import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./radio-buttons-group.scss";
import { RadioButtonsGroupProps } from "./radio-buttons-group.type";
import { useState } from "react";

export default function RadioButtonsGroup({ options, formControl, title }: RadioButtonsGroupProps) {
    const [value, setValue] = useState(formControl.value);

    return (
        <FormControl className="radio">
            <span className="title">{title}</span>
            <RadioGroup value={value} row className="options-group">
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={
                            <Radio
                                sx={{
                                    "&.Mui-checked": {
                                        color: "#082c4c",
                                    },
                                }}
                            />
                        }
                        label={option.label}
                        onChange={(e: any) => {
                            formControl.onChange(e.target.value);
                            setValue(e.target.value);
                        }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
