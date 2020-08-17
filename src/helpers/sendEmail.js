'use strict'
const nodemailer = require('nodemailer')

async function sendEmail(email) {
    console.log(`sending this email : ${email}`)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        // requireTLS: true,
        auth: {
            user: 'estefanyvasquezmiranda@gmail.com',
            pass: 'angela2012solange'
        }
    })
    var mailOptions = {
        from: 'Hotel el Mirador',
        to: email,
        subject: 'Informacion de reserva',
        html: `    <div style="background-color: black; width: 554px;">
        <h1 style="color: white; font-size: 60px; text-decoration: underline; text-align: center; padding-top: 20px">Hotel el Mirador</h1>
        <div style="background-color: green; width: 550px;border: 2px solid black">
            <!-- <div style="">
                <img src="http://alfagemeviajes.com/images/uploads/Hotel.jpg" width="" alt=""
                style="width: 100%; height: 100px;">

            </div>
            <p style="font-size: 50px; font-family: Arial, Helvetica, sans-serif;font-weight: bold; text-align: center; color: aquamarine; text-decoration: underline;">
                Hotel el Mirador</p> -->

                
                <div style=" margin-right: 10px; padding: 20px;float: left;">
                    <img style="width: 200px; border-radius: 50%;float: left" src="http://alfagemeviajes.com/images/uploads/Hotel.jpg" alt="">
                    <!-- <p style="font-size: 50px;">asdasd</p>  -->
                </div>
                <!-- <img style="width: 100px; border-radius: 50%; margin-right: 400px;" src="http://alfagemeviajes.com/images/uploads/Hotel.jpg" alt=""> -->

        </div>
        <div style="background-color: black; width: 554px;">
            <div style="padding: 20px">
                <h2 style="color:white">Hola estimado cliente: </h2>
                <p style="color:white; text-align: justify">El hotel no se responsabiliza por objetos de valor introducido y dejado en su
                    habitación sin conocimiento de la administración (Código civil). La reserva de la habitación no está
                    ligada a un espacio en la cochera. Una vez realizado el pago por alojamiento reservas y otros
                    servicios del hotel no hay lugar a reclamo ni devolución. No se aceptan canjes fuera de tiempo de
                    boleta por factura. Todo consumo deberán ser cancelados – por adelantado sea este por alojamiento o
                    por servicios Para efectos de crédito de hospedaje y otros servicios se deberá dejar garantía
                    (efectivo y/o voucher firmado). El hotel no se responsabiliza, bajo ninguna circunstancia por
                    cualquier daño producido por terceros al vehículo o la pérdida total o parcial de sus accesorios,
                    mientras este se encuentre dentro y/o fuera del estacionamiento. El servicio de estacionamiento no
                    comprende el deber de vigilancia por parte del Hotel sino únicamente la sesión temporal del uso de
                    una rea para parqueo. Solo se considera como huésped a la persona registrada en el hotel. </p>
                <p style="color:white; text-align: justify">El huésped
                    se compromete a entregar la habitación tal como se le fue entregada. Cualquier daño o deterioro
                    producido por el huésped dentro de las instalaciones serán asumidos por el titular. Para efectuar un
                    check out rápido avisar 10 minutos antes para la elaboración de su cuenta. Al retiro del huésped
                    registrado, toda visita que tuviera deberá dejar la habitación y/o identificarse.
                </p>
                <a href="http://localhost:8000/">Gracias por elegirnos u.u</a>
            </div>

        </div>
    </div>`
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error)
        }else{
            console.log(`el email ha sido enviado`)
        }
    })
}


module.exports = { 
    sendEmail
}