import "./Check.scss";

type Props = {
    title: string;
    status: { label: string; color: "success" | "warning" | "error" | "info" | "default" | "disabled" };
};

function Check({ title, status }: Props) {
    return (
        <div className="check border-bottom">
            <span className="title">{title}</span>
            <div className={status.color + " label"}>{status.label}</div>
        </div>
    );
}
export default Check;
