import axios from 'axios';

interface HTTPClientOptions {
  baseURL?: string;
}

export default function createHTTPClient(token: string, options?: HTTPClientOptions) {
  return axios.create({
    baseURL: options?.baseURL ? options!.baseURL : 'https://api.digitalocean.com/v2/',
    headers: {
      'authorization': `Bearer ${token}`,
      'content_type': 'application/json'
    }
  });
}
