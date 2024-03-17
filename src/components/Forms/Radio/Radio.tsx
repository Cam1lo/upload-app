import FormControl from "../../../models/FormControl";
import "./Radio.scss";

type Props = {
    options: { value: any; label: string }[];
    title: string;
    formControl: FormControl<any>;
};

function Radio({ title, options, formControl }: Props) {
    return (
        <div className="radio border-bottom">
            <span className="title">{title}</span>
            <div className="options-group">
                {options.map((option) => (
                    <div className="option" key={option.label}>
                        <input type="radio" checked={option.value === true} value={option.value} name={title} />
                        <span>{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Radio;
