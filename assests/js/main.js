const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'https://www.abibliadigital.com.br/api/users',
    Headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: {
    
            "name": "Vittor",
            "email": "Vittoremanoel1234@gmail.com",
            "password": "300321Vb@", // minimum size 6 digits
            "notifications": true // receive update emails from www.abibliadigital.com.br
          
    }
   
  
})
