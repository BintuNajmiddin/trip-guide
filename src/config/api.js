import axiosClient from './axiosClient';

const apiCalls = {
    getTours: () => {
        return axiosClient.get('tours');
    },
    getHotels: ()=>{
        return axiosClient.get('hotels');
    },
    getHotelDetails:(id)=>{
        return axiosClient.get(`/hotels/${id}`);
    },
    getExplore:()=>{
        return axiosClient.get('explore');
    },
    getCities:()=>{
        return axiosClient.get('cities');
    }
}

export default apiCalls;