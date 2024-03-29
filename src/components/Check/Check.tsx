import "./check.scss";
import { CheckProps } from "./check.type";

function Check({ title, status }: CheckProps) {
    return (
        <div className="check border-bottom">
            <span className="title">{title}</span>
            <div className={status.color + " label"}>{status.label}</div>
        </div>
    );
}
export default Check;
