
/*
function eventoFuncion (id, nombre, precio, disponibles, cantidadPersona, otrosServicios) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.disponibles = parseInt(disponibles);
    this.otrosServicios = parseInt(otrosServicios); 
    this.cantidadPersona = parseInt(cantidadPersona)
    this.ingresarCantidad = function () {
        cantidad = parseInt(prompt(`Ingresar la cantidad de entradas que desea comprar`));
    }
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
}



let evento1 = new eventoFuncion (1, "Fiesta Retro", 500, 100, 4, 50)
let evento2 = new eventoFuncion (2, "15s de Paula", 800, 250, 7, 0)
let evento3 = new eventoFuncion (3, "Feria del libro", 2000, 1000, 10, 400)
let evento4 = new eventoFuncion (4, "Jineteada de EL CORRAL", 200, 50, 3, 10)
let evento5 = new eventoFuncion (5, "Festival del vino", 5000, 5000, 12, 500)
let evento6 = new eventoFuncion (6, "Cumpleaños del bar EL MARIACHI", 600, 1200, 5, 100)
let evento7 = new eventoFuncion (7, "Feria Comicon", 900, 950, 5, 150)
let evento8 = new eventoFuncion (8, "Lobos vs Laprida", 560, 2100, 6, 320)
let evento9 = new eventoFuncion (9, "Convencion de ingenieria moderna", 3200, 12000, 10, 600)
let evento10 = new eventoFuncion (10, "Congreso provincial por el cuidado del medio hambiente", 740, 1800, 5, 130)

const eventosDisponibles = [];

eventosDisponibles.push (evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10);




let eventosCercanos = document.getElementById("eventos");
function comprarEvento(eventosDisponibles){
    eventosCercanos.innerHTML = ""
    eventosDisponibles.forEach(() => {
        let nuevoEvento = document.createElement("li");
        nuevoEvento.innerHTML = <li id=""><a class="btnComprar">HOLA</a></li>
        eventosCercanos.append(nuevoEvento);
        })
    let btnCompra = document.getElementsByClassName("btnComprar");
    for(let compra of btnCompra){
    compra.addEventListener("click", ()=>{
        alert("¡Has comprado el producto Satisfactoriamente!");
    })
}


*/





/*

let eventoIngresado = parseInt(prompt(`Ingresar el numero del evento que desea comprar entradas \n [1] Evento 1 \n [2] Evento 2 \n [3] Evento 3 \n [4] Evento 4 \n [5] Evento 5 \n [6] Evento 6 \n [7] Evento 7 \n [8] Evento 8 \n [9] Evento 9 \n [10] Evento 10`));

if (eventoIngresado <= eventos.length) {
const busqueda = eventos.find((el) => el.nombre === eventoIngresado)
busqueda.ingresarCantidad();
busqueda.calculo();
busqueda.alert();
}
else {
    alert (`El numero ingresado no corresponde a un evento disponible, por favor intentelo nuevamente.`)
}
*/




/*
let interaccionEvento = document.getElementsByClassName ("onClik")
            for(let ticket of interaccionEvento){
            ticket.addEventListener("click", ()=>{
                alert(ticket.innerText);
            })
        }

*/
    


/*

function eventoFuncion (id, nombre, precio, disponibles, cantidadPersona, otrosServicios) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.disponibles = parseInt(disponibles);
    this.otrosServicios = parseInt(otrosServicios); 
    this.cantidadPersona = parseInt(cantidadPersona)
    this.ingresarCantidad = function () {
        cantidad = parseInt(prompt(`Ingresar la cantidad de entradas que desea comprar para ` + this.nombre));
    }
    this.calculo = function () {
        precioPersona = cantidad * this.precio;
        iva = precioPersona * 1.21;
        precioFinal = iva + (this.otrosServicios * cantidad);
        return precioFinal;
    }
    this.alert = function () {
        if (cantidad > this.cantidadPersona) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede comprar mas de ' + this.cantidadPersona + ' entradas por persona para este evento',
                footer: '<a href="">Volver a intentarlo</a>'
            })
        } 
        else if (cantidad <= this.cantidadPersona) {

            if (cantidad <= this.cantidadPersona) {
            alert (`El precio final es ${precioFinal}`)
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Su compra se ha realizado correctamente.',
                showConfirmButton: false,
                timer: 1500
            })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No hay disponibles esa cantidad de entradas en este momento para el evento',
                    footer: '<a href="">Volver a intentar</a>'
                })
        } 
            }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Valor incorrecto, por favor digite unicamente un valor numerico',
                footer: '<a href="">Volver a intentarlo</a>'
            })
        }
    }
}


let evento1 = new eventoFuncion (1, "Fiesta Retro", 500, 100, 4, 50)
let evento2 = new eventoFuncion (2, "15s de Paula", 800, 250, 7, 0)
let evento3 = new eventoFuncion (3, "Feria del libro", 2000, 1000, 10, 400)
let evento4 = new eventoFuncion (4, "Jineteada de EL CORRAL", 200, 50, 3, 10)
let evento5 = new eventoFuncion (5, "Festival del vino", 5000, 5000, 12, 500)
let evento6 = new eventoFuncion (6, "Cumpleaños del bar EL MARIACHI", 600, 1200, 5, 100)
let evento7 = new eventoFuncion (7, "Feria Comicon", 900, 950, 5, 150)
let evento8 = new eventoFuncion (8, "Lobos vs Laprida", 560, 2100, 6, 320)
let evento9 = new eventoFuncion (9, "Convencion de ingenieria moderna", 3200, 12000, 10, 600)
let evento10 = new eventoFuncion (10, "Congreso provincial por el cuidado del medio hambiente", 740, 1800, 5, 130)


const eventosDisponibles = [];

eventosDisponibles.push (evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10);


let interaccionEvento1 = document.getElementsByClassName ("evento-1")
            for(let ticket of interaccionEvento1){
            ticket.addEventListener("click", ()=>{
                const prueba = eventosDisponibles[0];
                prueba.ingresarCantidad();
                prueba.calculo();
                prueba.alert();

                
            })
        }

        let interaccionEvento2 = document.getElementsByClassName ("evento-2")
        for(let ticket of interaccionEvento2){
        ticket.addEventListener("click", ()=>{
            const prueba = eventosDisponibles[1];
            prueba.ingresarCantidad();
            prueba.calculo();
            prueba.alert();

            
        })
    }

    let interaccionEvento3 = document.getElementsByClassName ("evento-3")
    for(let ticket of interaccionEvento3){
    ticket.addEventListener("click", ()=>{
        const prueba = eventosDisponibles[2];
        prueba.ingresarCantidad();
        prueba.calculo();
        prueba.alert();


        
    })
}

let interaccionEvento4 = document.getElementsByClassName ("evento-4")
            for(let ticket of interaccionEvento4){
            ticket.addEventListener("click", ()=>{
                const prueba = eventosDisponibles[3];
                prueba.ingresarCantidad();
                prueba.calculo();
                prueba.alert();

                
            })
        }

        let interaccionEvento5 = document.getElementsByClassName ("evento-5")
        for(let ticket of interaccionEvento5){
        ticket.addEventListener("click", ()=>{
            const prueba = eventosDisponibles[4];
            prueba.ingresarCantidad();
            prueba.calculo();
            prueba.alert();

            
        })
    }


    let interaccionEvento6 = document.getElementsByClassName ("evento-6")
    for(let ticket of interaccionEvento6){
    ticket.addEventListener("click", ()=>{
        const prueba = eventosDisponibles[5];
        prueba.ingresarCantidad();
        prueba.calculo();
        prueba.alert();

        
    })
}

let interaccionEvento7 = document.getElementsByClassName ("evento-7")
            for(let ticket of interaccionEvento7){
            ticket.addEventListener("click", ()=>{
                const prueba = eventosDisponibles[6];
                prueba.ingresarCantidad();
                prueba.calculo();
                prueba.alert();

                
            })
        }

        let interaccionEvento8 = document.getElementsByClassName ("evento-8")
        for(let ticket of interaccionEvento8){
        ticket.addEventListener("click", ()=>{
            const prueba = eventosDisponibles[7];
            prueba.ingresarCantidad();
            prueba.calculo();
            prueba.alert();

            
        })
    }

    let interaccionEvento9 = document.getElementsByClassName ("evento-9")
    for(let ticket of interaccionEvento9){
    ticket.addEventListener("click", ()=>{
        const prueba = eventosDisponibles[8];
        prueba.ingresarCantidad();
        prueba.calculo();
        prueba.alert();

        
    })
}

let interaccionEvento10 = document.getElementsByClassName ("evento-10")
            for(let ticket of interaccionEvento10){
            ticket.addEventListener("click", ()=>{
                const prueba = eventosDisponibles[9];
                prueba.ingresarCantidad();
                prueba.calculo();
                prueba.alert();

                
            })
        }


    const enJSON1 = JSON.stringify(interaccionEvento1);
    const enJSON2 = JSON.stringify(interaccionEvento2);
    const enJSON3 = JSON.stringify(interaccionEvento3);
    const enJSON4 = JSON.stringify(interaccionEvento4)
    const enJSON5 = JSON.stringify(interaccionEvento5);
    const enJSON6 = JSON.stringify(interaccionEvento6);
    const enJSON7 = JSON.stringify(interaccionEvento7);
    const enJSON8 = JSON.stringify(interaccionEvento8);
    const enJSON9 = JSON.stringify(interaccionEvento9);
    const enJSON10 = JSON.stringify(interaccionEvento10);

    localStorage.setItem ("interaccionEvento1", enJson1);
    localStorage.setItem ("interaccionEvento2", enJson2);
    localStorage.setItem ("interaccionEvento3", enJson3);
    localStorage.setItem ("interaccionEvento4", enJson4);
    localStorage.setItem ("interaccionEvento5", enJson5);
    localStorage.setItem ("interaccionEvento6", enJson6);
    localStorage.setItem ("interaccionEvento7", enJson7);
    localStorage.setItem ("interaccionEvento8", enJson8);
    localStorage.setItem ("interaccionEvento9", enJson9);
    localStorage.setItem ("interaccionEvento10", enJson10);

    

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

*/

let id = [];

for (let i = 0; i < 10; i++) {
    let byid = `entrada` + i;
        id.push(byid);
    
}
let idEntrada = id;


let a = [];

for (let i = 0; i < 10; i++) {
    let b  = `valor` + i;
        a.push(b);
    
}
let valor = a;







let eventosPrincipal = [];

for (let i = 1; i <= 10; i++) {
    
    let eventoPagina = `evento` + i;
    eventosPrincipal.push(eventoPagina);
}

let comprado = [];

for (let i = 1; i <= 10; i++) {
    
    let comprarentradas = `compraEvento` + i;
    comprado.push(comprarentradas);
}

let idHTML = eventosPrincipal;


for (let i = 0; i < idHTML.length; i++) {
    let click = document.getElementById(idHTML[i]);
    let comprando = document.createElement("div");
    click.onclick = () => { 
        comprando.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div>
                Nombre del evento = ${eventosDisponibles[1].nombre}
            </div
            <form action="" id="cantidadEntradas">
            <input class="entrada" id="entrada${i}" type="number">
            <input type="submit" value="enviar">
        </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>`;
        
        document.body.append(comprando);
        let input =  document.getElementById(idEntrada[i]);
        input.addEventListener(`input`, () =>{
            let valor = input.value;
            let JSON1 = JSON.parse(valor);
            sessionStorage.setItem("input.value", JSON1);
        })
}
}

let cantidadEntradas = sessionStorage.getItem("input.value");

if (cantidadEntradas <= 0) {
    alert(`numero de entrada invalido, por favor digitar un numero igual o mayor a 1`)
}else{
    alert(`compra exitosa`);
}


