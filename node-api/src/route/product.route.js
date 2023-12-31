
const { userGuard } = require("../controller/auth.controller")
const ct = require("../controller/product.controller")
const {upload} = require("../util/config")
const product = (app,route_name) =>{
    app.get(`${route_name}`,ct.getlist)
    app.get(`${route_name}/:id`,ct.getone)
    app.post(`${route_name}`,upload.single("image_upload"),userGuard(),ct.create)
    app.put(`${route_name}`,upload.single("image_upload"),userGuard(),ct.update)
    app.delete(`${route_name}`,userGuard(),ct.remove)
    app.post(`${route_name}/change_status`,userGuard(),ct.changeProductStatus)
}
module.exports = product;