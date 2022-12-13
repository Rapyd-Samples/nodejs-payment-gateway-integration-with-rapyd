const app = require('../Config/server')
const path = require('path');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const checkoutController = require('../Controller/checkoutController')

dotEnv.config()

app.set('views', path.join(__dirname, '../Views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    var price = 3000 / 100
    res.render('Checkout', {
        product_name: 'Gold Digger',
        price: '$'+price.toFixed(2)
    })
})

app.post('/create-checkout', (req, res, next) => {checkoutController.createCheckout(req, res, next)})