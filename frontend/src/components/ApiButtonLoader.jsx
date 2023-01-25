import axios from 'axios'
import { GET_BUTTON } from '../constants/apiConstants';

export default async function fetchButtons () {

    const testUrl  = GET_BUTTON

    return axios.get(testUrl, {
        headers: {
            'Authorization': `Basic`
        },
        auth: {
            username: 'admin',
            password: 'Rfgkey1985+&%$!'
          }
    })
    .then((responce) => {
    const answer = responce.data
    console.log(answer)
    return answer.results
    })
   
    .catch((error) => {
    console.error(error)
    })

}