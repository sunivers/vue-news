import axios from 'axios';

const config = {
    baseURL : 'https://api.hnpwa.com/v0/',
}

function fetchNewsList() {
    return axios.get(`${config.baseURL}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseURL}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseURL}jobs/1.json`);
}

async function fetchList(pageName) {
    try {
        const response = await axios.get(`${config.baseURL}${pageName}/1.json`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function fetchUserData(username) {
    try {
        const response = await axios.get(`${config.baseURL}user/${username}.json`);   
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchItemData(id) {
    try {
        const response = await axios.get(`${config.baseURL}item/${id}.json`);   
        return response;
    } catch (error) {
        console.log(error);  
    }
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserData,
    fetchItemData,
}