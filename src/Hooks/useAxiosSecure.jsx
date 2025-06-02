import React from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
 baseURL: 'https://career-job-server.vercel.app'
})

const useAxiosSecure = () => {
    const {user,signOutUser} = useAuth();

    axiosInstance.interceptors.request.use(config=>{
       config.headers.authorization = `Bearer ${user.accessToken}`
       return config; 
    })

    axiosInstance.interceptors.response.use(response=>{
        return response;
    }, error=>{
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(()=>{
                console.log('sign out user for 401 status code')
            })
            .catch(err=>{
                console.log(err);
            })
        }
        return Promise.reject(error)
    })

    return axiosInstance;
};

export default useAxiosSecure;