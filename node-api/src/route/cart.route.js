const { userGuard } = require("../controller/auth.controller")
const ct = require("../controller/cart.controller")
const cart = (app,route_name) => {
    app.get(`${route_name}`,ct.getCartByCutomer)
    app.post(`${route_name}`,userGuard(),ct.addCart)
    app.delete(`${route_name}`,ct.removeCart)
    app.put(`${route_name}`,ct.updateCart)
}
module.exports = cart