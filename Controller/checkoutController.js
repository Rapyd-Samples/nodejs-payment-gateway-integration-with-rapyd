const {makeRequest} = require('../Helpers/rapydUtilities')
const DBQueries = require('../Model/DBQueries')

class checkoutController{
    constructor(){

    }

    static createCheckout(request, response, next){
        
        const {u_full_name, user_email, user_full_address} = request.body

        var price = 3000 / 100
        price = price.toFixed(2)

            const body = {
            amount: 30.00,
            country: 'US',
            currency: 'USD',
            language: 'en',
            metadata: {
                u_full_name: u_full_name,
                user_email: user_email,
                user_full_address: user_full_address,
            },
            };
            makeRequest('POST', '/v1/checkout', body).then((data)=>{

                const entry = {
                    full_name: u_full_name,
                    email: user_email, 
                    full_address: user_full_address,
                    amount: price * 100, 
                    reference: data.body.data.id, 
                    product_details: 'Gold Digger',
                    meta_data: data.body.data
                };

                DBQueries.create(entry)
                    .then((entry) => {

                        return response.json({status: 200, message: 'checkout created', data: data.body.data});

                    }).catch((error)=>{
                        console.log('error: ',error);
                    });
            })
            .catch((error)=>{
                console.log('error: ',error);
            });

    }

} 

module.exports = checkoutController;