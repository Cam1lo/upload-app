import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import IFormControl from "../../../core/interfaces/IFormControl";
import "./RadioButtonsGroup.scss";

type Props = {
    options: { value: string; label: string }[];
    formControl: IFormControl<string>;
    title: string;
};

export default function RadioButtonsGroup({ options, formControl, title }: Props) {
    return (
        <FormControl className="radio">
            <span className="title">{title}</span>
            <RadioGroup defaultValue={formControl.value} row className="options-group">
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
                        onChange={formControl.onChange}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
