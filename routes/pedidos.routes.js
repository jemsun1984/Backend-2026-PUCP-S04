import express from "express";
import * as cpedidos from "../controllers/pedidos.controller.js";
const router= express.Router();

router.get('/', cpedidos.getAll);

/*router.get('/:id', ccatalogo.getById);

router.post('/', ccatalogo.create);

router.put('/:id', ccatalogo.update);

router.patch('/:id', ccatalogo.update);

router.delete('/:id', ccatalogo.deletes);*/

export default router;
