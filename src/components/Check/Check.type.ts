type CheckProps = {
    title: string;
    status: CheckStatus;
};

type CheckStatus = {
    label: string;
    color: CheckColors;
};

enum CheckColors {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    INFO = "info",
    DEFAULT = "default",
    DISABLED = "disabled",
}

export type { CheckStatus, CheckProps }
export { CheckColors }
