
import axios from 'axios';


export const fetchShow = () => {
    return axios
        .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        // .then((response) =>  {
        //     console.log("this is the return:", response)
        //     return response;
        // })
        // .catch((error) => {
        //     console.log(`youve got an ${error} there Tex`)
        //     return error
        // })
        
};