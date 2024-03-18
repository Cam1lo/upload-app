import Time from "../../../../components/Forms/Time/Time";
import Toggle from "../../../../components/Forms/Toggle/Toggle";
import "./ToleranceWindow.scss";
import { ToleranceWindowProps } from "./ToleranceWindow.type";

function ToleranceWindow({ toggleformControl, timeFormControl }: ToleranceWindowProps) {
    return (
        <div className="tolerance-window">
            <Toggle title="Tolerance Window:" formControl={toggleformControl} label="Toggle ON" />
            <div className="vertical-line"></div>
            <Time formControl={timeFormControl} label="Select Tolerance Level" />
        </div>
    );
}
export default ToleranceWindow;
