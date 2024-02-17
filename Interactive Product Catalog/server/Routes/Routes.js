const stripe = require("stripe")(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout",async(req,res)=>{
    const {products} = req.body;

    const items = products.map((product) => ({
        price_data: {
            currency: "ind",
            product_data: {
                name: product.title,
                images: [product.image]
            },
            unit_amount: product.price,
        },
        quantity: product.productCount
    }));
   
    const session = await stripe.checkout.session.create({
        payment_method_types: ['card'],
        items: items,
        mode: "payment",
        success_url:"",
        cancel_url:""
    })

    res.json({id:session.id})
    
});

module.exports = router