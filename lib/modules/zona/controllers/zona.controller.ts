import { Request, Response } from 'express';
import * as _ from 'lodash';
import Zona from '../models/zona.model';

export class ZonaController {
    crearZona = (req: Request, res: Response) =>  {
        const nuevaZona = new Zona({
            zona: req.body.zona,
            tarifa: req.body.tarifa
        });

        nuevaZona.save()
        .then(zonaCreada => {
            res.status(201).json({
                ok: true,
                zona: zonaCreada,
                message: 'Zona creada'
            });
        })
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Zona no creada'
            });
        });
    }

    obtenerZonas = (req: Request, res: Response) => {
        Zona.find()
        .then(zonas => {
            res.status(200).json({
                ok: true,
                zonas: zonas
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

    actualizarZona  = (req: Request, res: Response) => {
        Zona.findByIdAndUpdate(req.params.id, {
            zona: req.body.zona,
            tarifa: req.body.tarifa
        })
        .then(zonaActualizada => {
            res.status(200).json(
                {
                    ok: true,
                    zona: zonaActualizada,
                    message: 'Zona actualizada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Zona no actualizada'
            });
        });
    }

    eliminarZona  = (req: Request, res: Response) => {
        Zona.findByIdAndDelete(req.params.id)
        .then(zonaEliminada => {
            res.status(200).json(
                {
                    ok: true,                   
                    message: 'Zona eliminada'    
                }
            );
        })
        .catch(error => {
            res.status(400).json({
                ok: false,
                error: error.name,
                message: 'Zona no eliminada'
            });
        });
    }

    

}