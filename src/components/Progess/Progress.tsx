import "./Progress.scss";
import FileIcon from "../../assets/icons/file-image.png";

function Progress() {
    return (
        <div className="border-bottom">
            <div className="progress">
                <div className="col1">
                    <img src={FileIcon} alt="" />
                </div>
                <div className="col2">
                    <div className="top">
                        <div className="name">WN-DAL-0726-NH20166.csv</div>
                        <div className="size">5.7MB</div>
                    </div>
                    <div className="bottom">
                        <div className="bar">
                            <div className="fill" style={{ width: "2%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;
