import axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './endpoint.config';

interface RequestSuccessResp {
    code: number;
}

interface urlOfSuccessfulUrlResp extends RequestSuccessResp {
    data: {
        enUrl: string;
    };
}

interface urlOfFailureUrlResp extends RequestSuccessResp {
    data: string;
}

export const registerUrl = (
    url: string
): Promise<urlOfSuccessfulUrlResp & urlOfFailureUrlResp> => {
    return new Promise((resolve, reject) => {
        axios
            .post(
                endpoint.url.request.register,
                {
                    url: url
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }
            )
            .then((resp: AxiosResponse) => resolve(resp.data))
            .catch((err: AxiosError) => reject(err));
    });
};
