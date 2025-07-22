// backend/server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta para el formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar otro servicio como Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER, // Tu dirección de correo
      pass: process.env.EMAIL_PASS, // La contraseña de aplicación de tu correo
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, // El correo donde recibirás los mensajes
    subject: `Nuevo mensaje de ${name} desde tu portafolio`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '¡Mensaje enviado con éxito!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Hubo un error al enviar el mensaje.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});