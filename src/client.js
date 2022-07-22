import client from '@sanity/client';

// const id = process.env.REACT_APP_SANITY_PRODUCT_ID;

// console.log(process.env.REACT_APP_SANITY_PRODUCT_ID);
export default client({
    projectId:process.env.REACT_APP_SANITY_PRODUCT_ID,
    dataset:"production",
    useCdn:true,
    apiVersion:"2022-07-22"
})
    