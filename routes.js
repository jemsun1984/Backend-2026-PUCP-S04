import express from "express";
import rcatalogo from "./routes/catalogo.routes.js"
import rpedidos from "./routes/pedidos.routes.js"
const router= express.Router();

//... secciones ...
router.use('/catalogo', rcatalogo);
router.use('/pedidos', rpedidos);
//router.use('/seguridad', rseguridad);

export default router;
