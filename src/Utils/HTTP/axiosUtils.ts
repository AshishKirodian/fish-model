import axios, { AxiosRequestConfig } from 'axios';

export default class AxiosGateWay {
    public static GET(url: string) {
        var response = axios.get(url);
        response.then(
            result => {
            }
        );
        response.catch(error => {
            // handle universal errors here
        });
        return response;
    }

    public static OPTIONS(url: string) {
        var response = axios.options(url);
        response.then(
            result => {
            }
        );
        response.catch(error => {
            // handle universal errors here
        });
        return response;
    }

    public static POST(url: string, params?: any, uploadCallBAck?: Function) {
        var response = axios.post(url, params);
        response.then(
            result => {
            }
        );
        response.catch(error => {
        });
        return response;
    }

    public static PATCH(url: string, params: any, uploadCallBAck?: Function) {
        var response = axios.patch(url, params);
        response.then(
            result => {
            }
        );
        response.catch(error => {
        });
        return response;
    }

    public static PUT(url: string, params?: any) {
        var response = axios.put(url, params);
        response.then(
            result => {
            }
        );
        response.catch(error => {
        });
        return response;
    }
    public static DELETE(url: string, params?: any) {
        const axiosConfig: AxiosRequestConfig = { data: params, headers: { 'Content-Type': 'application/json' } };
        var response = axios.delete(url, axiosConfig);
        response.then(
            result => {
            }
        );
        response.catch(error => {
        });
        return response;
    }
}





