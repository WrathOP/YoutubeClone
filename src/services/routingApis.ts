import axios from 'axios';


const apiInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
    });

export const getSrfs = async () => {  
    return await apiInstance.get('/srf');
}
