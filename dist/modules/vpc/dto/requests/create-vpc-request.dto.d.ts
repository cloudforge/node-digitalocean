export interface CreateVPCRequest {
    name: string;
    region: string;
    description?: string;
    ip_range?: string;
}
