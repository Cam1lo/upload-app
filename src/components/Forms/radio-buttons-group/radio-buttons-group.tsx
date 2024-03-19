import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./radio-buttons-group.scss";
import { RadioButtonsGroupProps } from "./radio-buttons-group.type";
import { useState } from "react";
import { useFormikContext } from "formik";

export default function RadioButtonsGroup({ options, id, title }: any) {
    const { values, setFieldValue } = useFormikContext<any>();

    return (
        <FormControl className="radio">
            <span className="title">{title}</span>
            <RadioGroup value={values[id]} row className="options-group">
                {options.map((option: any) => (
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
                            setFieldValue(id, e.target.value);
                        }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
