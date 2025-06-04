"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoProductoController = void 0;
const tipoProducto_model_1 = require("../models/tipoProducto.model");
class TipoProductoController {
    constructor() {
        this.crearTipoProducto = (req, res) => {
            const nuevaTipoProducto = new tipoProducto_model_1.default({
                tipoProducto: req.body.tipoProducto,
                descuento: req.body.descuento
            });
            nuevaTipoProducto.save()
                .then(tipoProductoCreada => {
                res.status(201).json({
                    ok: true,
                    tipoProducto: tipoProductoCreada,
                    message: 'TipoProducto creado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoProducto no creado'
                });
            });
        };
        this.obtenerTipoProductos = (req, res) => {
            tipoProducto_model_1.default.find()
                .then(tipoProductos => {
                res.status(200).json({
                    ok: true,
                    tipoProductos: tipoProductos
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
        this.actualizarTipoProducto = (req, res) => {
            tipoProducto_model_1.default.findByIdAndUpdate(req.params.id, {
                tipoProducto: req.body.tipoProducto,
                descuento: req.body.descuento
            })
                .then(tipoProductoActualizada => {
                res.status(200).json({
                    ok: true,
                    tipoProducto: tipoProductoActualizada,
                    message: 'TipoProducto actualizado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoProducto no actualizado'
                });
            });
        };
        this.eliminarTipoProducto = (req, res) => {
            tipoProducto_model_1.default.findByIdAndDelete(req.params.id)
                .then(tipoProductoEliminada => {
                res.status(200).json({
                    ok: true,
                    message: 'TipoProducto eliminado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'TipoProducto no eliminado'
                });
            });
        };
    }
}
exports.TipoProductoController = TipoProductoController;
//# sourceMappingURL=tipoProducto.controller.js.map