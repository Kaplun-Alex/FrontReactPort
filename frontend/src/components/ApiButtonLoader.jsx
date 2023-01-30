import axios from 'axios'
import { GET_BUTTON } from '../constants/ApiConstants'


export default async function fetchButtons () {

    return axios.get(GET_BUTTON, {
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