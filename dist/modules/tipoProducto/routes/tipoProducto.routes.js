"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoProductoRoutes = void 0;
const tipoProducto_controller_1 = require("../controllers/tipoProducto.controller");
class TipoProductoRoutes {
    constructor() {
        this.tipoProductoController = new tipoProducto_controller_1.TipoProductoController();
    }
    routes(app) {
        app.route('/tipoProducto')
            .get(this.tipoProductoController.obtenerTipoProductos)
            .post(this.tipoProductoController.crearTipoProducto);
        app.route('/tipoProducto/:id')
            .put(this.tipoProductoController.actualizarTipoProducto)
            .delete(this.tipoProductoController.eliminarTipoProducto);
    }
}
exports.TipoProductoRoutes = TipoProductoRoutes;
//# sourceMappingURL=tipoProducto.routes.js.map