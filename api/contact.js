// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Configurar CORS más específico
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Manejar preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Only POST is accepted.' 
    });
  }

  try {
    // Log para debugging (remover en producción)
    console.log('📧 API Contact called');
    console.log('Environment vars check:', {
      EMAIL_USER: process.env.EMAIL_USER ? '✅ Set' : '❌ Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing'
    });

    const { name, email, message } = req.body;

    // Validar que todos los campos estén presentes
    if (!name || !email || !message) {
      console.log('❌ Missing fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son requeridos (name, email, message)'
      });
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return res.status(400).json({
        success: false,
        error: 'Formato de email inválido'
      });
    }

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Missing environment variables');
      return res.status(500).json({
        success: false,
        error: 'Configuración del servidor incompleta'
      });
    }

    console.log('🔧 Creating transporter...');

    // Configuración de Nodemailer con configuración más específica
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verificar configuración del transporter
    console.log('🔍 Verifying transporter...');
    await transporter.verify();
    console.log('✅ Transporter verified successfully');

    // Opciones del email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Usar tu email como remitente
      to: process.env.EMAIL_USER, // Enviar a ti mismo
      replyTo: email, // Responder al email del usuario
      subject: `🚀 Nuevo mensaje de ${name} desde tu portafolio`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #04a56b, #05c280); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Nuevo Mensaje</h1>
            <p style="color: #e8f5e8; margin: 10px 0 0 0;">Desde tu portafolio web</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; border-left: 4px solid #04a56b;">
              <h3 style="color: #04a56b; margin-top: 0;">Información del contacto:</h3>
              
              <p style="margin: 15px 0;"><strong style="color: #333;">👤 Nombre:</strong> <span style="color: #555;">${name}</span></p>
              <p style="margin: 15px 0;"><strong style="color: #333;">📧 Email:</strong> <span style="color: #555;">${email}</span></p>
              
              <h3 style="color: #04a56b; margin: 25px 0 15px 0;">💬 Mensaje:</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef; line-height: 1.6; color: #333;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; font-size: 14px;">
                📅 Enviado el ${new Date().toLocaleString('es-ES', { 
                  timeZone: 'America/Costa_Rica',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `
    };

    console.log('📤 Sending email...');
    
    // Enviar el email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', info.messageId);

    // Respuesta exitosa
    return res.status(200).json({ 
      success: true, 
      message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Log más detallado del error
    if (error.code) {
      console.error('Error code:', error.code);
    }
    if (error.response) {
      console.error('Error response:', error.response);
    }

    // Respuesta de error más específica
    let errorMessage = 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación con Gmail. Verifica las credenciales.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Tiempo de espera agotado. Inténtalo de nuevo.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión. Verifica tu conexión a internet.';
    }

    return res.status(500).json({ 
      success: false, 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}