"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaRoutes = void 0;
const materia_controller_1 = require("../controllers/materia.controller");
class MateriaRoutes {
    constructor() {
        this.materiaController = new materia_controller_1.MateriaController();
    }
    routes(app) {
        app.route('/materia')
            .get(this.materiaController.obtenerMaterias)
            .post(this.materiaController.crearMateria);
        app.route('/materia/:id')
            .put(this.materiaController.actualizarMateria)
            .delete(this.materiaController.eliminarMateria);
    }
}
exports.MateriaRoutes = MateriaRoutes;
//# sourceMappingURL=materia.routes.js.map