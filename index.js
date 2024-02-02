const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Agrega la librería CORS

const app = express();
const port = 3000;

// Usa CORS middleware
app.use(cors());

app.use(express.static("public"));

app.get("/images/", async (req, res) => {
  try {
    const apiUrl = `https://34.228.78.25/images/`;

    const axiosConfig = {
      httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
    };

    const response = await axios.get(apiUrl, axiosConfig);
    const data = response.data;

    res.send(data);
  } catch (error) {
    console.error("Error en la solicitud intermedia:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.get("/images/:mediaId", async (req, res) => {
  try {
    const mediaId = req.params.mediaId;
    const apiUrl = `https://34.228.78.25/images/${mediaId}/`;

    const axiosConfig = {
      httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
    };

    const response = await axios.get(apiUrl, axiosConfig);
    const data = response.data;

    res.send(data);
  } catch (error) {
    console.error("Error en la solicitud intermedia:", error);
    res.status(500).send("Error interno del servidor");
  }
});

app.listen(port, () => {
  console.log(`Servidor intermedio escuchando en http://localhost:${port}`);
});
