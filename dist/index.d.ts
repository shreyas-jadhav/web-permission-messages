export type Funcionality = "microphone" | "location";
export declare function getPermissionMessages(functionality: Funcionality, purpose?: string): {
    deniedMessage: string;
    purpose: string;
    steps: never[];
} | {
    deniedMessage: string;
    steps: {
        message: string;
        imageName: string;
    }[];
    purpose?: undefined;
};
