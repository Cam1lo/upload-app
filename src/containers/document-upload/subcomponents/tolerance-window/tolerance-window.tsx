import Time from "../../../../components/forms/time/time";
import Toggle from "../../../../components/forms/toggle/toggle";
import "./tolerance-window.scss";
import { ToleranceWindowProps } from "./tolerance-window.type";

function ToleranceWindow({ toggleformControl, timeFormControl }: ToleranceWindowProps) {
    return (
        <div className="tolerance-window">
            <span className="title">Tolerance Window</span>
            <div className="tolerance-form-container">
                <Toggle
                    formControl={toggleformControl}
                    label={`${toggleformControl.value ? "Toggle ON" : "Toggle OFF"}`}
                />
                {toggleformControl.value ? (
                    <>
                        <div className="vertical-line"></div>
                        <Time formControl={timeFormControl} label="Select Tolerance Level" />
                    </>
                ) : null}
            </div>
            {toggleformControl.value && timeFormControl.touched && !timeFormControl.value ? (
                <p className="error-msg">Time for tolerance window is required!</p>
            ) : null}
        </div>
    );
}
export default ToleranceWindow;
