import { Region } from '../../shared/entities/region';

export type Size = {
  slug: string;
  memory: number; // multiple of 8
  vcpus: number;
  disk: number;
  transfer: number; // egress / ingress on public NICs in TB
  price_monthly: number;
  price_hourly: number;
  regions: Region[];
  available: boolean;
  description: string;
}
