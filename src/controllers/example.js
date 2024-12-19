import api from "@/libs/api";
import { RequestSuccess, RequestWaiting } from "@/libs/request";

export const handleGetData = () => async (dispact) => {
    dispact(RequestWaiting(true))
    try {
        const response = await api.get('/NAME_ROUTER_API');
        dispact(RequestSuccess('NAME_REDUCER_SUCCESS',response.data))
    }catch (error) {
        console.error('Error posting data:', error);
    } finally {
        dispact(RequestWaiting(false))
    }
}