import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';


const axiosSecure = axios.create({
  baseURL: 'https://server.udvabonibd.com'
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  useEffect(() => {

    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {

        logoutUser().then(() => {

          navigate('/login');
        });
      }
      return Promise.reject(error);
    });
  }, [navigate, logoutUser]);

  return [axiosSecure];
};

export default useAxiosSecure;
