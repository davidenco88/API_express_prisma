const {
  handleGetAllData,
  handleGetInfo,
  handleGetDataById,
  handleDeleteById,
  handleAddData
} = require('./controller');

const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan('dev'));

//Dirección para obtener todo los registros de la DB.
app.get('/api/persons', handleGetAllData);

//Dirección para obtener la cantidad de registros en la DB y la fecha de la solicitud
app.get('/info', handleGetInfo);

//Dirección para obtener un resgistro especifico de la DB.
app.get("/api/persons/:id", handleGetDataById);

//Dirección para eliminar un resgistro especifico de la DB.
app.delete("/api/persons/:id", handleDeleteById);

//Dirección para agregar un resgistro a la DB.
app.post("/api/persons", handleAddData);

app.listen(port, () => console.log(`Estamos escuchando el puerto ${port}`));

