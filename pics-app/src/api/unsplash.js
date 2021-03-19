import axios from 'axios';
//we can set up configuration params for axios

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    //headers -- used for validation of credentials
    headers:{
        Authorization : 'Client-ID E93rB9GUG0KtZWVmTHQlHGaCWNGZlOFpxCsN_lr6wWw'
    }
});