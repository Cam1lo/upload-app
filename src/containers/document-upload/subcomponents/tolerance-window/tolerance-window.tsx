import Time from "../../../../components/forms/time/time";
import Toggle from "../../../../components/forms/toggle/toggle";
import "./tolerance-window.scss";
import { ToleranceWindowProps } from "./tolerance-window.type";

function ToleranceWindow({ toggleformControl, timeFormControl }: ToleranceWindowProps) {
    return (
        <div className="tolerance-window">
            <Toggle title="Tolerance Window:" formControl={toggleformControl} label="Toggle ON" />
            {toggleformControl.value ? (
                <>
                    <div className="vertical-line"></div>
                    <Time formControl={timeFormControl} label="Select Tolerance Level" />
                </>
            ) : null}
        </div>
    );
}
export default ToleranceWindow;
