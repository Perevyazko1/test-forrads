import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useDataPostContext} from "../../../providers/DataPostContext/DataPostContext";
import {PostType} from "../../../providers/models/PostType";

interface AxiosHookResponse {
    dataPost: PostType[] ;
    error: any;
    loading: boolean;
    executeRequest: (method: string, url: string, requestData?: any) => Promise<void>;
}

const useAxios = (): AxiosHookResponse => {
    const {dataPost, setDataPost} = useDataPostContext()
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const executeRequest = async (method: string, url: string, requestData?: any) => {
        const headers = {
            'Content-Type': 'application/json', // Пример стандартного заголовка
            // Другие стандартные заголовки здесь
        };

        setLoading(true);
        try {
            let response: AxiosResponse;
            switch (method.toUpperCase()) {
                case 'GET':
                    response = await axios.get(url, {headers});
                    break;
                case 'POST':
                    response = await axios.post(url, requestData, {headers});
                    break;
                case 'PUT':
                    response = await axios.put(url, requestData, {headers});
                    break;
                default:
                    throw new Error('Unsupported method');
            }
            // console.log(response.data)
            setDataPost(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return {dataPost, error, loading, executeRequest};
};

export default useAxios;
