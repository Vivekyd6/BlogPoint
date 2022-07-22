import client from './@sanity/client';

require('dotenv').config();

const id = process.env.REACT_APP_SANITY_PRODUCT_ID;


export default client({
    projectId:{id},
    dataset:"production",
    useCdn:true,
    apiVersion:"22-07-2022"
})
