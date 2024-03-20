import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./time.scss";
import { useState } from "react";
import { getTimeGivenDate } from "../../../utils/utils";
import TimeIcon from "../../../assets/icons/time.png";
import { TimeProps } from "./time.type";
import { useFormikContext } from "formik";

function Time({ label, id, onChange }: TimeProps) {
    const { setFieldValue } = useFormikContext<any>();
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
                    {!onChange ? (
                        <TimePicker
                            onChange={(e: any) => {
                                if (id && e.$d) {
                                    setLabel(getTimeGivenDate(e.$d));
                                    setFieldValue(id, e.$d);
                                }
                            }}
                            onAccept={() => {
                                setIsOpened(false);
                            }}
                            onClose={() => {
                                setIsOpened(false);
                            }}
                            open={isOpened}></TimePicker>
                    ) : (
                        <TimePicker
                            onChange={(e: any) => {
                                onChange(e.$d);
                                setLabel(getTimeGivenDate(e.$d));
                            }}
                            onAccept={() => {
                                setIsOpened(false);
                            }}
                            onClose={() => {
                                setIsOpened(false);
                            }}
                            open={isOpened}></TimePicker>
                    )}
                </div>
            </LocalizationProvider>
        </div>
    );
}

export default Time;
