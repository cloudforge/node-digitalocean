import { CreateVPCRequest } from "./dto/requests/create-vpc-request.dto";
import { ListVPCRequestOptions } from "./dto/requests/list-vpc-request-dto";
import { CreateVPCResponse } from "./dto/responses/create-vpc-response.dto";
import { ListVPCResponse } from "./dto/responses/list-vpc-response-dto";
import { AxiosInstance } from 'axios';
import { GetVPCResponse } from "./dto/responses/get-vpc-response.dto";
export default class VPC {
    private http;
    private readonly basePath;
    constructor(http: AxiosInstance);
    getAll(options?: ListVPCRequestOptions): Promise<ListVPCResponse>;
    create(options: CreateVPCRequest): Promise<CreateVPCResponse>;
    getById(id: string): Promise<GetVPCResponse>;
    deleteById(id: string): Promise<void>;
}
