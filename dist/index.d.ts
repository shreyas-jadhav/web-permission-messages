export type Funcionality = "microphone" | "location";
export declare function getPermissionMessages(functionality: Funcionality, { purpose, locale, }: {
    purpose?: string;
    locale?: "en" | "es";
}): {
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
