const mongoose = requiere('mongoose')
const Schema = mongoose.Schema

const  factura = new Schema ({

    idTrabajador: {
        type: i,
        requiere: true
    },
    idCliente: {
        type: int,
        default: true
    },
    tipoComprobante: {
        type: String, 
        requiere: true
    },
    numeroComprobante: {
        type: String,
        requiere: true
    },
    totalPago: {
        type: decimal,
        default: new Date()
    },
    fechaPago: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model ('factura', factura)
