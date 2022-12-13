const pool = require('../Config/db-config');

const  DEFAULT_PROPERTIES = {
    status: 'In Progress',
    created_at: new Date(Date.now()),
}



class DBQueries {
    constructor(){

    }

    static create(entry){
        const {full_name, email, full_address, amount, reference, product_details, meta_data} = entry;

        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO checkout_details(full_name, email, full_address, amount, reference, product_details, meta_data, status, created_at) 
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, 
                [full_name, email, full_address, amount, reference, product_details, meta_data, DEFAULT_PROPERTIES.status, DEFAULT_PROPERTIES.created_at],
                (error, response) => {

                if (error) return reject(error);

                resolve(response)
            });
        })
    }
    
}

module.exports = DBQueries;