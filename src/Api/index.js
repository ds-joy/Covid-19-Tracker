import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try {

        // to check if we are getting the data correctly
        // const check = await axios.get(url);
        // console.log(check)

        // destructuring is used here
        // go look it up :3
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate, };
        
    } catch (error) {
        
    }
}