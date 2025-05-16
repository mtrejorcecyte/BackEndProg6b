import { TipoProductoController } from "../controllers/tipoProducto.controller";

export class TipoProductoRoutes {
    private tipoProductoController: TipoProductoController = new TipoProductoController();
    public routes(app): void {
        app.route('/tipoProducto')
        .get(this.tipoProductoController.obtenerTipoProductos)
        .post(this.tipoProductoController.crearTipoProducto);

        app.route('/tipoProducto/:id')
        .put(this.tipoProductoController.actualizarTipoProducto)
        .delete(this.tipoProductoController.eliminarTipoProducto);
    }
}