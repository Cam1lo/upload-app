type RadioButtonsGroupProps = {
    options: Array<RadioButtonsOption>;
    id: string;
    title: string;
};

type RadioButtonsOption = {
    value: string;
    label: string;
}

export type { RadioButtonsGroupProps, RadioButtonsOption };