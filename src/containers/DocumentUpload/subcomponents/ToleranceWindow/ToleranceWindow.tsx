import Time from "../../../../components/Forms/Time/Time";
import Toggle from "../../../../components/Forms/Toggle/Toggle";
import IFormControl from "../../../../core/interfaces/IFormControl";
import "./ToleranceWindow.scss";

function ToleranceWindow({ formControl }: { formControl: IFormControl<boolean> }) {
    return (
        <div className="tolerance-window">
            <Toggle title="Tolerance Window:" formControl={formControl} label="Toggle ON" />
            <div className="vertical-line"></div>
            <Time label="Select Tolerance Level" />
        </div>
    );
}
export default ToleranceWindow;
