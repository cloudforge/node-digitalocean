import RequestHelper from "../../request-helper";
import { CreateVPCRequest } from "./dto/requests/create-vpc-request.dto";
import { ListVPCRequestOptions } from "./dto/requests/list-vpc-request-dto";
import { CreateVPCResponse } from "./dto/responses/create-vpc-response.dto";
import { ListVPCResponse } from "./dto/responses/list-vpc-response-dto";
import isEmpty from 'lodash.isempty';
import { AxiosInstance } from 'axios';
import { GetVPCResponse } from "./dto/responses/get-vpc-response.dto";


const regionSlugs = [
  "nyc1",
  "sfo1",
  "nyc2",
  "ams2",
  "sgp1",
  "lon1",
  "nyc3",
  "ams3",
  "fra1",
  "tor1",
  "sfo2",
  "blr1",
  "sfo3"
];

export default class VPC {
  private readonly basePath: string = 'vpcs';
  constructor(private http: AxiosInstance) { }

  getAll(options?: ListVPCRequestOptions): Promise<ListVPCResponse> {
    return this.http.get(this.basePath, {
      params: {
        per_page: options?.pageSize ? options!.pageSize : 10,
        page: options?.page ? options!.page : 10
      }
    }).then(response => response.data);
  }

  create(options: CreateVPCRequest): Promise<CreateVPCResponse> {
    return new Promise((resolve, reject) => {
      if (isEmpty(options.name.trim())) {
        reject(new Error("'name' is required"));
      }

      if (!regionSlugs.includes(options.region)) {
        reject(new Error(`'region' is required and should be one of ${regionSlugs}`));
      }

      return this.http.post(this.basePath, {
        name: options.name,
        description: options.description || "",
        region: options.region,
        ip_range: options.ip_range || ""
      }).then(response => resolve(response.data))
        .catch(reject);
    });
  }

  getById(id: string): Promise<GetVPCResponse> {
    return new Promise((resolve, reject) => {
      if (isEmpty(id.trim())) {
        reject(new Error("'id' is required"));
      }

      return this.http.get(`${this.basePath}/${id}`)
        .then(response => resolve(response.data))
        .catch(reject);
    });
  }

  deleteById(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (isEmpty(id.trim())) {
        reject(new Error("'id' is required"));
      }

      return this.http.delete(`${this.basePath}/${id}`)
        .then(response => resolve(response.data))
        .catch(reject);
    });
  }
}
