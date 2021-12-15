import { Region } from '../../shared/entities/region';
export declare type Size = {
    slug: string;
    memory: number;
    vcpus: number;
    disk: number;
    transfer: number;
    price_monthly: number;
    price_hourly: number;
    regions: Region[];
    available: boolean;
    description: string;
};
