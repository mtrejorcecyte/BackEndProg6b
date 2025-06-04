import { ZonaController } from "../controllers/zona.controller";

export class ZonaRoutes {
    private zonaController: ZonaController = new ZonaController();
    public routes(app): void {
        app.route('/zona')
        .get(this.zonaController.obtenerZonas)
        .post(this.zonaController.crearZona);

        app.route('/zona/:id')
        .put(this.zonaController.actualizarZona)
        .delete(this.zonaController.eliminarZona);
    }
}