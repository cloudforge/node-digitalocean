import RequestHelper from './request-helper';

import Account from './modules/account';
import Actions from './modules/actions';
import CDN from './modules/cdn';
import Certificates from './modules/certificates';
import Databases from './modules/databases';
import Domains from './modules/domains';
import Droplets from './modules/droplets';
import Firewalls from './modules/firewalls';
import FloatingIPs from './modules/floating-ip';
import Images from './modules/images';
import Keys from './modules/keys';
import Kubernetes from './modules/kubernetes';
import LoadBalancers from './modules/load-balancers';
import Projects from './modules/projects';
import Regions from './modules/regions';
import Reports from './modules/reports';
import Sizes from './modules/sizes';
import Snapshots from './modules/snapshots';
import Tags from './modules/tags';
import Volumes from './modules/volumes';
import createHTTPClient from './http';
import VPC from './modules/vpc/vpc';

interface Config {
    apiUrl?: string;
    pageSize: number;
}

export default class DigitalOcean {
    public readonly account: Account;
    public readonly actions: Actions;
    public readonly cdn: CDN;
    public readonly certificates: Certificates;
    public readonly databases: Databases;
    public readonly domains: Domains;
    public readonly droplets: Droplets;
    public readonly firewalls: Firewalls;
    public readonly floatingIPs: FloatingIPs;
    public readonly images: Images;
    public readonly keys: Keys;
    public readonly kubernetes: Kubernetes;
    public readonly loadBalancers: LoadBalancers;
    public readonly projects: Projects;
    public readonly regions: Regions;
    public readonly reports: Reports;
    public readonly sizes: Sizes;
    public readonly snapshots: Snapshots;
    public readonly tags: Tags;
    public readonly volumes: Volumes;
    public readonly vpcs: VPC;

    constructor(token: string, config?: Config) {
        let pageSize = config?.pageSize || 10;
        const requestHelper = new RequestHelper(token, {
            apiUrl: config?.apiUrl || ""
        });
        const httpClient = createHTTPClient(token, {
            baseURL: config?.apiUrl
        });

        this.account = new Account(pageSize, requestHelper);
        this.actions = new Actions(pageSize, requestHelper);
        this.cdn = new CDN(pageSize, requestHelper);
        this.certificates = new Certificates(pageSize, requestHelper);
        this.databases = new Databases(pageSize, requestHelper);
        this.domains = new Domains(pageSize, requestHelper);
        this.droplets = new Droplets(pageSize, requestHelper);
        this.firewalls = new Firewalls(pageSize, requestHelper);
        this.floatingIPs = new FloatingIPs(pageSize, requestHelper);
        this.images = new Images(pageSize, requestHelper);
        this.keys = new Keys(pageSize, requestHelper);
        this.kubernetes = new Kubernetes(pageSize, requestHelper);
        this.loadBalancers = new LoadBalancers(pageSize, requestHelper);
        this.projects = new Projects(pageSize, requestHelper);
        this.regions = new Regions(pageSize, requestHelper);
        this.reports = new Reports(pageSize, requestHelper);
        this.sizes = new Sizes(pageSize, requestHelper);
        this.snapshots = new Snapshots(pageSize, requestHelper);
        this.tags = new Tags(pageSize, requestHelper);
        this.volumes = new Volumes(pageSize, requestHelper);
        this.vpcs = new VPC(httpClient);
    }
}
