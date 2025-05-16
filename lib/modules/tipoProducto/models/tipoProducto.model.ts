import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITipoProducto extends mongoose.Document {  
    tipoProducto: string;
    descuento: number;
}

 const TipoProductoSchema = new Schema(
    {
        tipoProducto: {
            type: String,
            required: [true, 'tipoProducto required'],
            unique: true
        },
        descuento: {
            type: Number,
            required: [true, 'descuento required']
        }
    }
    
 );

const TipoProducto = mongoose.model<ITipoProducto>("TipoProducto", TipoProductoSchema);
export default TipoProducto;