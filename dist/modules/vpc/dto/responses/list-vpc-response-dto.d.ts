import { VPC } from "../entities/vpc";
export interface ListVPCResponse {
    vpcs: VPC[];
    meta: {
        total: number;
    };
}
