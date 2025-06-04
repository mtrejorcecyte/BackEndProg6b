"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoProductoSchema = new Schema({
    tipoProducto: {
        type: String,
        required: [true, 'tipoProducto required'],
        unique: true
    },
    descuento: {
        type: Number,
        required: [true, 'descuento required']
    }
});
const TipoProducto = mongoose.model("TipoProducto", TipoProductoSchema);
exports.default = TipoProducto;
//# sourceMappingURL=tipoProducto.model.js.map