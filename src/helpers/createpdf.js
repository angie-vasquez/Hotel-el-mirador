'use strict'

const pdf = require('html-pdf')

const currentDate = new Date()
let day = currentDate.getDate()
let month = currentDate.getMonth()
let year = currentDate.getFullYear()

async function create_pdf(data, miHabitacion) {

    const { _id } = data
    console.log(`aqui ps con los datos : ${data}`)
    console.log(`aqui ps con los datos : ${data[0]._id}`)
    const contenido = `
    <div style="width: 700px;margin-left: 30px">
        <header style="">
            <h2 style="margin-top: 20px; margin-bottom: 5px; ">Hotel el Mirador</h2>
            <span style="margin-top: -12px;">asociados unamad s.a.c</span>
            <br><br><br>
            <div>
                <span>Av. Leon Velarde cuadra 8, psj jose maria arguedas</span>
            </div>
            <div>
                <span>hotelelmirador@gmail.com</span>
            </div>
            <div>
                <span>948374857</span>
            </div>
            <div>
                <span>Gerente general angie vazquez </span>
            </div>

            <div style="position: absolute; top: 0; left: 450px;">
                <h1><strong style="color:green">Factura</strong> </h1>
                <p><strong>fecha :</strong> <span style="margin-left: 100px;">${day}/ ${month + 1} / ${year}</span> </p>
                <p> <strong>Codigo de factura :</strong> <span style="margin-left: 15px;">${data[0]._id}</span> </p>
                <p><strong>Codigo Cliente : </strong> <span style="margin-left: 35px;">${data[0].Nro_documento}</span> </p>
            </div>
        </header>
        <br><br>
        <div>
            <span style="color: #fff; font-size: 20px; font-weight: bold; background-color: green;">Facturar a :</span>
            <br><br>
            <div>
                <span>${data[0].Nombre} ${data[0].Apellidos}</span>
            </div>
            <div>
                <span>${data[0].Telefono}</span>
            </div>
            <div>
                <span>${data[0].correo}</span>
            </div>
        </div>
        <br><br><br>
        <div>
            <table border="1" style="width: 100%">
                <caption style="background-color: green;color: #fff;">Datos de Factura</caption>
                <colgroup>
                    <col style="width: 70%" />
                    <col style="width: 30%" />
                    <!-- <col style="width: 40%"/> -->
                </colgroup>
                <thead>
                    <tr>
                        <!-- <th colspan="2">Cabecera Múltiples Columnas</th> -->
                    </tr>
                    <tr>
                        <th>Descripcion</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <!-- <td colspan="1">Total</td> -->
                        <!-- <td style="text-align: center;">S/ ${miHabitacion[0].Precio}</td> -->
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th>
                            <p>
                            ${miHabitacion[0].Tipo_Habitacion}
                            ${miHabitacion[0].Caracteristicas}
                            </p>
                            <br>
                        </th>
                        <td>
                            <p style="text-align: center;">${miHabitacion[0].Precio}</p>
                        </td>
                        <!-- <td>Fila 1 Columna 2</td> -->
                    </tr>
                    <tr>
                        <!-- <th>Fila 2</th> -->
                        <!-- <td>Fila 2 Columna 1</td> -->
                        <!-- <td>Fila 2 Columna 2</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <div>

            <div style="position: relative; top: 20px; left: 500px;">
                <div>
                    <span><strong style="margin-right: 30px;">subtotal : </strong> ${miHabitacion[0].Precio}</span>
                </div>
                <br>
                <div>
                    <span><strong style="margin-right: 65px;">Igv : </strong>${miHabitacion[0].Precio * 0.18} </span>
                </div>
                <hr>
                <div>
                    <span><strong style="margin-right: 30px;">TOTAL : </strong> ${data[0].Costo_Alojamiento}</span>
                </div>

            </div>
        </div>
        <br><br>
        <div>
            <p style="text-align: center; padding-top: 50px; width: 70%; margin: auto;">
                si usted tiene algo inconforme con la factura apersonarse al administrador del hotel
            </p>
        </div>
    </div>
    `

    var filenameres = await pdf.create(contenido).toFile(`src/public/files/${data[0]._id}.pdf`, async function (err, res) {
        if (err) {
            await console.log("ha acurrido un error")
        } else {
            var result = await res.filename
            // await console.log(res)
            return result
        }
    })

    console.log(filenameres)
}

module.exports = {
    create_pdf
}