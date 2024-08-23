const conexion = require('../db');

exports.login = async (req, res) => {
  const { Documento, Contrasena } = req.body;
  try {
    const result = await conexion.query(`SELECT * FROM Alumnos WHERE Documento = ${Documento}`);
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Database query failed' });
  }
};

exports.parametros = async (req, res) => {
  try {


    const result = await conexion.query('SELECT * FROM Parametros');

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Database query failed' });
  }
};

exports.agregarParametro = async (req, res) => {
  const { TurnoLlamado, MesasPosibles } = req.body;
  try {
    
    //await db.query('INSERT INTO Parametros (TurnoLlamado, MesasPosibles) VALUES (?, ?)', [TurnoLlamado, MesasPosibles]);
    
    const result = await conexion.query(`INSERT INTO Parametros (TurnoLlamado, MesasPosibles) VALUES (${TurnoLlamado}, ${MesasPosibles})`);
    res.status(201).json({ message: 'Item created' });
  } catch (error) {
    res.status(500).json({ error: 'Database insert failed' });
  }
};
