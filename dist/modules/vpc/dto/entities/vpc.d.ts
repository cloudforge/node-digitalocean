export interface VPC {
    id: string;
    urn: string;
    name: string;
    description: string;
    region: string;
    ip_range: string;
    default: boolean;
    created_at: string;
}
