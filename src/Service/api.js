import axios from 'axios';

const API_URL = 'http://localhost:3002/users';


export const getUsers = async (id) => {
       id = id || '';
    try {
        return await axios.get(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error.message);
    }
}

export const addUser = async (user) => {
    try{
    return await axios.post(`${API_URL}`,user);
    } catch(error) {
        console.log("Error while calling addUser api", error.message);
    }
}

export const getUser = async (id) => {
    try{
        return await axios.get(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getUser api ', error.message);
    }
}


export const editUser = async (data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`,data);
    } catch (error) {
        console.log('Error while calling editUser api ', error.message);
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser api ', error.message);
    }
}