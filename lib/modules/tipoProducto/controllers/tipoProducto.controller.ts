import { Request, Response } from 'express';
import * as _ from 'lodash';
import TipoProducto from '../models/tipoProducto.model';

export class TipoProductoController {
    crearTipoProducto = (req: Request, res: Response) =>  {
        const nuevaTipoProducto = new TipoProducto({
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
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoProducto no creado'
            });
        });
    }

    obtenerTipoProductos = (req: Request, res: Response) => {
        TipoProducto.find()
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
    }

    actualizarTipoProducto  = (req: Request, res: Response) => {
        TipoProducto.findByIdAndUpdate(req.params.id, {
            tipoProducto: req.body.tipoProducto,
            descuento: req.body.descuento
        })
        .then(tipoProductoActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    tipoProducto: tipoProductoActualizada,
                    message: 'TipoProducto actualizado'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoProducto no actualizado'
            });
        });
    }

    eliminarTipoProducto  = (req: Request, res: Response) => {
        TipoProducto.findByIdAndDelete(req.params.id)
        .then(tipoProductoEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'TipoProducto eliminado'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'TipoProducto no eliminado'
            });
        });
    }

}