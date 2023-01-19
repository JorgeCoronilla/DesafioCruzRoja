var nodemailer = require('nodemailer');

USER1 =  process.env.USER1;
PASS1 =  process.env.PASS1;

smtpConfig =  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: USER1,
        pass: PASS1
    }
}

const transporter = nodemailer.createTransport(smtpConfig);
const email = {
    emailToRegister: async (jwt, email) => {
        var username = email.split("@")[0]
        console.log("enviando correo")
        var mailOptions = {
            from: 'Ayuda inmigrantes',
            to: email,
            subject: 'Ayuda inmigrantes: Verifica tu correo electrónico',
            text: "Conecta con personas que te pueden ayudarán",
            html: `<!doctype html>
            <html ⚡4email>
            
            <head>
                <meta charset="utf-8">
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
            </head>
            
            <body>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                    <tbody>
                        <tr>
                            <td align="center">
                                <div style="max-width:520px;margin:0 auto">
                                    <div
                                        style="vertical-align:top;text-align:left;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px">
                                        <div style="padding-top:30px;padding-bottom:20px;vertical-align:top;text-align:center"></div>
                                        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style="border-collapse:collapse">
                                            <tbody>
                                                <tr>
                                                    <td align="center"><img src="https://i.ibb.co/KD7Q5FQ/logo-mail.png"
                                                            height="175" border="0" alt=""
                                                            style="border:0;line-height:100%;outline:none;text-decoration:none"
                                                            class="CToWUd a6T" data-bit="iit" tabindex="0">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h1
                                            style="text-align:center;margin-bottom:0;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:24px;font-weight:500;letter-spacing:-0.01em;color:#172b4d;line-height:28px;margin-top:40px">
                                            ¡Ya falta poco!</h1>
                                        <p
                                            style="text-align:center;font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                            <a style="text-decoration:none;color:inherit">Hola, ${username}!!</a>
                                        </p>
                                        <p
                                            style="font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                                            Para terminar de configurar tu cuenta y empezar a conectar con nuestros usuarios, confirma que tu correo electrónico es correcto.</p>
                                        <div style="text-align:center;margin-top:28px"><a href="http://127.0.0.1:3000/registro/${jwt}"
                                                style="font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; box-sizing:border-box;border-radius:5px;border-width:0;border:none;display:inline-flex;font-style:normal;font-size:inherit;height:2.28571429em;line-height:2.28571429em;margin:0;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none;background:#E04848;color:#ffffff"
                                                target="_blank">Verifica tu correo electrónico</a></div>
                                        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                    <tbody>
                        <tr>
                            <td valign="top" align="center"
                                style="font-family:Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen;padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                <span>Has recibido este mensaje de parte de Ayuda Inmigrantes</span><br>
                            </td>
                        </tr>
                        <tr valign="top">
                            <td align="center" style="padding-top:15px;padding-bottom:30px"></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </td>
                </tr>
                </tbody>
                </table>
            </body>
            
            </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
                console.log(info.accepted)
            }
        });
    },

 recover: async (token, user_email, user_name) => {

    var mailOptions = {
        from: 'Quizz@gmail.com',
        to: user_email,
        subject: 'Cambio de contraseña: Comprobacion de identidad',
        text: "",
        html: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
          </head>
          <body>
          <body>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
            <tbody>
              <tr>
               <td align="center">
                <div style="max-width:520px;margin:0 auto">
                    <div
                        style="vertical-align:top;text-align:left;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px">
                        <div style="padding-top:30px;padding-bottom:20px;vertical-align:top;text-align:center"><img
                                    src="https://i.ibb.co/FWxX31p/quizo-logo.png"
                                    height="30" alt="Quizz_logo"
                                    style="line-height:100%;outline:none;text-decoration:none;border:0" class="CToWUd"
                                    data-bit="iit"></a></div>
                        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
                            <tbody>
                                <tr>
                                    <td align="center"><img
                                            src="https://i.ibb.co/tLxNGZG/quizzo-img.png"
                                            height="175" border="0" alt=""
                                            style="border:0;line-height:100%;outline:none;text-decoration:none"
                                            class="CToWUd a6T" data-bit="iit" tabindex="0">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <h1
                            style="margin-bottom:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:24px;font-weight:500;letter-spacing:-0.01em;color:#172b4d;line-height:28px;margin-top:40px">
                            ¡Vaya memoria!</h1>
                        <p
                            style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                            <a style="text-decoration:none;color:inherit">Hola, ${user_name}!!</a></p>
                        <p
                            style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;font-weight:400;letter-spacing:-0.005em;color:#091e42;line-height:20px;margin-top:12px">
                            Para terminar de cambiar tu contraseña visita el siguiente link e ingresa una nueva contraseña.</p>
                        <div style="margin-top:28px"><a
                                href="http://127.0.0.1:3000/change-pass/${token}"
                                style="box-sizing:border-box;border-radius:3px;border-width:0;border:none;display:inline-flex;font-style:normal;font-size:inherit;height:2.28571429em;line-height:2.28571429em;margin:0;outline:none;padding:0 12px;text-align:center;vertical-align:middle;white-space:nowrap;text-decoration:none;background:#6b8f24c8;color:#ffffff"
                                target="_blank"
                                >Cambiar contraseña</a></div>
                        <hr style="margin-top:24px;margin-bottom:24px;border:0;border-bottom:1px solid #c1c7d0">
                                <tbody>
                                    <tr>
                                        <td valign="top" align="center"
                                            style="padding-top:10px;line-height:18px;text-align:center;font-weight:none;font-size:12px;color:#505f79">
                                            <span>Has recibido este mensaje de parte de Quizzo</span><br></td>
                                    </tr>
                                    <tr valign="top">
                                        <td align="center" style="padding-top:15px;padding-bottom:30px"><img
                                                    src="https://i.ibb.co/FWxX31p/quizo-logo.png"
                                                    width="114" border="0" alt="Quizz_logo"
                                                    style="border:0;line-height:100%;outline:none;text-decoration:none;display:block;color:#4c9ac9"
                                                    class="CToWUd" data-bit="iit"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
</table>
        </body>

          </body>
        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
            console.log(info.accepted)
        }
    });

}
}

    module.exports = email;