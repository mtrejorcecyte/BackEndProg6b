import { TipoProductoController } from "modules/tipoProducto/controllers/tipoProducto.controller";
import { MateriaRoutes } from "./modules/materia/routes/materia.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";
import { TipoProductoRoutes } from "./modules/tipoProducto/routes/tipoProducto.routes";
import { ZonaRoutes } from "./modules/zona/routes/zona.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private materiaRoutes: MateriaRoutes = new MateriaRoutes();
    private tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
    private zonaRoutes: ZonaRoutes = new ZonaRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.materiaRoutes.routes(app);
        this.tipoProductoRoutes.routes(app);
        this.zonaRoutes.routes(app);
    }
}