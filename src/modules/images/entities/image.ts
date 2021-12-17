import { Regions } from "../../shared/enum/regions";

export enum ImageType {
  BASE = "base",
  SNAPSHOT = "snapshot",
  BACKUP = "backup",
  CUSTOM = "custom"
}

export enum ImageDistribution {
  ArchLinux = "Arch Linux",
  CentOS = "CentOS",
  CoreOS = "CoreOS",
  Debian = "Debian",
  Fedora = "Fedora",
  FedoraAtomic = "Fedora Atomic",
  FreeBSD = "FreeBSD",
  Gentoo = "Gentoo",
  openSUSE = "openSUSE",
  RancherOS = "RancherOS",
  Ubuntu = "Ubuntu",
  Unknown = "Unknown"
}

export enum ImageStatus {
  NEW = "new",
  AVAILABLE = "available",
  PENDING = "pending",
  DELETED = "deleted",
  RETIRED = "retired"
}

export type Image = {
  id: number;
  name: string;
  type: ImageType;
  description: string;
  distribution: ImageDistribution;
  slug: null | string;
  public: boolean;
  regions: Regions[];
  created_at: string;
  min_disk_size: null | number;
  size_gigabytes: null | number;
  tags: null | string[];
  status: ImageStatus;
  error_message: string;
}
