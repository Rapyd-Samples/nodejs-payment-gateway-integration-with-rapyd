const app = require('./Config/server');
const dotEnv = require('dotenv')

dotEnv.config()

require('./Routes/index.js')


// app.get('/', function(req, res){
//     // res.render('checkout', {
//     //     title: 'View Engine Demo'
//     // })
//     console.log('askjaskjhak')
// })



// const pool = require('./Config/db-config');
// var sql = `SELECT * FROM checkout_details`
// pool.query(sql, (error, response) => {
//         if (error) return console.log(error);

//         console.log(response.rows);
//       }
//     )

const port = process.env.PORT || 3153;
app.listen(port, () => {console.log(`App listening on port ${port}`)})