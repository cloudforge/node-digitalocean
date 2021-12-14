interface HTTPClientOptions {
    baseURL?: string;
}
export default function createHTTPClient(token: string, options?: HTTPClientOptions): import("axios").AxiosInstance;
export {};
