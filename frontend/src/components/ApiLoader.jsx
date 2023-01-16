import axios from 'axios'


export default function fetchQuotes (url) {
    
       
    axios.get(url, {
        headers: {
            'Authorization': `Basic`
        },
        auth: {
            username: 'admin',
            password: 'Rfgkey1985+&%$!'
          }
    })
    .then((res) => {
    console.log(res.data)
    })
    .catch((error) => {
    console.error(error)
    })
}
