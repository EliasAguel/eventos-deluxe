function eventoFuncion (nombre, precio, disponibles, cantidadPersona, otrosServicios) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibles = disponibles;
    this.otrosServicios = otrosServicios; 
    this.cantidadPersona = cantidadPersona;
    }


    let evento1 = new eventoFuncion ("Fiesta Retro", 500, 100, 4, 50)
    let evento2 = new eventoFuncion ("15s de Paula", 800, 250, 7, 0)
    let evento3 = new eventoFuncion ("Feria del libro", 2000, 1000, 10, 400)
    let evento4 = new eventoFuncion ("Jineteada de EL CORRAL", 200, 50, 3, 10)
    let evento5 = new eventoFuncion ("Festival del vino", 5000, 5000, 12, 500)
    let evento6 = new eventoFuncion ("Cumpleaños del bar EL MARIACHI", 600, 1200, 5, 100)
    let evento7 = new eventoFuncion ("Feria Comicon", 900, 950, 5, 150)
    let evento8 = new eventoFuncion ("Lobos vs Laprida", 560, 2100, 6, 320)
    let evento9 = new eventoFuncion ("Convencion de ingenieria moderna", 3200, 12000, 10, 600)
    let evento10 = new eventoFuncion ("Congreso provincial por el cuidado del medio hambiente", 740, 1800, 5, 130)

const eventosDisponibles = [];

eventosDisponibles.push (evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10);































/*   
this.calculo = function () {
        precioPersona = cantidad * this.precio;
        iva = precioPersona * 1.21;
        precioFinal = iva + (this.otrosServicios * cantidad);
        return precioFinal;
    }
    this.alert = function () {
        if (cantidad > this.cantidadPersona) {
            alert (`Numero de entradas invalido, solo se permite un limite de `+ this.cantidadPersona + ` entradas`)
        } 
        else if (cantidad <= this.cantidadPersona) {

            if (cantidad <= this.cantidadPersona) {
            alert (`El precio final es ${precioFinal}`)
            }
            else {
            alert
        } (`La cantidad de entradas solicitadas no estan disponibles`)
            }
        else {
            alert (`Valor incorrecto, por favor digite unicamente un valor numerico`)
        }
    }
*/