import axios from 'axios';

export const fetchDragonsApi = () => axios.get('https://api.spacexdata.com/v4/dragons');
export const fetchMissionsApi = () => axios.get('https://api.spacexdata.com/v3/missions');

