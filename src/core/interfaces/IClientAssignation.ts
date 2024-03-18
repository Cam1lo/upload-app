export default interface IClientAssignation {
    name: string;
    clients: { value: string, label: string }[];
    time: Date | null;
};