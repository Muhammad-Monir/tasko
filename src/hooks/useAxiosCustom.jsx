import axios from "axios";


const useAxiosCustom = () => {


    const axiosCustom = axios.create({

        baseURL:"https://revival-backend.vercel.app/api/v1"
        

    })






    return axiosCustom
};

export default useAxiosCustom;