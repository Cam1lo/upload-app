import Time from "../../../../components/Forms/Time/Time";
import Toggle from "../../../../components/Forms/Toggle/Toggle";
import IFormControl from "../../../../core/interfaces/IFormControl";
import "./ToleranceWindow.scss";

type Props = {
    toggleformControl: IFormControl<boolean>;
    timeFormControl: IFormControl<Date | null>;
};

function ToleranceWindow({ toggleformControl, timeFormControl }: Props) {
    return (
        <div className="tolerance-window">
            <Toggle title="Tolerance Window:" formControl={toggleformControl} label="Toggle ON" />
            <div className="vertical-line"></div>
            <Time formControl={timeFormControl} label="Select Tolerance Level" />
        </div>
    );
}
export default ToleranceWindow;
