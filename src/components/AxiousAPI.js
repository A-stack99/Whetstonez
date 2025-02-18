import axios from "axios";

export const AxiosGetRequest = async () =>{
    const res = await axios({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3cc3d54235efc30c7b6d3c8639c62667',
    });
    return res;
};

export const AxiosPostRequest = async (data) =>{
    const res = await axios({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3cc3d54235efc30c7b6d3c8639c62667',
        data: data,
    });
    return res;
};