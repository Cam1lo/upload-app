import { useFormikContext } from "formik";
import Time from "../../../../components/forms/time/time";
import Toggle from "../../../../components/forms/toggle/toggle";
import "./tolerance-window.scss";
import { ToleranceWindowProps } from "./tolerance-window.type";

function ToleranceWindow({ errors, touched, toleranceWindowId, toleranceWindowTimeId }: ToleranceWindowProps) {
    const { values, setFieldValue } = useFormikContext<any>();

    return (
        <div className="tolerance-window">
            <span className="title">Tolerance Window</span>
            <div className="tolerance-form-container">
                <Toggle
                    value={values[toleranceWindowId]}
                    label={`${values[toleranceWindowId] ? "Toggle ON" : "Toggle OFF"}`}
                    onChange={(value: boolean) => setFieldValue(toleranceWindowId, value)}
                />
                {values[toleranceWindowId] ? (
                    <>
                        <div className="vertical-line"></div>
                        <Time id={toleranceWindowTimeId} label="Select Tolerance Level" />
                    </>
                ) : null}
            </div>
            {errors && touched ? <p className="error-msg">Time for tolerance window is required!</p> : null}
        </div>
    );
}
export default ToleranceWindow;
