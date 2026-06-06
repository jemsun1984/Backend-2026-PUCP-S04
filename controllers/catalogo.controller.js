import * as scatalogo from "../services/catalogo.service.js"

//... variables del servicio ...
const arrAutomoviles=[
    {
		"id_automovil" : 102,
		"nombre" : "Elantra7",
		"precio" : 15990.0,
		"id_marca" : 2,
		"marcadesc" : "Hyundai",
		"id_tipo" : 1,
		"tipodesc" : "Sedan"
	}, 
    {
		"id_automovil" : 108,
		"nombre" : "All New Accent7",
		"precio" : 15990.0,
		"id_marca" : 2,
		"marcadesc" : "Hyundai",
		"id_tipo" : 1,
		"tipodesc" : "Sedan"
	}];

export const getAll_original = function(req, res) {
    console.log("------------controller------------");
    //res.send(arrAutomoviles);
    const automoviles= scatalogo.getAll_original();
    console.log("luego de llamar a scatalogo.getAll_original()");
    console.log(automoviles);
    res.send(automoviles);
};
export const getAll = function(req, res) {
    console.log("------------controller------------");
    scatalogo.getAll()
    .then(automoviles => {
        console.log("... despues de scatalogo.getAll()");
        res.json(automoviles || []);
    })
    .catch(err => {
        res.status(500).json({"error":"Error obteniendo registros"});
    });
};

export const getById= function(req, res) {
    console.log(req.params.id);
    //res.send(arrAutomoviles[req.params.id]);
	scatalogo.getById(req.params.id)
    .then(objAutomovil => {
        console.log("... despues de scatalogo.getById()");
        res.json(objAutomovil || {});
    })
    .catch(err => {
        res.status(500).json({"error":"Error obteniendo registros"});
    });
};

/*export const create= function(req, res){
    const objAutomovil= req.body;
    console.log(objAutomovil);
    arrAutomoviles.push(objAutomovil);

    res.send(objAutomovil);
};*/
export const create = function(req, res) {
    const objAutomovil=req.body;
    console.log(objAutomovil);
    //arrAutomoviles.push(objAutomovil);    
    //res.status(201).send(arrAutomoviles);
    scatalogo.create(objAutomovil.nombre, objAutomovil.precio, objAutomovil.id_marca, objAutomovil.id_tipo)
    .then(idAutomovil => {
        console.log("... despues de scatalogo.create()");
        res.json( {"idAutomovil":idAutomovil} );
    })
    .catch(err => {
        res.status(500).json({"error":"Error ingresando registros"});
    });
};

export const update = function(req, res) {
    console.log("------------controller------------");
    const objAutomovil=req.body;
    console.log(objAutomovil);
    //arrAutomoviles[req.params.id]=objAutomovil;
    //res.send(arrAutomoviles);
    scatalogo.update(req.params.id, objAutomovil)
    .then(numRegistros => {
        console.log("... despues de scatalogo.update()");
        res.json( {"numRegistros":numRegistros} );
    })
    .catch(err => {
        res.status(500).json({"error":"Error actualizando registros"});
    });
};

export const deletes = function(req, res) {
    /*let indice=arrAutomoviles.findIndex(objAutomovil=>
                objAutomovil.id_automovil==req.params.id);
    if(indice!==-1){
        arrAutomoviles.splice(indice,1);
    }
    res.send(arrAutomoviles);*/
    scatalogo.deletes(req.params.id)
    .then(numRegistros => {
        console.log("... despues de scatalogo.deletes()");
        res.json( {"numRegistros":numRegistros} );
    })
    .catch(err => {
        res.status(500).json({"error":"Error eliminando registros"});
    });
};



