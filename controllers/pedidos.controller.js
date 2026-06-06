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

export const getAll = function(req, res) {
    res.send(arrAutomoviles);
};




