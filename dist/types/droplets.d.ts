interface DropletCreationRequest {
    region: string;
    size: string;
    image: string;
    ssh_keys: number[];
    backups: boolean;
    ipv6: boolean;
    /** @deprecated */
    private_networking?: boolean;
    vpc_uuid?: string;
    user_data: any;
    monitoring: boolean;
    volumes: string[];
    tags: string[];
}

export interface CreateSingleDropletsRequest extends DropletCreationRequest {
    name: string;
}

export interface CreateMultipleDropletsRequest extends DropletCreationRequest {
    names: string[];
}
