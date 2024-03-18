import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Time.scss";
import { useState } from "react";
import { getTimeGivenDate } from "../../../utils/utils";

type Props = {
    label: string;
};

function Time({ label }: Props) {
    const [isOpened, setIsOpened] = useState(false);
    const [_label, setLabel] = useState(label);
    const triggerTimePicker = () => {
        setIsOpened(true);
    };

    return (
        <div className="time">
            <img className="icon" onClick={triggerTimePicker} src="/assets/icons/time.png" alt="" />
            <span className="label">{_label}</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="hidden">
                    <TimePicker
                        onChange={(e: any) => {
                            if (e.$d) {
                                setLabel(getTimeGivenDate(e.$d));
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
