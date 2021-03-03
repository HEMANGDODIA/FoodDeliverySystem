const { update } = require("../../../models/menu");

function cartController() {
    return {
        index(req, res) {
            res.render('customers/cart');
        },
        update(req, res) {
            //for the first time creating cart and adding basic object structure
            if (!req.session.cart) {
                req.session.cart = {
                    item: {},
                    totalQty: 0,
                    totalPrice: 0
                }

            }

            var cart = req.session.cart;
            // console.log(req.body);
            //check if item dose not exist in cart
            if (!cart.item[req.body._id]) {
                cart.item[req.body._id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty += 1;
                cart.totalPrice = cart.totalPrice + req.body.price
            } else {
                cart.item[req.body._id].qty = cart.item[req.body._id].qty + 1
                cart.totalQty += 1
                cart.totalPrice = cart.totalPrice + req.body.price
            }
            //let cart = req.session.cart
            //let id = req.body._id

            //console.log(cart.item[req.body._id]);
            return res.json({ totalQty: req.session.cart.totalQty })
        }
    }
}
module.exports = cartController