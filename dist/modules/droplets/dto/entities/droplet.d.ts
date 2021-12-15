import { Image } from "../../../images/entities/image";
import { Size } from "../../../shared/entities/droplet-size";
import { Region } from "../../../shared/entities/region";
export declare enum DropletStatus {
    NEW = "new",
    ACTIVE = "active",
    OFF = "off",
    ARCHIVE = "archive"
}
declare enum NetworkTypeV4 {
    PUBLIC = "public",
    PRIVATE = "private"
}
declare enum NetworkTypeV6 {
    PUBLIC = "public"
}
export declare type Droplet = {
    id: number;
    name: string;
    memory: number;
    vcpus: number;
    disk: number;
    locked: boolean;
    status: DropletStatus;
    created_at: string;
    features: string[];
    backup_ids: number[];
    next_backup_window: null | {
        start: string;
        end: string;
    };
    snapshot_ids: number[];
    image: Image;
    volume_ids: string[];
    size: Size;
    size_slug: string;
    networks: {
        v4: {
            ip_address: string;
            netmask: string;
            gateway: string;
            type: NetworkTypeV4;
        }[];
        v6: {
            ip_address: string;
            netmask: number;
            gateway: string;
            type: NetworkTypeV6;
        }[];
    };
    region: Region;
    tags: string[];
    vpc_uuid: string;
};
export {};
