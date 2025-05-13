import { Request, Response } from 'express';
import * as _ from 'lodash';
import Materia from '../models/materia.model';

export class MateriaController {
    crearMateria = (req: Request, res: Response) =>  {
        const nuevaMateria = new Materia({
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
        .catch(error =>{
            res.status(400).json({
                ok: false,
                error,
                message: 'Materia no creada'
            });
        });
    }

}