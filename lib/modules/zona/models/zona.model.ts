import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IZona extends mongoose.Document {  
    zona: string;
    tarifa: number;
}

 const ZonaSchema = new Schema(
    {
        zona: {
            type: String,
            required: [true, 'zona required'],
            unique: true
        },
        tarifa: {
            type: Number,
            required: [true, 'tarifa required']
        }
    }
    
 );

const Zona = mongoose.model<IZona>("Zona", ZonaSchema);
export default Zona;