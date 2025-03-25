import express from 'express';
import router from './routes';
import { connectBD } from './config/db'; // Usa 'connectBD' en la importación

const PORT = 3011;
const app = express();

app.use(express.json()); // Middleware para procesar JSON en las solicitudes
app.use('/', router); // Configuración de rutas

// Conectar a la base de datos antes de iniciar el servidor
connectBD().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar con la base de datos:', error.message);
});

export default app;
