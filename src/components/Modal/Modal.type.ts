type ModalProps = {
    title: string;
    children?: React.ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
};

export type { ModalProps };