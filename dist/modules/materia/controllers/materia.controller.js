"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MateriaController = void 0;
const materia_model_1 = require("../models/materia.model");
class MateriaController {
    constructor() {
        this.crearMateria = (req, res) => {
            const nuevaMateria = new materia_model_1.default({
                materia: req.body.materia
            });
            nuevaMateria.save()
                .then(materiaCreada => {
                res.status(201).json({
                    ok: true,
                    materia: materiaCreada,
                    message: 'Materia creada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Materia no creada'
                });
            });
        };
        this.obtenerMaterias = (req, res) => {
            materia_model_1.default.find()
                .then(materias => {
                res.status(200).json({
                    ok: true,
                    materias: materias
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarMateria = (req, res) => {
            materia_model_1.default.findByIdAndUpdate(req.params.id, {
                materia: req.body.materia
            })
                .then(materiaActualizada => {
                res.status(200).json({
                    ok: true,
                    materia: materiaActualizada,
                    message: 'Materia actualizada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Materia no actualizada'
                });
            });
        };
        this.eliminarMateria = (req, res) => {
            materia_model_1.default.findByIdAndDelete(req.params.id)
                .then(materiaEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'Materia eliminada'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Materia no eliminada'
                });
            });
        };
    }
}
exports.MateriaController = MateriaController;
//# sourceMappingURL=materia.controller.js.map