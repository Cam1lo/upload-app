import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Time.scss";
import { useState } from "react";
import { getTimeGivenDate } from "../../../utils/utils";
import IFormControl from "../../../core/interfaces/IFormControl";
import TimeIcon from "../../../assets/icons/time.png";

type Props = {
    label: string;
    formControl: IFormControl<Date | null>;
};

function Time({ label, formControl }: Props) {
    const [isOpened, setIsOpened] = useState(false);
    const [_label, setLabel] = useState(label);
    const triggerTimePicker = () => {
        setIsOpened(true);
    };

    return (
        <div className="time">
            <img className="icon" onClick={triggerTimePicker} src={TimeIcon} alt="" />
            <span className="label">{_label}</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="hidden">
                    <TimePicker
                        onChange={(e: any) => {
                            if (e.$d) {
                                setLabel(getTimeGivenDate(e.$d));
                                formControl.onChange(e.$d);
                            }
                        }}
                        onAccept={() => {
                            setIsOpened(false);
                        }}
                        onClose={() => {
                            setIsOpened(false);
                        }}
                        open={isOpened}></TimePicker>
                </div>
            </LocalizationProvider>
        </div>
    );
}

export default Time;
