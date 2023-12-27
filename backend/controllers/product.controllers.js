const Razorpay = require('razorpay');
const product = require('../models/product.schema');

const createdata =async(req,res)=>{
    try {
        let data = await product.create(req.body);
        res.send(data);
    } catch (error) {
        return res.send({error : error.message});
    }
}
const allproduct = async(req, res)=>{
    try {
        let data = await product.find();
        res.send(data)
    } catch (error) {
        return res.send({error : error.message});
    }
}

const razorpay = new Razorpay({
    key_id: "rzp_test_aseYwd9Lw0lp7m",
    key_secret: "Z5PEDx1r727w21A97LuCr6ri"
})
const payment =async(req,res)=>{
    let option = {
        amount : req.body.amount*100,
    }
    razorpay.orders.create(option,(err, order)=>{
        if(err){
            return res.send({error: err.message})
        }
        else{
            res.send(order)
        }
    })
}

module.exports ={createdata,allproduct, payment}