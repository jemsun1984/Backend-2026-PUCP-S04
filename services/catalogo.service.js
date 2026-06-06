import pool from "../config/db.js"

export const getAll_original = function() {
    console.log("------------service------------");
    pool.query(
            'select a.id_automovil , a.nombre , a.precio , '+
            'm.nombre as marca, t.nombre as tipo  '+
            'from bdprueba.automovil a '+
            'inner join bdprueba.marca m on a.id_marca=m.id_marca '+
            'left join bdprueba.tipo t on a.id_tipo=t.id_tipo '+
            'where a.activo = true', (err, results, fields) =>{
                console.log("obtuve resultados de la BD");
                console.log(fields);
                console.log(results);
                if (err) throw(err);
                else return results;
            });
};

export const getAll = function() {
    console.log("------------service------------");
    return new Promise( (resolve, reject) => {
        pool.query(
            'select a.id_automovil , a.nombre , a.precio , '+
            'm.nombre as marca, t.nombre as tipo  '+
            'from bdprueba.automovil a '+
            'inner join bdprueba.marca m on a.id_marca=m.id_marca '+
            'left join bdprueba.tipo t on a.id_tipo=t.id_tipo '+
            'where a.activo = true', (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results);
            });
    });
};

export const getById = function(id_automovil) {
    console.log("------------service getById------------");
    return new Promise( (resolve, reject) => {
        pool.query(
            'select a.id_automovil , a.nombre , a.precio , '+
            'm.nombre as marca, t.nombre as tipo  '+
            'from bdprueba.automovil a '+
            'inner join bdprueba.marca m on a.id_marca=m.id_marca '+
            'left join bdprueba.tipo t on a.id_tipo=t.id_tipo '+
            'where a.activo = true and a.id_automovil=? ', [id_automovil], (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results[0]);
            });
    });
};

export const create = function(nombre, precio, id_marca, id_tipo) {
    return new Promise( (resolve, reject) => {
        pool.query(
            'insert into bdprueba.automovil(nombre, precio, activo, fecharegistro, id_marca, id_tipo) '+
            'values(?, ?, true, now(), ?, ?)', 
            [nombre, precio, id_marca, id_tipo], 
            (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results.insertId);
            });
    });
};

export const update = function(id_automovil, objAutomovil) {
    return new Promise( (resolve, reject) => {
        pool.query(
            'update bdprueba.automovil set precio=?, id_marca=?, id_tipo=? '+
            'where id_automovil=? ', 
            [objAutomovil.precio, objAutomovil.id_marca, objAutomovil.id_tipo, id_automovil], 
            (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results.affectedRows);
            });
    });
};

export const deletes = function(id_automovil) {
    return new Promise( (resolve, reject) => {
        pool.query(
            'update bdprueba.automovil set activo=false '+
            'where id_automovil=? ', [id_automovil], 
            (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results.affectedRows);
            });
    });
};



