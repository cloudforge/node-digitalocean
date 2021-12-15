import { Droplet } from "../entities/droplet";
export interface CreateSingleDropletResponse {
    droplet: Droplet;
    links: {
        actions: {
            id: number;
            rel: string;
            href: string;
        }[];
    };
}
export interface CreateMultipleDropletsResponse {
    droplets: Droplet[];
    links: {
        actions: {
            id: number;
            rel: string;
            href: string;
        }[];
    };
}
