"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const materia_routes_1 = require("./modules/materia/routes/materia.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
const tipoProducto_routes_1 = require("./modules/tipoProducto/routes/tipoProducto.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.materiaRoutes = new materia_routes_1.MateriaRoutes();
        this.tipoProductoRoutes = new tipoProducto_routes_1.TipoProductoRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.materiaRoutes.routes(app);
        this.tipoProductoRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map