declare const messages: (locale: string) => {
    microphone: {
        deniedMessage: string;
        steps: {
            platform: string;
            browser: string;
            steps: {
                message: string;
                imageName: string;
            }[];
        }[];
    };
    location: {
        deniedMessage: string;
        steps: {
            platform: string;
            browser: string;
            steps: {
                message: string;
                imageName: string;
            }[];
        }[];
    };
};
export default messages;
