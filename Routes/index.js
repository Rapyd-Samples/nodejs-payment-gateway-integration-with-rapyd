const app = require('../Config/server')
const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config()

app.set('views', path.join(__dirname, '../Views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    var price = 3000 / 100
    res.render('Checkout', {
        product_name: 'Gold Digger',
        price: '$'+price.toFixed(2)
    })
})