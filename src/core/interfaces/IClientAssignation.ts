export default interface IClientAssignation {
    name: string;
    clients: { value: string, label: string }[];
    time: string | null;
};